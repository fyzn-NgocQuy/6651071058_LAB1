window.AnimeVerse = window.AnimeVerse || {};

(function (AV) {
  const ANILIST_URL = 'https://graphql.anilist.co';
  const CACHE_KEY = 'av_anilist_cache_v2';
  const SEASON_CACHE_KEY = 'av_season_2026_cache_v1';
  const CACHE_TTL = 1000 * 60 * 60 * 12; // 12 giờ

  let memoryCache = {};
  try {
    memoryCache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
  } catch (e) { memoryCache = {}; }

  function saveCache() {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(memoryCache)); } catch (e) {}
  }

  const MEDIA_QUERY = `
    query ($search: String) {
      Media(search: $search, type: ANIME, sort: POPULARITY_DESC) {
        id idMal
        title { romaji english native }
        coverImage { extraLarge large color }
        bannerImage
        averageScore popularity trending
        episodes status season seasonYear
        streamingEpisodes { title thumbnail site }
        characters(sort: [FAVOURITES_DESC, ROLE], perPage: 12) {
          edges {
            role
            node {
              id
              name { full native }
              gender
              favourites
              description(asHtml: false)
              image { large medium }
            }
          }
        }
      }
    }
  `;

  const SEASON_QUERY = `
    query ($season: MediaSeason, $year: Int, $page: Int, $sort: [MediaSort]) {
      Page(page: $page, perPage: 16) {
        media(type: ANIME, season: $season, seasonYear: $year, sort: $sort, isAdult: false) {
          id idMal
          title { romaji english native }
          coverImage { extraLarge large color }
          bannerImage
          averageScore popularity trending episodes status season seasonYear
          genres
          studios(isMain: true) { nodes { name } }
          description(asHtml: false)
        }
      }
    }
  `;

  const TRENDING_QUERY = `
    query ($sort: [MediaSort], $perPage: Int) {
      Page(page: 1, perPage: $perPage) {
        media(type: ANIME, sort: $sort, isAdult: false) {
          id idMal
          title { romaji english native }
          coverImage { extraLarge large color }
          bannerImage
          averageScore popularity trending episodes status season seasonYear
          genres
          studios(isMain: true) { nodes { name } }
          characters(sort: [FAVOURITES_DESC, ROLE], perPage: 4) {
            edges {
              role
              node { id name { full native } favourites image { large } }
            }
          }
        }
      }
    }
  `;

  async function postAniList(query, variables) {
    const res = await fetch(ANILIST_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ query, variables })
    });
    if (!res.ok) throw new Error('AniList HTTP ' + res.status);
    const json = await res.json();
    if (json.errors) throw new Error(json.errors[0].message);
    return json.data;
  }

  function cleanDesc(text) {
    if (!text) return '';
    return text.replace(/~!.*?!~/gs, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  }

  function mergeCharacters(anime, edges) {
    if (!edges || !edges.length) return anime.characters || [];
    const existing = (anime.characters || []).map(ch => ({ ...ch }));
    const normalize = s => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

    edges.forEach(edge => {
      const node = edge.node;
      if (!node || !node.name) return;
      const fullName = node.name.full || '';
      const normApi = normalize(fullName);
      const match = existing.find(local => {
        const nl = normalize(local.name);
        return nl === normApi || nl.includes(normApi) || normApi.includes(nl);
      });

      const artUrl = node.image && (node.image.large || node.image.medium) || '';
      if (match) {
        if (!match.image) match.image = artUrl;
        if (!match.jp && node.name.native) match.jp = node.name.native;
        match.favourites = node.favourites || 0;
        match.imageSource = 'Official Art • AniList';
      } else if (existing.length < 12) {
        const roleLabel = edge.role === 'MAIN' ? 'Nhân vật chính' : 'Nhân vật chủ chốt';
        const genderVi = node.gender === 'Female' ? 'Nữ' : node.gender === 'Male' ? 'Nam' : 'Khác';
        const bio = cleanDesc(node.description).slice(0, 140) || 'Nhân vật xuất hiện chính thức trong tác phẩm.';
        existing.push({
          slug: fullName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
          name: fullName,
          jp: node.name.native || '',
          alias: edge.role === 'MAIN' ? 'Nhân vật trung tâm' : 'Thành viên thế giới ' + anime.title,
          role: roleLabel,
          gender: genderVi,
          personality: bio,
          power: 'Kỹ năng đặc trưng theo nguyên tác ' + anime.title,
          weapon: 'Trang bị / Năng lực riêng',
          quote: 'Xuất hiện trong ' + anime.title + ' (' + (node.favourites || 0) + ' lượt yêu thích trên AniList).',
          color: anime.theme ? anime.theme.primary : '#a855f7',
          image: artUrl,
          imageSource: 'Official Art • AniList',
          favourites: node.favourites || 0
        });
      }
    });
    return existing;
  }

  async function fetchJikanPictures(malId) {
    if (!malId) return [];
    try {
      const r = await fetch(`https://api.jikan.moe/v4/anime/${malId}/pictures`);
      if (!r.ok) return [];
      const j = await r.json();
      return (j.data || []).map(p => p.jpg && (p.jpg.large_image_url || p.jpg.image_url)).filter(Boolean);
    } catch (e) {
      return [];
    }
  }

  async function hydrateAnime(anime, deep = false) {
    if (!anime) return anime;
    const key = anime.anilistSearch || anime.title;
    const cached = memoryCache[key];
    let media = null;

    if (cached && (Date.now() - cached.ts < CACHE_TTL)) {
      media = cached.data;
    } else if (navigator.onLine !== false) {
      try {
        const data = await postAniList(MEDIA_QUERY, { search: key });
        media = data.Media;
        if (media) {
          memoryCache[key] = { ts: Date.now(), data: media };
          saveCache();
        }
      } catch (e) {
        if (cached) media = cached.data;
      }
    }

    if (media) {
      anime.anilistId = media.id;
      anime.malId = media.idMal;
      anime.poster = (media.coverImage && (media.coverImage.extraLarge || media.coverImage.large)) || anime.poster;
      anime.banner = media.bannerImage || anime.poster;
      if (media.averageScore) {
        anime.liveScore = (media.averageScore / 10).toFixed(1);
        anime.scoreSource = 'AniList Live';
      }
      anime.livePopularity = media.popularity;
      anime.liveTrending = media.trending;
      if (media.characters && media.characters.edges) {
        anime.characters = mergeCharacters(anime, media.characters.edges);
      }

      // Ảnh phân cảnh thực tế từ Streaming Episodes hoặc Jikan Pictures
      const streamThumbs = (media.streamingEpisodes || [])
        .filter(ep => ep.thumbnail)
        .map(ep => ({ url: ep.thumbnail, epTitle: ep.title, source: ep.site || 'Official Stream' }));

      if (deep && streamThumbs.length < 5 && media.idMal) {
        const jikanPics = await fetchJikanPictures(media.idMal);
        jikanPics.forEach(url => {
          if (!streamThumbs.some(x => x.url === url)) {
            streamThumbs.push({ url, epTitle: 'Artwork chính thức', source: 'MyAnimeList / Jikan' });
          }
        });
      }

      if (streamThumbs.length) {
        anime.momentImages = streamThumbs.slice(0, 8);
      } else if (media.bannerImage) {
        anime.momentImages = [{ url: media.bannerImage, epTitle: 'Key Visual Banner', source: 'AniList' }];
      }
    }
    return anime;
  }

  async function hydrateMany(list, limit = 16, onProgress) {
    const slice = list.slice(0, limit);
    const batchSize = 4;
    for (let i = 0; i < slice.length; i += batchSize) {
      const batch = slice.slice(i, i + batchSize);
      await Promise.all(batch.map(item => hydrateAnime(item, false)));
      if (onProgress) onProgress(batch);
      await new Promise(r => setTimeout(r, 120));
    }
    return slice;
  }

  async function fetchSeasonal(season, year = 2026, forceRefresh = false) {
    const cacheKey = `${SEASON_CACHE_KEY}_${season}_${year}`;
    if (!forceRefresh) {
      try {
        const cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
        if (cached && (Date.now() - cached.ts < 1000 * 60 * 60 * 3)) {
          return { items: cached.items, updatedAt: cached.ts, live: false, fromCache: true };
        }
      } catch (e) {}
    }

    const data = await postAniList(SEASON_QUERY, {
      season, year, page: 1, sort: ['POPULARITY_DESC', 'TRENDING_DESC']
    });
    const media = (data && data.Page && data.Page.media) || [];
    const items = media.map(m => ({
      anilistId: m.id,
      malId: m.idMal,
      title: m.title.english || m.title.romaji,
      titleJp: m.title.native || '',
      poster: m.coverImage.extraLarge || m.coverImage.large,
      banner: m.bannerImage || m.coverImage.extraLarge,
      score: m.averageScore ? (m.averageScore / 10).toFixed(1) : 'N/A',
      episodes: m.episodes ? m.episodes + ' tập' : 'Đang cập nhật',
      status: m.status,
      season: m.season,
      year: m.seasonYear || year,
      genres: (m.genres || []).slice(0, 3),
      studio: (m.studios && m.studios.nodes && m.studios.nodes[0] && m.studios.nodes[0].name) || 'Đang cập nhật',
      desc: cleanDesc(m.description) || 'Thông tin chi tiết được đồng bộ trực tiếp từ AniList GraphQL.',
      url: `https://anilist.co/anime/${m.id}`
    }));

    const now = Date.now();
    try { localStorage.setItem(cacheKey, JSON.stringify({ ts: now, items })); } catch (e) {}
    return { items, updatedAt: now, live: true, fromCache: false };
  }

  async function fetchLiveTrending(sortMode = 'TRENDING_DESC', perPage = 10) {
    const data = await postAniList(TRENDING_QUERY, { sort: [sortMode], perPage });
    return (data && data.Page && data.Page.media) || [];
  }

  AV.API = { hydrateAnime, hydrateMany, fetchSeasonal, fetchLiveTrending, postAniList };
})(window.AnimeVerse);

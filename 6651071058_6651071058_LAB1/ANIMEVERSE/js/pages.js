window.AnimeVerse = window.AnimeVerse || {};

(function (AV) {
  const UI = AV.UI;
  const API = AV.API;

  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  // ==================== 1. TRANG CHỦ ====================
  async function initHome() {
    const heroSlides = [
      AV.getById('frieren'),
      AV.getById('solo-leveling'),
      AV.getById('jujutsu-kaisen-s3'),
      AV.getById('demon-slayer-infinity-castle'),
      AV.getById('one-piece')
    ];

    const heroEl = document.getElementById('av-hero-slideshow');
    let slideIdx = 0;
    let slideTimer = null;

    function renderHero(idx) {
      slideIdx = (idx + heroSlides.length) % heroSlides.length;
      const a = heroSlides[slideIdx];
      heroEl.style.setProperty('--hero-accent', a.theme.primary);
      heroEl.style.setProperty('--hero-secondary', a.theme.secondary);

      heroEl.querySelectorAll('.hero-bg-layer').forEach((layer, i) => {
        layer.classList.toggle('active', i === slideIdx);
      });
      heroEl.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === slideIdx));

      document.getElementById('hero-title').textContent = a.title;
      document.getElementById('hero-jp').textContent = `${a.titleJp} • ${a.titleVi || ''}`;
      document.getElementById('hero-desc').textContent = a.shortDesc;
      document.getElementById('hero-meta').innerHTML = `
        ${UI.statusBadge(a.status)}
        <span class="badge">${a.year} (${a.releaseSeason})</span>
        <span class="badge">${a.episodes}</span>
        <span class="badge">★ ${a.liveScore || a.rating}</span>
        ${a.genres.slice(0, 3).map(g => `<span class="badge">${g}</span>`).join('')}
      `;
      document.getElementById('hero-btn-detail').href = `anime-detail.html?id=${a.id}`;
      document.getElementById('hero-btn-char').href = `anime-detail.html?id=${a.id}#character-showcase`;
      const posterImg = document.getElementById('hero-poster-img');
      if (a.poster) posterImg.src = a.poster;
    }

    if (heroEl) {
      const bgWrap = document.getElementById('hero-bg-wrap');
      const dotsWrap = document.getElementById('hero-dots');
      bgWrap.innerHTML = heroSlides.map((s, i) => `<div class="hero-bg-layer ${i === 0 ? 'active' : ''}" data-slide="${i}" style="background-image:url('${s.banner || s.poster || ''}')"></div>`).join('');
      dotsWrap.innerHTML = heroSlides.map((_, i) => `<button class="hero-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Slide ${i + 1}"></button>`).join('');

      dotsWrap.querySelectorAll('.hero-dot').forEach(btn => btn.addEventListener('click', () => { renderHero(Number(btn.dataset.slide)); resetAuto(); }));
      document.getElementById('hero-prev').addEventListener('click', () => { renderHero(slideIdx - 1); resetAuto(); });
      document.getElementById('hero-next').addEventListener('click', () => { renderHero(slideIdx + 1); resetAuto(); });

      function resetAuto() {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => renderHero(slideIdx + 1), 6500);
      }
      renderHero(0);
      resetAuto();

      // Parallax cuộn trang mượt
      window.addEventListener('scroll', () => {
        const y = Math.min(window.scrollY, 700);
        const activeLayer = heroEl.querySelector('.hero-bg-layer.active');
        if (activeLayer) activeLayer.style.transform = `scale(1.04) translateY(${y * 0.14}px)`;
      }, { passive: true });
    }

    // Các khu vực nội dung trang chủ
    const trending = [...AV.ANIME_LIST].sort((a, b) => a.popularityRank - b.popularityRank).slice(0, 10);
    const classics = AV.ANIME_LIST.filter(a => a.era === 'classic').slice(0, 10);
    const latest2426 = AV.ANIME_LIST.filter(a => a.era === 'latest').slice(0, 10);
    const topRated = [...AV.ANIME_LIST].sort((a, b) => b.rating - a.rating).slice(0, 10);
    const notable = ['orb-earth', 'witch-hat-atelier', 'cyberpunk-edgerunners', 'bocchi-the-rock', 'cowboy-bebop', 'evangelion', 'lazarus', 'apothecary-diaries'].map(AV.getById);

    document.getElementById('home-trending').innerHTML = trending.map(UI.renderAnimeCard).join('');
    document.getElementById('home-latest').innerHTML = latest2426.map(UI.renderAnimeCard).join('');
    document.getElementById('home-classic').innerHTML = classics.map(UI.renderAnimeCard).join('');
    document.getElementById('home-top-rated').innerHTML = topRated.map(UI.renderAnimeCard).join('');
    document.getElementById('home-notable').innerHTML = notable.map(UI.renderAnimeCard).join('');

    document.getElementById('home-genres').innerHTML = AV.GENRES.map(g => {
      const count = AV.ANIME_LIST.filter(a => a.genres.includes(g.id)).length;
      return `
        <a href="genres.html?genre=${encodeURIComponent(g.id)}" class="genre-card" style="--g-color:${g.color};">
          <h4>${g.id} &bull; ${g.vi}</h4>
          <p>${count} tác phẩm tiêu biểu</p>
        </a>
      `;
    }).join('');

    // Character Showcase nổi bật ngay trên Trang chủ (chuyển giữa 5 anime hàng đầu)
    const showcaseAnimes = ['naruto-shippuden', 'one-piece', 'jujutsu-kaisen', 'demon-slayer', 'solo-leveling'].map(AV.getById);
    const switcherEl = document.getElementById('home-char-switcher');
    const stageEl = document.getElementById('home-char-showcase');

    async function loadHomeShowcase(anime) {
      switcherEl.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.id === anime.id));
      await API.hydrateAnime(anime, false);
      AV.CharacterShowcase.mount(stageEl, anime);
    }

    switcherEl.innerHTML = showcaseAnimes.map((a, i) => `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-id="${a.id}">${a.title}</button>`).join('');
    switcherEl.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => loadHomeShowcase(AV.getById(btn.dataset.id)));
    });
    loadHomeShowcase(showcaseAnimes[0]);

    // Nạp ảnh poster/banner thực tế cho Hero & các hàng card
    API.hydrateMany(heroSlides, 5, batch => {
      batch.forEach((a, i) => {
        const layer = document.querySelector(`.hero-bg-layer[data-slide="${i}"]`);
        if (layer && (a.banner || a.poster)) layer.style.backgroundImage = `url('${a.banner || a.poster}')`;
      });
      if (heroSlides[slideIdx] && heroSlides[slideIdx].poster) {
        document.getElementById('hero-poster-img').src = heroSlides[slideIdx].poster;
      }
      UI.patchHydratedCards(batch);
    });

    const uniqueVisible = Array.from(new Map([...trending, ...latest2426, ...classics, ...topRated, ...notable].map(x => [x.id, x])).values());
    API.hydrateMany(uniqueVisible, 32, UI.patchHydratedCards);
  }

  // ==================== 2. TRANG KHÁM PHÁ (EXPLORE) ====================
  function initExplore() {
    const qInput = document.getElementById('exp-query');
    const genreSel = document.getElementById('exp-genre');
    const eraSel = document.getElementById('exp-era');
    const seasonSel = document.getElementById('exp-season');
    const statusSel = document.getElementById('exp-status');
    const scoreSel = document.getElementById('exp-score');
    const sortSel = document.getElementById('exp-sort');
    const grid = document.getElementById('exp-grid');
    const countEl = document.getElementById('exp-count');
    const suggestEl = document.getElementById('exp-suggest');

    genreSel.innerHTML = `<option value="">Tất cả thể loại</option>` + AV.GENRES.map(g => `<option value="${g.id}">${g.id} (${g.vi})</option>`).join('');

    const initEra = qs('era');
    const initGenre = qs('genre');
    if (initEra) eraSel.value = initEra;
    if (initGenre) genreSel.value = initGenre;

    function applyFilter() {
      const q = qInput.value.trim().toLowerCase();
      const g = genreSel.value;
      const era = eraSel.value;
      const sea = seasonSel.value;
      const st = statusSel.value;
      const minS = Number(scoreSel.value || 0);
      const sort = sortSel.value;

      let filtered = AV.ANIME_LIST.filter(a => {
        if (q && ![a.title, a.titleJp, a.titleEn, a.titleVi, a.studio].some(t => (t || '').toLowerCase().includes(q))) return false;
        if (g && !a.genres.includes(g)) return false;
        if (era && a.era !== era) return false;
        if (sea && a.releaseSeason !== sea) return false;
        if (st && a.status !== st) return false;
        if ((Number(a.liveScore || a.rating)) < minS) return false;
        return true;
      });

      if (sort === 'popularity') filtered.sort((a, b) => a.popularityRank - b.popularityRank);
      else if (sort === 'rating') filtered.sort((a, b) => Number(b.liveScore || b.rating) - Number(a.liveScore || a.rating));
      else if (sort === 'newest') filtered.sort((a, b) => b.year - a.year);
      else if (sort === 'oldest') filtered.sort((a, b) => a.year - b.year);

      countEl.textContent = `Hiển thị ${filtered.length} / ${AV.ANIME_LIST.length} anime`;
      grid.innerHTML = filtered.length
        ? filtered.map(UI.renderAnimeCard).join('')
        : `<div class="filter-panel" style="grid-column:1/-1;text-align:center;">Không tìm thấy bộ anime phù hợp với tiêu chí lọc.</div>`;

      API.hydrateMany(filtered, 24, UI.patchHydratedCards);
    }

    qInput.addEventListener('input', () => {
      const q = qInput.value.trim().toLowerCase();
      if (q.length >= 2) {
        const hits = AV.ANIME_LIST.filter(a => [a.title, a.titleJp, a.titleVi].some(t => (t || '').toLowerCase().includes(q))).slice(0, 5);
        suggestEl.innerHTML = hits.length
          ? `Gợi ý nhanh: ` + hits.map(h => `<a href="anime-detail.html?id=${h.id}" class="badge" style="margin-left:6px;">${h.title}</a>`).join('')
          : '';
      } else { suggestEl.innerHTML = ''; }
      applyFilter();
    });

    [genreSel, eraSel, seasonSel, statusSel, scoreSel, sortSel].forEach(el => el.addEventListener('change', applyFilter));
    document.getElementById('exp-reset').addEventListener('click', () => {
      qInput.value = ''; genreSel.value = ''; eraSel.value = ''; seasonSel.value = ''; statusSel.value = ''; scoreSel.value = '0'; sortSel.value = 'popularity';
      suggestEl.innerHTML = '';
      applyFilter();
    });

    applyFilter();
  }

  // ==================== 3. TRANG CHI TIẾT ANIME ====================
  async function initDetail() {
    const id = qs('id') || 'frieren';
    const anime = AV.getById(id);
    document.title = `${anime.title} – ANIMEVERSE`;

    const bannerEl = document.getElementById('detail-banner');
    bannerEl.style.setProperty('--accent-primary', anime.theme.primary);
    bannerEl.style.setProperty('--accent-secondary', anime.theme.secondary);

    function paintBanner() {
      document.getElementById('detail-bg-blur').style.backgroundImage = `url('${anime.banner || anime.poster || ''}')`;
      document.getElementById('detail-poster').src = anime.poster || '';
      document.getElementById('detail-title').textContent = anime.title;
      document.getElementById('detail-jp').textContent = [anime.titleJp, anime.titleVi].filter(Boolean).join(' • ');
      document.getElementById('detail-desc').textContent = anime.fullDesc || anime.shortDesc;
      document.getElementById('detail-badges').innerHTML = `
        ${UI.statusBadge(anime.status)}
        <span class="badge">${anime.statusLabel}</span>
        <span class="badge">★ ${anime.liveScore || anime.rating} ${anime.liveScore ? '(AniList Live)' : '(Tham chiếu)'}</span>
        ${anime.genres.map(g => `<a href="genres.html?genre=${encodeURIComponent(g)}" class="badge">${g}</a>`).join('')}
      `;
      document.getElementById('detail-specs').innerHTML = `
        <div class="spec-item"><small>Tên tiếng Nhật</small><strong>${anime.titleJp || '—'}</strong></div>
        <div class="spec-item"><small>Tên tiếng Anh</small><strong>${anime.titleEn || anime.title}</strong></div>
        <div class="spec-item"><small>Tên tiếng Việt</small><strong>${anime.titleVi || '—'}</strong></div>
        <div class="spec-item"><small>Studio</small><strong>${anime.studio}</strong></div>
        <div class="spec-item"><small>Nguyên tác</small><strong>${anime.creator}</strong></div>
        <div class="spec-item"><small>Đạo diễn</small><strong>${anime.director}</strong></div>
        <div class="spec-item"><small>Phát hành</small><strong>${anime.releaseSeason} ${anime.year}</strong></div>
        <div class="spec-item"><small>Số mùa & Số tập</small><strong>${anime.seasons} mùa • ${anime.episodes}</strong></div>
      `;
    }

    paintBanner();

    // Hydrate sâu từ AniList + Jikan cho nhân vật & Iconic Moments
    await API.hydrateAnime(anime, true);
    paintBanner();

    // Mount Character Showcase (8–12 nhân vật)
    AV.CharacterShowcase.mount(document.getElementById('detail-char-showcase'), anime);

    // Iconic Moments + Spoiler Mode + Lightbox
    const momentsGrid = document.getElementById('detail-moments-grid');
    const spoilerToggle = document.getElementById('spoiler-toggle');
    const realImgs = anime.momentImages || [];
    const momentsData = (anime.highlights || []).map((m, idx) => {
      const pic = realImgs[idx % Math.max(realImgs.length, 1)] || null;
      return {
        title: m.title,
        desc: m.desc,
        spoiler: !!m.spoiler,
        img: pic ? pic.url : (anime.banner || anime.poster || ''),
        source: pic ? `${pic.source} (${pic.epTitle})` : 'Key Visual tác phẩm'
      };
    });

    // Bổ sung thêm các phân cảnh tập phim nếu API trả về nhiều hơn
    realImgs.slice(momentsData.length, 8).forEach((pic, idx) => {
      momentsData.push({
        title: pic.epTitle || `Phân cảnh ${momentsData.length + idx + 1}`,
        desc: `Khoảnh khắc chính thức trích từ ${anime.title}.`,
        spoiler: false,
        img: pic.url,
        source: pic.source
      });
    });

    function renderMoments() {
      const showSpoiler = spoilerToggle.checked;
      momentsGrid.innerHTML = momentsData.map((m, i) => `
        <div class="moment-card ${m.spoiler ? 'is-spoiler' : ''} ${showSpoiler ? 'spoiler-revealed' : ''}" data-idx="${i}">
          <img src="${m.img}" alt="${m.title}" loading="lazy" />
          ${m.spoiler ? `<div class="spoiler-shield"><span class="badge badge-upcoming">Cảnh báo Spoiler</span><small>Bật chế độ Spoiler ở trên để xem rõ</small></div>` : ''}
          <div class="moment-overlay">
            <h4>${m.title}</h4>
            <p>${m.desc}</p>
            <small style="color:var(--accent-secondary);font-size:0.7rem;margin-top:4px;">Nguồn: ${m.source}</small>
          </div>
        </div>
      `).join('');

      momentsGrid.querySelectorAll('.moment-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = Number(card.dataset.idx);
          if (momentsData[idx].spoiler && !spoilerToggle.checked) return;
          openLightbox(idx);
        });
      });
    }

    spoilerToggle.addEventListener('change', renderMoments);
    renderMoments();

    // Lightbox Controller
    const lb = document.getElementById('av-lightbox');
    let lbIdx = 0;
    function openLightbox(idx) {
      lbIdx = (idx + momentsData.length) % momentsData.length;
      const m = momentsData[lbIdx];
      document.getElementById('lb-img').src = m.img;
      document.getElementById('lb-title').textContent = m.title;
      document.getElementById('lb-desc').textContent = `${m.desc} — Nguồn: ${m.source}`;
      lb.classList.add('open');
    }
    document.getElementById('lb-close').addEventListener('click', () => lb.classList.remove('open'));
    document.getElementById('lb-prev').addEventListener('click', () => openLightbox(lbIdx - 1));
    document.getElementById('lb-next').addEventListener('click', () => openLightbox(lbIdx + 1));
    lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lb.classList.remove('open');
      if (e.key === 'ArrowLeft') openLightbox(lbIdx - 1);
      if (e.key === 'ArrowRight') openLightbox(lbIdx + 1);
    });

    // Related Anime
    const relatedList = (anime.related || []).map(AV.getById).filter(x => x && x.id !== anime.id);
    const fallbackRelated = AV.ANIME_LIST.filter(x => x.id !== anime.id && x.genres.some(g => anime.genres.includes(g))).slice(0, 4);
    const relFinal = relatedList.length ? relatedList : fallbackRelated;
    document.getElementById('detail-related').innerHTML = relFinal.map(UI.renderAnimeCard).join('');
    API.hydrateMany(relFinal, 4, UI.patchHydratedCards);
  }

  // ==================== 4. TRANG NHÂN VẬT (CHARACTERS) ====================
  async function initCharacters() {
    const grid = document.getElementById('chars-grid');
    const qInput = document.getElementById('char-q');
    const animeSel = document.getElementById('char-anime-filter');
    const genderSel = document.getElementById('char-gender-filter');
    const roleSel = document.getElementById('char-role-filter');
    const modal = document.getElementById('char-modal');
    const modalStage = document.getElementById('char-modal-stage');

    animeSel.innerHTML = `<option value="">Tất cả anime</option>` + AV.ANIME_LIST.map(a => `<option value="${a.id}">${a.title}</option>`).join('');

    // Hydrate trước nhóm anime tiêu biểu có sẵn hồ sơ nhân vật để hiển thị ngay ảnh đẹp
    const withChars = AV.ANIME_LIST.filter(a => a.characters && a.characters.length > 0);
    await API.hydrateMany(withChars, 14);

    function collectChars() {
      const rows = [];
      AV.ANIME_LIST.forEach(a => {
        (a.characters || []).forEach(ch => rows.push({ anime: a, char: ch }));
      });
      return rows;
    }

    function renderList() {
      const q = qInput.value.trim().toLowerCase();
      const aid = animeSel.value;
      const g = genderSel.value;
      const r = roleSel.value;

      const list = collectChars().filter(({ anime, char }) => {
        if (aid && anime.id !== aid) return false;
        if (g && char.gender !== g) return false;
        if (r === 'main' && !char.role.toLowerCase().includes('chính')) return false;
        if (r === 'antagonist' && !char.role.toLowerCase().includes('phản diện')) return false;
        if (q && ![char.name, char.jp, char.alias, anime.title].some(t => (t || '').toLowerCase().includes(q))) return false;
        return true;
      });

      document.getElementById('chars-count').textContent = `Hiển thị ${list.length} nhân vật từ kho dữ liệu`;
      grid.innerHTML = list.map(({ anime, char }) => `
        <article class="anime-card" style="--card-accent:${char.color};cursor:pointer;" data-aid="${anime.id}" data-cslug="${char.slug}">
          <div class="card-poster-wrap">
            <img class="card-poster-img" src="${char.image || anime.poster || ''}" alt="${char.name}" loading="lazy" />
            <div class="card-poster-overlay"></div>
            <div class="card-top-badges">
              <span class="badge">${char.gender}</span>
              <span class="score-pill">${anime.title}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">${char.name}</h3>
            <div class="card-meta"><span>${char.jp || ''}</span> &bull; <span>${char.role}</span></div>
            <p class="card-desc">${char.power}</p>
            <div class="card-footer">
              <button class="btn btn-glass btn-sm" type="button">Mở Character Showcase</button>
            </div>
          </div>
        </article>
      `).join('');

      grid.querySelectorAll('.anime-card').forEach(card => {
        card.addEventListener('click', async () => {
          const anime = AV.getById(card.dataset.aid);
          modal.classList.add('open');
          await API.hydrateAnime(anime, false);
          AV.CharacterShowcase.mount(modalStage, anime, { initialCharSlug: card.dataset.cslug });
        });
      });
    }

    document.getElementById('char-modal-close').addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
    [qInput, animeSel, genderSel, roleSel].forEach(el => el.addEventListener('input', renderList));

    renderList();
  }

  // ==================== 5. BẢNG XẾP HẠNG (RANKING) ====================
  async function initRanking() {
    const listEl = document.getElementById('ranking-list');
    const tabs = document.querySelectorAll('#ranking-tabs .tab-btn');
    const noteEl = document.getElementById('ranking-source-note');

    await API.hydrateMany(AV.ANIME_LIST, 20);

    function renderRows(items, label) {
      noteEl.textContent = label;
      listEl.innerHTML = items.map((a, idx) => `
        <div class="ranking-row">
          <div class="rank-num">#${idx + 1}</div>
          <img class="rank-thumb" src="${a.poster || ''}" alt="${a.title}" loading="lazy" />
          <div>
            <h3 style="font-family:var(--font-display);font-size:1.08rem;">${a.title}</h3>
            <p style="font-size:0.84rem;color:var(--text-muted);margin:4px 0;">${a.studio} &bull; ${a.releaseSeason} ${a.year} &bull; ${a.episodes}</p>
            <div class="card-genres">${a.genres.map(g => `<span class="genre-chip">${g}</span>`).join('')}</div>
          </div>
          <div class="rank-action" style="text-align:right;">
            <div class="score-pill" style="margin-bottom:8px;display:inline-block;">★ ${a.liveScore || a.rating}</div><br/>
            <a href="anime-detail.html?id=${a.id}" class="btn btn-glass btn-sm">Chi tiết</a>
          </div>
        </div>
      `).join('');
    }

    function renderCharsRanking() {
      noteEl.textContent = 'Top nhân vật được yêu thích (theo lượt yêu thích AniList & mức độ biểu tượng)';
      const allChars = [];
      AV.ANIME_LIST.forEach(a => (a.characters || []).forEach(c => allChars.push({ anime: a, char: c })));
      allChars.sort((x, y) => (y.char.favourites || 0) - (x.char.favourites || 0));
      listEl.innerHTML = allChars.slice(0, 15).map((row, idx) => `
        <div class="ranking-row">
          <div class="rank-num">#${idx + 1}</div>
          <img class="rank-thumb" src="${row.char.image || row.anime.poster || ''}" alt="${row.char.name}" loading="lazy" />
          <div>
            <h3 style="font-family:var(--font-display);font-size:1.08rem;">${row.char.name} <small style="color:var(--accent-secondary);">(${row.char.jp})</small></h3>
            <p style="font-size:0.84rem;color:var(--text-muted);">${row.anime.title} &bull; ${row.char.role}</p>
            <p style="font-size:0.8rem;color:#cbd5e1;">${row.char.power}</p>
          </div>
          <div class="rank-action">
            <a href="anime-detail.html?id=${row.anime.id}#character-showcase" class="btn btn-glass btn-sm">Xem Showcase</a>
          </div>
        </div>
      `).join('');
    }

    async function switchTab(tab) {
      tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
      if (tab === 'popular') renderRows([...AV.ANIME_LIST].sort((a, b) => a.popularityRank - b.popularityRank).slice(0, 10), 'Top 10 Anime nổi tiếng toàn cầu');
      else if (tab === 'rated') renderRows([...AV.ANIME_LIST].sort((a, b) => Number(b.liveScore || b.rating) - Number(a.liveScore || a.rating)).slice(0, 10), 'Top 10 Anime được đánh giá cao nhất');
      else if (tab === 'trending-live') {
        listEl.innerHTML = `<div class="filter-panel">Đang truy vấn Top 10 Trending thời gian thực từ AniList GraphQL...</div>`;
        try {
          const live = await API.fetchLiveTrending('TRENDING_DESC', 10);
          noteEl.textContent = 'Dữ liệu Top 10 Anime đang thịnh hành thời gian thực từ AniList API';
          listEl.innerHTML = live.map((m, i) => `
            <div class="ranking-row">
              <div class="rank-num">#${i + 1}</div>
              <img class="rank-thumb" src="${m.coverImage.large}" alt="${m.title.romaji}" />
              <div>
                <h3 style="font-family:var(--font-display);">${m.title.english || m.title.romaji}</h3>
                <p style="font-size:0.84rem;color:var(--text-muted);">${m.season || ''} ${m.seasonYear || ''} &bull; ${m.episodes || '?'} tập &bull; Trending: ${m.trending}</p>
                <div class="card-genres">${(m.genres || []).slice(0, 3).map(g => `<span class="genre-chip">${g}</span>`).join('')}</div>
              </div>
              <div class="rank-action">
                <span class="score-pill">★ ${m.averageScore ? (m.averageScore / 10).toFixed(1) : 'N/A'}</span>
              </div>
            </div>
          `).join('');
        } catch (e) {
          renderRows([...AV.ANIME_LIST].sort((a, b) => a.popularityRank - b.popularityRank).slice(0, 10), 'Mất kết nối API – Hiển thị dữ liệu dự phòng cục bộ');
        }
      } else if (tab === 'characters') renderCharsRanking();
      else if (tab === '2024') renderRows(AV.ANIME_LIST.filter(a => a.year === 2024).slice(0, 10), 'Anime nổi bật năm 2024');
      else if (tab === '2025') renderRows(AV.ANIME_LIST.filter(a => a.year === 2025).slice(0, 10), 'Anime nổi bật năm 2025');
      else if (tab === '2026') renderRows(AV.ANIME_LIST.filter(a => a.year === 2026 || a.statusLabel.includes('2026')).slice(0, 10), 'Anime nổi bật năm 2026');
    }

    tabs.forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));
    switchTab('popular');
  }

  // ==================== 6. THỂ LOẠI (GENRES) ====================
  function initGenres() {
    const genreBox = document.getElementById('genres-cards');
    const grid = document.getElementById('genres-anime-grid');
    const heading = document.getElementById('genres-active-title');
    let selected = qs('genre') || 'Action';

    function render() {
      genreBox.innerHTML = AV.GENRES.map(g => {
        const cnt = AV.ANIME_LIST.filter(a => a.genres.includes(g.id)).length;
        return `
          <div class="genre-card ${g.id === selected ? 'active' : ''}" data-gid="${g.id}" style="--g-color:${g.color};">
            <h4>${g.id} &bull; ${g.vi}</h4>
            <p>${g.desc} (${cnt} bộ)</p>
          </div>
        `;
      }).join('');

      genreBox.querySelectorAll('.genre-card').forEach(c => {
        c.addEventListener('click', () => { selected = c.dataset.gid; render(); });
      });

      const list = AV.ANIME_LIST.filter(a => a.genres.includes(selected));
      const gObj = AV.GENRES.find(x => x.id === selected);
      heading.textContent = `${selected} (${gObj ? gObj.vi : ''}) – ${list.length} tác phẩm`;
      grid.innerHTML = list.map(UI.renderAnimeCard).join('');
      API.hydrateMany(list, 20, UI.patchHydratedCards);
    }
    render();
  }

  // ==================== 7. ANIME MỚI NHẤT 2024–2026 (THỜI GIAN THỰC) ====================
  function initLatest() {
    const liveGrid = document.getElementById('latest-live-grid');
    const curatedGrid = document.getElementById('latest-curated-grid');
    const statusBadgeEl = document.getElementById('latest-api-badge');
    const updatedAtEl = document.getElementById('latest-updated-at');
    const seasonBtns = document.querySelectorAll('#season-2026-tabs .tab-btn');
    let activeSeason = 'FALL';
    let activeYear = 2026;

    async function loadSeason(season, year, force = false) {
      activeSeason = season;
      activeYear = year;
      seasonBtns.forEach(b => b.classList.toggle('active', b.dataset.season === season && Number(b.dataset.year) === year));
      liveGrid.innerHTML = `<div class="filter-panel" style="grid-column:1/-1;text-align:center;">Đang kết nối AniList GraphQL tải anime ${season} ${year}...</div>`;
      statusBadgeEl.className = 'badge badge-airing';
      statusBadgeEl.textContent = 'Đang đồng bộ API...';

      try {
        const res = await API.fetchSeasonal(season, year, force);
        statusBadgeEl.className = res.live ? 'badge badge-live' : 'badge badge-completed';
        statusBadgeEl.textContent = res.live ? 'Trực tuyến (AniList GraphQL Live)' : 'Dữ liệu Cache trình duyệt';
        updatedAtEl.textContent = `Cập nhật gần nhất: ${new Date(res.updatedAt).toLocaleString('vi-VN')}`;

        liveGrid.innerHTML = res.items.length ? res.items.map(item => `
          <article class="anime-card" style="--card-accent:#06b6d4;">
            <div class="card-poster-wrap">
              <img class="card-poster-img" src="${item.poster}" alt="${item.title}" loading="lazy" />
              <div class="card-poster-overlay"></div>
              <div class="card-top-badges">
                <span class="badge ${item.status === 'RELEASING' ? 'badge-airing' : item.status === 'NOT_YET_RELEASED' ? 'badge-upcoming' : 'badge-completed'}">
                  ${item.status === 'RELEASING' ? 'Đang chiếu' : item.status === 'NOT_YET_RELEASED' ? 'Sắp chiếu' : 'Đã phát hành'}
                </span>
                <span class="score-pill">★ ${item.score}</span>
              </div>
            </div>
            <div class="card-body">
              <h3 class="card-title">${item.title}</h3>
              <div class="card-meta"><span>${item.season} ${item.year}</span> &bull; <span>${item.studio}</span> &bull; <span>${item.episodes}</span></div>
              <div class="card-genres">${item.genres.map(g => `<span class="genre-chip">${g}</span>`).join('')}</div>
              <p class="card-desc">${item.desc}</p>
              <div class="card-footer">
                <a href="${item.url}" target="_blank" rel="noopener" class="btn btn-glass btn-sm">Xem trên AniList &#8599;</a>
              </div>
            </div>
          </article>
        `).join('') : `<div class="filter-panel" style="grid-column:1/-1;">API trả về danh sách trống cho mùa này.</div>`;
      } catch (err) {
        statusBadgeEl.className = 'badge badge-offline';
        statusBadgeEl.textContent = 'Mất kết nối API – Chế độ dự phòng cục bộ';
        updatedAtEl.textContent = 'Hiển thị dữ liệu 2024–2026 lưu sẵn trong source code';
        const fallback = AV.ANIME_LIST.filter(a => a.era === 'latest');
        liveGrid.innerHTML = fallback.map(UI.renderAnimeCard).join('');
      }
    }

    seasonBtns.forEach(btn => {
      btn.addEventListener('click', () => loadSeason(btn.dataset.season, Number(btn.dataset.year), false));
    });
    document.getElementById('latest-refresh-btn').addEventListener('click', () => loadSeason(activeSeason, activeYear, true));

    // Khu vực biên tập cục bộ 2024–2026 đã kiểm chứng
    const curatedLatest = AV.ANIME_LIST.filter(a => a.era === 'latest');
    curatedGrid.innerHTML = curatedLatest.map(UI.renderAnimeCard).join('');
    API.hydrateMany(curatedLatest, 20, UI.patchHydratedCards);

    loadSeason('FALL', 2026, false);
  }

  // ==================== BOOTSTRAP ====================
  document.addEventListener('DOMContentLoaded', () => {
    UI.injectChrome();
    UI.setupInteractions();
    UI.startParticles();
    UI.observeReveals();

    const page = document.body.dataset.page;
    if (page === 'home') initHome();
    else if (page === 'explore') initExplore();
    else if (page === 'detail') initDetail();
    else if (page === 'characters') initCharacters();
    else if (page === 'ranking') initRanking();
    else if (page === 'genres') initGenres();
    else if (page === 'latest') initLatest();
  });
})(window.AnimeVerse);

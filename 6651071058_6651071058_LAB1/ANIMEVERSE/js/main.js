window.AnimeVerse = window.AnimeVerse || {};

(function (AV) {
  const NAV_LINKS = [
    { href: 'index.html', label: 'Trang chủ', page: 'home' },
    { href: 'explore.html', label: 'Khám phá Anime', page: 'explore' },
    { href: 'genres.html', label: 'Thể loại', page: 'genres' },
    { href: 'characters.html', label: 'Nhân vật', page: 'characters' },
    { href: 'ranking.html', label: 'Bảng xếp hạng', page: 'ranking' },
    { href: 'latest.html', label: 'Anime mới 2024–2026', page: 'latest' },
    { href: 'about.html', label: 'Giới thiệu', page: 'about' }
  ];

  function injectChrome() {
    const activePage = document.body.dataset.page || 'home';

    // Loading Screen
    if (!document.getElementById('av-loader')) {
      const loader = document.createElement('div');
      loader.id = 'av-loader';
      loader.innerHTML = `<div class="loader-orb"></div><div class="loader-brand">ANIMEVERSE</div>`;
      document.body.prepend(loader);
    }

    // Particle Canvas
    if (!document.getElementById('av-particles')) {
      const canvas = document.createElement('canvas');
      canvas.id = 'av-particles';
      document.body.prepend(canvas);
    }

    // Navbar
    const navMount = document.getElementById('av-navbar-mount');
    if (navMount) {
      navMount.innerHTML = `
        <nav class="av-navbar" id="av-navbar">
          <div class="nav-inner">
            <a href="index.html" class="nav-logo">
              <span class="logo-mark">&#10022;</span>
              <span class="logo-text">ANIME<span>VERSE</span></span>
            </a>
            <ul class="nav-links">
              ${NAV_LINKS.map(l => `<li><a href="${l.href}" class="${l.page === activePage ? 'active' : ''}">${l.label}</a></li>`).join('')}
            </ul>
            <div class="nav-actions">
              <div class="nav-search-box">
                <input type="text" id="av-global-search" placeholder="Tìm anime (JP/EN/VI)..." autocomplete="off" />
                <span class="search-ico">&#128269;</span>
                <div class="nav-search-results" id="av-global-results"></div>
              </div>
              <button class="nav-toggle" id="av-nav-toggle" aria-label="Menu">&#9776;</button>
            </div>
          </div>
        </nav>
        <div class="mobile-drawer" id="av-mobile-drawer">
          ${NAV_LINKS.map(l => `<a href="${l.href}" class="${l.page === activePage ? 'active' : ''}">${l.label}</a>`).join('')}
        </div>
      `;
    }

    // Footer
    const footerMount = document.getElementById('av-footer-mount');
    if (footerMount) {
      footerMount.innerHTML = `
        <footer class="av-footer">
          <div class="container">
            <div class="footer-grid">
              <div>
                <a href="index.html" class="nav-logo" style="margin-bottom:12px;">
                  <span class="logo-mark">&#10022;</span>
                  <span class="logo-text">ANIME<span>VERSE</span></span>
                </a>
                <p style="color:var(--text-muted);font-size:0.86rem;">
                  Nền tảng khám phá thế giới anime & nhân vật chuyên sâu. Kết hợp thư viện biên tập đa thời kỳ cùng dữ liệu thời gian thực từ AniList GraphQL & Jikan API.
                </p>
              </div>
              <div>
                <h4>Khám phá nhanh</h4>
                <ul class="footer-links">
                  <li><a href="explore.html">Thư viện Anime</a></li>
                  <li><a href="characters.html">Thế giới Nhân vật</a></li>
                  <li><a href="genres.html">Thể loại Anime</a></li>
                  <li><a href="ranking.html">Bảng xếp hạng</a></li>
                </ul>
              </div>
              <div>
                <h4>Mốc thời gian</h4>
                <ul class="footer-links">
                  <li><a href="latest.html">Anime mới 2024–2026</a></li>
                  <li><a href="explore.html?era=modern">Anime hiện đại 2020–2023</a></li>
                  <li><a href="explore.html?era=classic">Anime kinh điển</a></li>
                  <li><a href="about.html">Minh bạch nguồn dữ liệu</a></li>
                </ul>
              </div>
              <div>
                <h4>Chế độ chạy trực tiếp</h4>
                <p style="color:var(--text-muted);font-size:0.84rem;">
                  Hoạt động trực tiếp qua <code>index.html</code> (không cần localhost). Dữ liệu API được lưu cache thông minh tại trình duyệt.
                </p>
              </div>
            </div>
            <div class="footer-bottom">
              <span>&copy; 2026 ANIMEVERSE • Khám phá thế giới Anime</span>
              <span>Nguồn ảnh & điểm số đồng bộ: AniList GraphQL &bull; MyAnimeList (Jikan)</span>
            </div>
          </div>
        </footer>
        <button id="av-back-top" aria-label="Lên đầu trang">&#8593;</button>
      `;
    }
  }

  function setupInteractions() {
    const navbar = document.getElementById('av-navbar');
    const backTop = document.getElementById('av-back-top');
    const toggleBtn = document.getElementById('av-nav-toggle');
    const drawer = document.getElementById('av-mobile-drawer');

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (navbar) navbar.classList.toggle('scrolled', y > 30);
      if (backTop) backTop.classList.toggle('visible', y > 380);
    }, { passive: true });

    if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => drawer.classList.toggle('open'));
    }

    // Global Live Search
    const searchInput = document.getElementById('av-global-search');
    const searchBox = document.getElementById('av-global-results');
    if (searchInput && searchBox) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) { searchBox.classList.remove('open'); return; }
        const matches = AV.ANIME_LIST.filter(item =>
          [item.title, item.titleJp, item.titleEn, item.titleVi].some(t => (t || '').toLowerCase().includes(q))
        ).slice(0, 7);

        if (!matches.length) {
          searchBox.innerHTML = `<div style="padding:14px;color:var(--text-muted);font-size:0.85rem;">Không tìm thấy anime khớp từ khóa "${q}".</div>`;
        } else {
          searchBox.innerHTML = matches.map(m => `
            <a href="anime-detail.html?id=${m.id}" class="search-suggest-item">
              <img class="search-suggest-thumb" src="${m.poster || ''}" alt="${m.title}" />
              <div class="search-suggest-meta">
                <h5>${m.title}</h5>
                <p>${m.titleVi || m.titleJp} &bull; ${m.year} &bull; ★ ${m.liveScore || m.rating}</p>
              </div>
            </a>
          `).join('');
        }
        searchBox.classList.add('open');
      });

      document.addEventListener('click', e => {
        if (!e.target.closest('.nav-search-box')) searchBox.classList.remove('open');
      });
    }

    // Loading Screen fade out
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('av-loader');
        if (loader) loader.classList.add('hidden');
      }, 280);
    });
    setTimeout(() => {
      const loader = document.getElementById('av-loader');
      if (loader) loader.classList.add('hidden');
    }, 1400);
  }

  function startParticles() {
    const canvas = document.getElementById('av-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const count = Math.min(48, Math.floor(w / 32));
    const dots = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.7,
      c: Math.random() > 0.5 ? 'rgba(6,182,212,0.55)' : 'rgba(168,85,247,0.55)'
    }));

    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    function tick() {
      ctx.clearRect(0, 0, w, h);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.c;
        ctx.fill();
      });
      requestAnimationFrame(tick);
    }
    tick();
  }

  function observeReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
  }

  function statusBadge(status) {
    if (status === 'airing') return `<span class="badge badge-airing">Đang chiếu</span>`;
    if (status === 'upcoming') return `<span class="badge badge-upcoming">Sắp chiếu</span>`;
    return `<span class="badge badge-completed">Hoàn thành</span>`;
  }

  function renderAnimeCard(anime) {
    const score = anime.liveScore || anime.rating;
    const scoreTag = anime.liveScore ? `★ ${score}` : `~${score}`;
    return `
      <article class="anime-card" data-anime-id="${anime.id}" style="--card-accent:${anime.theme.primary};">
        <div class="card-poster-wrap">
          <div class="poster-fallback ${anime.poster ? 'loaded' : ''}">
            <span class="jp-bg">${anime.titleJp || ''}</span>
            <h4>${anime.title}</h4>
            <span>${anime.year} &bull; ${anime.studio}</span>
          </div>
          ${anime.poster ? `<img class="card-poster-img" src="${anime.poster}" alt="${anime.title}" loading="lazy" />` : `<img class="card-poster-img" style="opacity:0;" alt="${anime.title}" />`}
          <div class="card-poster-overlay"></div>
          <div class="card-top-badges">
            ${statusBadge(anime.status)}
            <span class="score-pill" title="${anime.liveScore ? 'Điểm trực tuyến AniList' : 'Điểm tham chiếu cục bộ'}">${scoreTag}</span>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title"><a href="anime-detail.html?id=${anime.id}">${anime.title}</a></h3>
          <div class="card-meta">
            <span>${anime.year}</span> &bull; <span>${anime.studio}</span>
          </div>
          <div class="card-genres">
            ${anime.genres.slice(0, 3).map(g => `<span class="genre-chip">${g}</span>`).join('')}
          </div>
          <p class="card-desc">${anime.shortDesc}</p>
          <div class="card-footer">
            <a href="anime-detail.html?id=${anime.id}" class="btn btn-glass btn-sm">Xem chi tiết & Nhân vật</a>
          </div>
        </div>
      </article>
    `;
  }

  function patchHydratedCards(batch) {
    batch.forEach(anime => {
      document.querySelectorAll(`.anime-card[data-anime-id="${anime.id}"]`).forEach(card => {
        const img = card.querySelector('.card-poster-img');
        const fb = card.querySelector('.poster-fallback');
        const pill = card.querySelector('.score-pill');
        if (anime.poster && img) {
          img.src = anime.poster;
          img.style.opacity = '1';
          if (fb) fb.classList.add('loaded');
        }
        if (anime.liveScore && pill) {
          pill.textContent = `★ ${anime.liveScore}`;
          pill.title = 'Điểm cộng đồng trực tuyến từ AniList';
        }
      });
    });
  }

  AV.UI = { injectChrome, setupInteractions, startParticles, observeReveals, renderAnimeCard, patchHydratedCards, statusBadge };
})(window.AnimeVerse);

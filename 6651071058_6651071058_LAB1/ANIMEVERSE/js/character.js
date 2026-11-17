window.AnimeVerse = window.AnimeVerse || {};

(function (AV) {
  function probeLocalPng(slug) {
    return new Promise(resolve => {
      if (!slug) return resolve(null);
      const img = new Image();
      const path = `assets/characters/${slug}.png`;
      img.onload = () => resolve(path);
      img.onerror = () => resolve(null);
      img.src = path;
    });
  }

  async function mount(container, anime, options = {}) {
    if (!container || !anime) return;
    const chars = anime.characters || [];
    if (!chars.length) {
      container.innerHTML = `<div class="filter-panel">Đang đồng bộ danh sách nhân vật cho ${anime.title}...</div>`;
      return;
    }

    let currentIdx = 0;
    if (options.initialCharSlug) {
      const found = chars.findIndex(c => c.slug === options.initialCharSlug || c.name === options.initialCharSlug);
      if (found >= 0) currentIdx = found;
    }

    container.innerHTML = `
      <div class="char-showcase-shell" id="av-char-shell">
        <div class="char-stage-bg" style="background-image:url('${anime.banner || anime.poster || ''}')"></div>
        <div class="char-stage-aura"></div>
        <div class="char-stage-particles"></div>

        <div class="char-stage-grid">
          <div class="char-info-panel" id="av-char-info">
            <span class="char-role-tag" id="av-char-role"></span>
            <h3 class="char-name-display" id="av-char-name"></h3>
            <p class="char-jp-alias" id="av-char-jp"></p>
            <blockquote class="char-quote" id="av-char-quote"></blockquote>
            <div class="char-dossier-grid">
              <div class="char-stat-box"><small>Tính cách</small><span id="av-char-pers"></span></div>
              <div class="char-stat-box"><small>Năng lực / Sức mạnh</small><span id="av-char-power"></span></div>
              <div class="char-stat-box"><small>Vũ khí / Đặc trưng</small><span id="av-char-weapon"></span></div>
              <div class="char-stat-box"><small>Tác phẩm & Giới tính</small><span id="av-char-meta"></span></div>
            </div>
          </div>

          <div class="char-visual-stage">
            <div class="char-halo-ring"></div>
            <div class="char-floor-glow"></div>
            <span class="char-art-source-pill" id="av-char-source"></span>
            <img class="char-figure-img" id="av-char-img" alt="Character Figure" />
            <div class="char-mobile-nav">
              <button class="hero-arrow" id="av-char-prev" aria-label="Nhân vật trước">&#10094;</button>
              <button class="hero-arrow" id="av-char-next" aria-label="Nhân vật sau">&#10095;</button>
            </div>
          </div>
        </div>

        <div class="char-roster-bar">
          <div class="char-roster-head">
            <span>Dàn nhân vật <strong>${anime.title}</strong> (${chars.length} nhân vật • Rê chuột hoặc chạm để chuyển đổi)</span>
            <span id="av-char-counter">1 / ${chars.length}</span>
          </div>
          <div class="char-roster-strip" id="av-char-strip">
            ${chars.map((ch, idx) => `
              <button class="char-thumb-btn ${idx === currentIdx ? 'active' : ''}" data-idx="${idx}" type="button">
                <img src="${ch.image || anime.poster || ''}" alt="${ch.name}" loading="lazy" />
                <span>${ch.name}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    const shell = container.querySelector('#av-char-shell');
    const infoPanel = container.querySelector('#av-char-info');
    const imgEl = container.querySelector('#av-char-img');
    const strip = container.querySelector('#av-char-strip');
    const counterEl = container.querySelector('#av-char-counter');
    const sourceEl = container.querySelector('#av-char-source');

    let switchToken = 0;

    async function selectCharacter(idx, animate = true) {
      if (idx < 0) idx = chars.length - 1;
      if (idx >= chars.length) idx = 0;
      currentIdx = idx;
      const ch = chars[idx];
      const token = ++switchToken;

      shell.style.setProperty('--char-accent', ch.color || anime.theme.primary || '#a855f7');
      shell.style.setProperty('--char-secondary', anime.theme.secondary || '#06b6d4');

      strip.querySelectorAll('.char-thumb-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
      });
      const activeBtn = strip.querySelector('.char-thumb-btn.active');
      if (activeBtn && animate) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      }
      counterEl.textContent = `${idx + 1} / ${chars.length}`;

      if (animate) {
        infoPanel.classList.add('is-switching');
        imgEl.classList.add('is-switching');
        await new Promise(r => setTimeout(r, 170));
        if (token !== switchToken) return;
      }

      container.querySelector('#av-char-role').textContent = ch.role || 'Nhân vật';
      container.querySelector('#av-char-name').textContent = ch.name;
      container.querySelector('#av-char-jp').textContent = [ch.jp, ch.alias].filter(Boolean).join(' • ');
      container.querySelector('#av-char-quote').textContent = `“${ch.quote || 'Khám phá hồ sơ nhân vật trong ANIMEVERSE.'}”`;
      container.querySelector('#av-char-pers').textContent = ch.personality || 'Đang cập nhật';
      container.querySelector('#av-char-power').textContent = ch.power || 'Đang cập nhật';
      container.querySelector('#av-char-weapon').textContent = ch.weapon || 'Không có / Đặc biệt';
      container.querySelector('#av-char-meta').textContent = `${anime.title} • ${ch.gender || 'Chưa rõ'}`;

      // Kiểm tra ưu tiên PNG cục bộ không nền trước, nếu không có thì dùng Official Art từ AniList minh bạch
      const localPng = await probeLocalPng(ch.slug);
      if (token !== switchToken) return;

      if (localPng) {
        imgEl.src = localPng;
        imgEl.classList.remove('is-art-frame');
        sourceEl.textContent = 'Fullbody PNG Cục Bộ (Không nền)';
      } else {
        imgEl.src = ch.image || anime.poster || '';
        imgEl.classList.add('is-art-frame');
        sourceEl.textContent = ch.image ? (ch.imageSource || 'Official Character Art • AniList') : 'Poster minh họa tạm thời';
      }

      imgEl.alt = ch.name;
      infoPanel.classList.remove('is-switching');
      imgEl.classList.remove('is-switching');
    }

    // Hover + Click + Touch trên danh sách nhân vật
    strip.querySelectorAll('.char-thumb-btn').forEach(btn => {
      const idx = Number(btn.dataset.idx);
      btn.addEventListener('mouseenter', () => {
        if (idx !== currentIdx) selectCharacter(idx, true);
      });
      btn.addEventListener('click', () => selectCharacter(idx, true));
    });

    container.querySelector('#av-char-prev').addEventListener('click', () => selectCharacter(currentIdx - 1, true));
    container.querySelector('#av-char-next').addEventListener('click', () => selectCharacter(currentIdx + 1, true));

    // Vuốt trên điện thoại
    let touchStartX = 0;
    container.querySelector('.char-visual-stage').addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    container.querySelector('.char-visual-stage').addEventListener('touchend', e => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 45) {
        selectCharacter(diff < 0 ? currentIdx + 1 : currentIdx - 1, true);
      }
    }, { passive: true });

    selectCharacter(currentIdx, false);
  }

  AV.CharacterShowcase = { mount };
})(window.AnimeVerse);

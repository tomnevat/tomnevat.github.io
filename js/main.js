(function () {
  const data = window.SITE_DATA;

  function $(selector) {
    return document.querySelector(selector);
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function imageTag(src, alt) {
    return `<img src="${src}" alt="${escapeHtml(alt)}" loading="lazy">`;
  }

  function socialIcon(label) {
    const key = (label || '').toLowerCase();

    if (key.includes('instagram')) {
      return `
        <span class="social-icon brand-instagram" aria-hidden="true">
          <svg viewBox="0 0 448 512" role="img">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8s-26.8-12-26.8-26.8 12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S3.2 127.5 1.5 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2s34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </span>`;
    }

    if (key.includes('pinterest')) {
      return `
        <span class="social-icon brand-pinterest" aria-hidden="true">
          <svg viewBox="0 0 496 512" role="img">
            <path d="M496 256c0 137-111 248-248 248-25.6 0-50.3-3.9-73.6-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107.1 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/>
          </svg>
        </span>`;
    }

    if (key.includes('spoonflower')) {
      return `
        <span class="social-icon brand-spoonflower" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="img">
            <path d="M32 8c4.2 5.3 6.5 9.9 6.5 13.9 0 4.2-2.4 7.2-6.5 9.4-4.1-2.2-6.5-5.2-6.5-9.4C25.5 17.9 27.8 13.3 32 8z"/>
            <path d="M56 32c-5.3 4.2-9.9 6.5-13.9 6.5-4.2 0-7.2-2.4-9.4-6.5 2.2-4.1 5.2-6.5 9.4-6.5 4 0 8.6 2.3 13.9 6.5z"/>
            <path d="M32 56c-4.2-5.3-6.5-9.9-6.5-13.9 0-4.2 2.4-7.2 6.5-9.4 4.1 2.2 6.5 5.2 6.5 9.4 0 4-2.3 8.6-6.5 13.9z"/>
            <path d="M8 32c5.3-4.2 9.9-6.5 13.9-6.5 4.2 0 7.2 2.4 9.4 6.5-2.2 4.1-5.2 6.5-9.4 6.5-4 0-8.6-2.3-13.9-6.5z"/>
            <circle cx="32" cy="32" r="5.5"/>
          </svg>
        </span>`;
    }

    if (key.includes('patterned')) {
      return `
        <span class="social-icon brand-patterned" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="img">
            <rect x="8" y="8" width="48" height="48" rx="7"/>
            <path class="cutout" d="M20 20h8c7 0 11 3.9 11 9.8S35 40 28 40h-3v8h-5V20zm5 5v10h3c3.5 0 5.5-1.9 5.5-5.1S31.5 25 28 25h-3z"/>
            <path class="cutout" d="M44 20h4v28h-4z" opacity=".86"/>
          </svg>
        </span>`;
    }

    if (key.includes('good mood')) {
      return `
        <span class="social-icon brand-goodmood" aria-hidden="true">
          <svg viewBox="0 0 64 64" role="img">
            <rect x="8" y="12" width="48" height="40" rx="8"/>
            <circle class="cutout" cx="24" cy="29" r="3.2"/>
            <circle class="cutout" cx="40" cy="29" r="3.2"/>
            <path class="cutout-stroke" d="M21 37c3 5 6.6 7.5 11 7.5S40 42 43 37"/>
          </svg>
        </span>`;
    }

    return `<span class="social-icon text-icon" aria-hidden="true">${escapeHtml((label || '?').slice(0, 2).toUpperCase())}</span>`;
  }

  function renderSocialLinks(targetSelector) {
    const target = $(targetSelector);
    if (!target || !data.brand.socials) return;
    target.innerHTML = data.brand.socials.map(link => `
      <a class="social-link" href="${link.url}" target="_blank" rel="noopener" aria-label="${escapeHtml(link.label)}" title="${escapeHtml(link.label)}">
        ${socialIcon(link.label)}
        <span class="sr-only">${escapeHtml(link.label)}</span>
      </a>
    `).join('');
  }

  function renderContactLinks(targetSelector) {
    const target = $(targetSelector);
    if (!target || !data.brand.socials) return;
    target.innerHTML = data.brand.socials.map(link => `
      <a class="contact-social-link" href="${link.url}" target="_blank" rel="noopener">
        <span class="social-link" aria-hidden="true">${socialIcon(link.label)}</span>
        <span class="contact-social-text">
          <span class="contact-social-title">${escapeHtml(link.label)}</span>
          <span class="contact-social-desc">${escapeHtml(link.desc || '')}</span>
        </span>
      </a>
    `).join('');
  }

  function renderGallery(targetSelector, items) {
    const target = $(targetSelector);
    if (!target) return;
    if (!items || items.length === 0) {
      target.innerHTML = `<p class="empty-note">Gallery images will appear here.</p>`;
      return;
    }
    target.innerHTML = items.map(item => {
      const size = item.size || 'normal';
      if (item.placeholder) {
        return `
          <figure class="mosaic-item ${size} placeholder-item">
            <div class="placeholder-tile">${escapeHtml(item.caption || 'Empty slot')}</div>
          </figure>
        `;
      }
      return `
        <figure class="mosaic-item ${size}">
          ${imageTag(item.src, item.alt)}
        </figure>
      `;
    }).join('');
  }

  function renderCards(targetSelector, items, pageName) {
    const target = $(targetSelector);
    if (!target) return;
    target.innerHTML = items.map(item => {
      const href = pageName === 'collection'
        ? `collection.html?collection=${encodeURIComponent(item.slug)}`
        : `illustration-category.html?category=${encodeURIComponent(item.slug)}`;

      const imageHtml = item.placeholder || !item.cover
        ? `<div class="placeholder-tile">Coming soon</div>`
        : imageTag(item.cover, item.title);

      const content = `
        <div class="card-image">${imageHtml}</div>
        <div class="card-content">
          <h3>${escapeHtml(item.title)}</h3>
          <div class="card-label">${escapeHtml(item.description || '')}</div>
        </div>
      `;

      return item.placeholder
        ? `<a class="card placeholder-card" href="${href}">${content}</a>`
        : `<a class="card" href="${href}">${content}</a>`;
    }).join('');
  }

  function setText(selector, text) {
    const el = $(selector);
    if (el) el.textContent = text || '';
  }

  function setHtml(selector, html) {
    const el = $(selector);
    if (el) el.innerHTML = html || '';
  }

  function renderShared() {
    document.querySelectorAll('[data-brand-name]').forEach(el => el.textContent = data.brand.name);
    document.querySelectorAll('[data-brand-tagline]').forEach(el => el.textContent = data.brand.tagline);
    document.querySelectorAll('[data-brand-logo]').forEach(el => {
      el.src = data.brand.logo;
      el.alt = `${data.brand.name} logo`;
    });
    renderSocialLinks('#footer-socials');
    const footerEmailEl = $('#footer-email');
    if (footerEmailEl) {
      footerEmailEl.innerHTML = data.brand.email
        ? `<a href="mailto:${data.brand.email}">${data.brand.email}</a>`
        : '';
    }
  }

  function renderHome() {
    setText('#home-intro', data.brand.intro);
    renderGallery('#home-gallery', data.home.gallery);
    renderSocialLinks('#home-socials');
  }

  function renderSurface() {
    setText('#surface-intro', data.surface.intro);
    renderCards('#collection-grid', data.surface.collections, 'collection');
  }

  function renderCollection() {
    const slug = getParam('collection') || data.surface.collections[0]?.slug;
    const collection = data.surface.collections.find(item => item.slug === slug);
    if (!collection) {
      setHtml('#collection-content', `<p class="empty-note">Collection not found. Check the collection slug in the URL and in js/data.js.</p>`);
      return;
    }
    document.title = `${collection.title} | ${data.brand.name}`;
    setText('#collection-title', collection.title);
    setText('#collection-description', collection.description);
    renderGallery('#collection-gallery', collection.gallery);
  }

  function renderIllustrations() {
    setText('#illustration-intro', data.illustration.intro);
    renderCards('#illustration-grid', data.illustration.categories, 'illustration');
  }

  function renderIllustrationCategory() {
    const slug = getParam('category') || data.illustration.categories[0]?.slug;
    const category = data.illustration.categories.find(item => item.slug === slug);
    if (!category) {
      setHtml('#illustration-category-content', `<p class="empty-note">Category not found. Check the category slug in the URL and in js/data.js.</p>`);
      return;
    }
    document.title = `${category.title} | ${data.brand.name}`;
    setText('#category-title', category.title);
    setText('#category-description', category.description);
    renderGallery('#category-gallery', category.gallery);
  }

  function renderAbout() {
    setText('#about-title', data.about.title);
    setHtml('#about-text', data.about.text.map(p => `<p>${escapeHtml(p)}</p>`).join(''));
  }

  function renderContact() {
    setText('#contact-title', data.contact.title);
    setText('#contact-intro', data.contact.intro);
    setText('#contact-note', data.contact.note);
    setHtml('#contact-email', `<a href="mailto:${data.brand.email}">${data.brand.email}</a>`);
    renderContactLinks('#contact-socials');
  }

  function markCurrentNav() {
    const current = document.body.dataset.page;
    document.querySelectorAll('.main-nav a[data-nav]').forEach(link => {
      if (link.dataset.nav === current) link.setAttribute('aria-current', 'page');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderShared();
    markCurrentNav();
    const page = document.body.dataset.page;
    if (page === 'home') renderHome();
    if (page === 'surface') renderSurface();
    if (page === 'collection') renderCollection();
    if (page === 'illustrations') renderIllustrations();
    if (page === 'illustration-category') renderIllustrationCategory();
    if (page === 'about') renderAbout();
    if (page === 'contact') renderContact();
  });
})();

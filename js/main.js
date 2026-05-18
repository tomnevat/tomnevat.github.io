
(function () {
  const data = window.SITE_DATA;

  function $(selector) {
    return document.querySelector(selector);
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function imageTag(src, alt) {
    return `<img src="${src}" alt="${alt || ''}" loading="lazy">`;
  }

  function socialIcon(label) {
    const key = (label || '').toLowerCase();

    if (key.includes('instagram')) {
      return `
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="4"></rect>
            <circle cx="12" cy="12" r="3.6"></circle>
            <circle class="filled" cx="16.8" cy="7.2" r="1.1"></circle>
          </svg>
        </span>`;
    }

    if (key.includes('pinterest')) {
      return `
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="8"></circle>
            <path d="M10.5 19c.6-2.4 1.1-4.8 1.7-7.2"></path>
            <path d="M12.3 11.8c.5 1.1 1.4 1.7 2.4 1.3 1.4-.5 2-2.4 1.4-4-.7-1.9-2.8-3-5-2.2-2.5.8-3.5 3.4-2.6 5.5.3.7.8 1.2 1.4 1.5"></path>
          </svg>
        </span>`;
    }

    if (key.includes('spoonflower')) {
      return `
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="2"></circle>
            <path d="M12 4.5c2.3 2.1 2.3 4.2 0 6.3"></path>
            <path d="M19.5 12c-2.1 2.3-4.2 2.3-6.3 0"></path>
            <path d="M12 19.5c-2.3-2.1-2.3-4.2 0-6.3"></path>
            <path d="M4.5 12c2.1-2.3 4.2-2.3 6.3 0"></path>
          </svg>
        </span>`;
    }

    if (key.includes('patterned')) {
      return `
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <path d="M8 4v16"></path>
            <path d="M16 4v16"></path>
            <path d="M4 8h16"></path>
            <path d="M4 16h16"></path>
          </svg>
        </span>`;
    }

    if (key.includes('good mood')) {
      return `
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="5" width="16" height="14" rx="2"></rect>
            <path d="M8 11c1.2 2 2.5 3 4 3s2.8-1 4-3"></path>
            <path d="M9 9h.01"></path>
            <path d="M15 9h.01"></path>
          </svg>
        </span>`;
    }

    return `<span class="social-icon text-icon" aria-hidden="true">${(label || '?').slice(0, 2).toUpperCase()}</span>`;
  }

  function renderSocialLinks(targetSelector) {
    const target = $(targetSelector);
    if (!target || !data.brand.socials) return;
    target.innerHTML = data.brand.socials.map(link => `
      <a class="social-link" href="${link.url}" target="_blank" rel="noopener" aria-label="${link.label}" title="${link.label}">
        ${socialIcon(link.label)}
        <span class="sr-only">${link.label}</span>
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
      const caption = item.caption ? `<figcaption>${item.caption}</figcaption>` : '';
      return `
        <figure class="mosaic-item ${size}">
          ${imageTag(item.src, item.alt)}
          ${caption}
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
      return `
        <a class="card" href="${href}">
          <div class="card-image">${imageTag(item.cover, item.title)}</div>
          <div class="card-content">
            <h3>${item.title}</h3>
            <div class="card-label">${item.description || ''}</div>
          </div>
        </a>
      `;
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
    setHtml('#about-text', data.about.text.map(p => `<p>${p}</p>`).join(''));
  }

  function renderContact() {
    setText('#contact-title', data.contact.title);
    setText('#contact-intro', data.contact.intro);
    setText('#contact-note', data.contact.note);
    setHtml('#contact-email', `<a href="mailto:${data.brand.email}">${data.brand.email}</a>`);
    renderSocialLinks('#contact-socials');
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

(function () {
  const data = window.LANDING_CONTENT;

  const byId = (id) => document.getElementById(id);

  function icon(type, initials) {
    if (type === "instagram") {
      return `
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"></circle></svg>
        </span>`;
    }
    if (type === "pinterest") {
      return `
        <span class="social-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2"></circle><text x="12" y="16.2" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12.5" font-weight="700" class="icon-fill">P</text></svg>
        </span>`;
    }
    return `<span class="social-icon text-icon" aria-hidden="true">${initials || "•"}</span>`;
  }

  byId("brand-logo").src = data.logo;
  byId("brand-tagline").textContent = data.tagline;
  byId("brand-intro").textContent = data.brandIntro;
  byId("catalogue-message").textContent = data.catalogueMessage;
  byId("about-text").textContent = data.about;
  byId("email-link").textContent = data.email;
  byId("email-link").href = `mailto:${data.email}`;
  if (byId("catalog-button")) byId("catalog-button").textContent = data.catalogButtonLabel || "Access the Full Catalog";
  if (byId("password-note")) byId("password-note").textContent = data.passwordNote || "For a password, please contact";
  byId("year").textContent = new Date().getFullYear();

  const gallery = byId("gallery");
  data.gallery.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt || "Tom Nevat portfolio image";
    img.loading = "lazy";
    figure.appendChild(img);
    gallery.appendChild(figure);
  });

  const links = byId("social-links");
  data.links.forEach((link) => {
    const a = document.createElement("a");
    a.className = "social-link";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `${icon(link.type, link.initials)}<span>${link.label}</span>`;
    links.appendChild(a);
  });
})();

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
          <svg viewBox="0 0 24 24"><path d="M12 21c.7-2.2 1.1-3.7 1.4-5.2"></path><path d="M10.5 15.5c-.7 1.2-1.6 2.1-2.8 2.4"></path><path d="M12.2 3.5c-4.4 0-7.2 2.8-7.2 6.4 0 2.2 1.1 3.9 2.9 4.4.3.1.5 0 .6-.4l.3-1.2c.1-.3.1-.5-.2-.8-.5-.6-.8-1.2-.8-2.1 0-2.4 1.8-4.4 4.2-4.4 2.3 0 3.8 1.4 3.8 3.5 0 2.6-1.2 4.7-2.9 4.7-.9 0-1.6-.8-1.4-1.8.3-1.2.8-2.4.8-3.2 0-.7-.4-1.3-1.2-1.3-1 0-1.8 1-1.8 2.4 0 .9.3 1.5.3 1.5l-1.2 5.1"></path></svg>
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

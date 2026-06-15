(function () {
  const data = window.LANDING_CONTENT;
  const logo = document.getElementById("access-logo");
  const email = document.getElementById("access-email");
  const form = document.getElementById("password-form");
  const input = document.getElementById("catalog-password");
  const error = document.getElementById("password-error");

  logo.src = data.logo;
  email.textContent = data.email;
  email.href = `mailto:${data.email}`;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const typedPassword = input.value.trim();

    if (typedPassword === data.cataloguePassword) {
      sessionStorage.setItem("tomNevatCatalogAccess", "true");
      window.location.href = "catalog.html";
      return;
    }

    error.textContent = "Incorrect password. Please try again.";
    input.focus();
  });
})();

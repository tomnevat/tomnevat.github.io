(function () {
  if (sessionStorage.getItem("tomNevatCatalogAccess") !== "true") {
    window.location.replace("catalog-access.html");
    return;
  }

  const data = window.LANDING_CONTENT;
  const logo = document.getElementById("catalog-logo");
  const pdfLink = document.getElementById("pdf-link");
  const pdfViewer = document.getElementById("pdf-viewer");

  logo.src = data.logo;
  pdfLink.href = data.cataloguePdf;
  pdfViewer.data = data.cataloguePdf;
})();

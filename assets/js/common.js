document.addEventListener("DOMContentLoaded", function () {
  function closestPublicationAction(link) {
    return link.parentElement && link.parentElement.parentElement;
  }

  function closeOpenSiblings(container, selectors) {
    selectors.forEach(function (selector) {
      container.querySelectorAll(selector).forEach(function (element) {
        element.classList.toggle("open");
      });
    });
  }

  document.querySelectorAll("a.abstract").forEach(function (link) {
    link.addEventListener("click", function () {
      var container = closestPublicationAction(link);
      if (!container) return;
      closeOpenSiblings(container, [".abstract.hidden", ".award.hidden.open", ".bibtex.hidden.open"]);
    });
  });

  document.querySelectorAll("a.award").forEach(function (link) {
    link.addEventListener("click", function () {
      var container = closestPublicationAction(link);
      if (!container) return;
      closeOpenSiblings(container, [".abstract.hidden.open", ".award.hidden", ".bibtex.hidden.open"]);
    });
  });

  document.querySelectorAll("a.bibtex").forEach(function (link) {
    link.addEventListener("click", function () {
      var container = closestPublicationAction(link);
      if (!container) return;
      closeOpenSiblings(container, [".abstract.hidden.open", ".award.hidden.open", ".bibtex.hidden"]);
    });
  });

  document.querySelectorAll("a").forEach(function (link) {
    link.classList.remove("waves-effect", "waves-light");
  });

  var tocSidebar = document.querySelector("#toc-sidebar");
  if (tocSidebar && typeof tocbot !== "undefined") {
    document.querySelectorAll(".post-title, .publications h2").forEach(function (heading) {
      heading.setAttribute("data-toc-skip", "");
    });

    var collapse = tocSidebar.dataset.tocCollapse;
    var collapseDepth = tocSidebar.dataset.tocCollapseDepth;
    var navbar = document.querySelector(".navbar");
    var navbarHeight = navbar ? navbar.offsetHeight : 0;

    tocbot.init({
      tocSelector: "#toc-sidebar",
      contentSelector: ".post",
      headingSelector: "h1, h2, h3",
      ignoreSelector: "[data-toc-skip]",
      collapseDepth:
        collapseDepth === undefined || collapseDepth === "" ? (collapse === "auto" ? 6 : 99) : Number(collapseDepth),
      headingsOffset: navbarHeight,
      scrollSmoothOffset: -navbarHeight,
    });
  }

  var cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  var theme = determineComputedTheme();

  document.querySelectorAll(".jupyter-notebook-iframe-container iframe").forEach(function (iframe) {
    iframe.addEventListener("load", function () {
      var iframeDocument = iframe.contentDocument;
      if (!iframeDocument) return;

      iframeDocument.head.appendChild(cssLink.cloneNode(true));

      if (theme === "dark") {
        iframeDocument.body.setAttribute("data-jp-theme-light", "false");
        iframeDocument.body.setAttribute("data-jp-theme-name", "JupyterLab Dark");
      }
    });
  });
});

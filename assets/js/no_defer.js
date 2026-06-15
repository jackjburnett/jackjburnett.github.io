// add bootstrap classes to tables
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("table").forEach(function (table) {
    if (determineComputedTheme() === "dark") {
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
    }

    // only select tables that are not inside news, card, archive, or code blocks
    if (!table.closest('[class*="news"]') && !table.closest('[class*="card"]') && !table.closest('[class*="archive"]') && !table.closest("code")) {
      // make table use bootstrap-table
      table.setAttribute("data-toggle", "table");
      table.classList.add("table-hover");
    }
  });
});

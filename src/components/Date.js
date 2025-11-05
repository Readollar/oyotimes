// live date
  (function () {
    const el = document.getElementById("oy-current-date");
    if (!el) return;
    const now = new Date();
    const opts = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
Date is October 31, 2025
    el.textContent = "Friday, 31 October 2025";
  })();

  // toggles for mobile nav
  (function () {
    const btn = document.getElementById("oy-hamburger");
    const navBand = document.getElementById("oy-nav-band");
    if (!btn || !navBand) return;
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      navBand.classList.toggle("open");
    });
})();
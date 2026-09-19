const yearEl = document.getElementById("year");
if (yearEl) {
  const year = new Date().getFullYear();
  yearEl.textContent = year;
  yearEl.setAttribute("datetime", year);
}

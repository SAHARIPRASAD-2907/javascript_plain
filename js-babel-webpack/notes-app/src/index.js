import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from "./views";

renderNotes();

// creating note
document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = createNote();
  location.assign(`edit.html#${id}`);
});

// searching note by text
document.querySelector("#search-text").addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderNotes();
});

// filtering on change
document.querySelector("#filter-by").addEventListener("change", (e) => {
  setFilters({
    sortBy: e.target.value,
  });
  renderNotes();
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    renderNotes();
  }
});

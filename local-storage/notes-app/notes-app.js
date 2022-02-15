console.log("Notes app");
let notes = getSavedNotes();

const filters = {
  searchText: "",
};

// check for existing saved data

renderNotes(notes, filters);

// creating note
document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();
  notes.push({
    id: id,
    title: "",
    body: "",
  });
  saveNotes(notes);
  location.assign(`edit.html#${id}`);
});

// searching note by text
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// filtering on change
document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

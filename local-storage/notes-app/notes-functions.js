// Read existing functions from local storage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

// save the notes to localStorage
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// remove Note from list
const removeNote = function (id, notes) {
  console.log(id);
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate a DOM structure for a note
const generateNodeDom = function (note) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  const button = document.createElement("button");

  // Setup the remove note button
  noteEl.appendChild(button);
  button.textContent = "x";
  button.addEventListener("click", function () {
    console.log(note);
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  textEl.setAttribute("href", `./edit.html#${note.id}`);
  noteEl.appendChild(textEl);
  return noteEl;
};

// Render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = generateNodeDom(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};

//

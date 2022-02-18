"use strict";
// Read existing functions from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
  return notesJSON ? JSON.parse(notesJSON) : [];
  // if (notesJSON !== null) {
  //   return JSON.parse(notesJSON);
  // } else {
  //   return [];
  // }
};

// save the notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// remove Note from list
const removeNote = (id, notes) => {
  console.log(id);
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};

// Generate a DOM structure for a note
const generateNodeDom = (note) => {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("a");
  const button = document.createElement("button");

  // Setup the remove note button
  noteEl.appendChild(button);
  button.textContent = "x";
  button.addEventListener("click", () => {
    console.log(note);
    removeNote(note.id, notes);
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

// sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
  console.log(sortBy);
  if (sortBy == "byEdited") {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy == "byCreated") {
    return notes.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy == "alphabetical") {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

// Render application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    const noteEl = generateNodeDom(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};

// Generate the last edited message
const generatedLastEdited = (timestamp) =>
  `Last edited ${moment(timestamp).fromNow()}`;

"use strict";
// Read existing functions from local storage
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
  //return notesJSON ? JSON.parse(notesJSON) : [];
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
  const noteEl = document.createElement("a");
  const textEl = document.createElement("p");
  const statusEl = document.createElement("p");

  // Setup the note title text
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  textEl.classList.add("list-item__title");
  noteEl.appendChild(textEl);
  // setup the link
  noteEl.setAttribute("href", `./edit.html#${note.id}`);
  noteEl.classList.add("list-item");
  //  setup the status message
  statusEl.textContent = generatedLastEdited(note.updatedAt);
  textEl.classList.add("list-item__subtitle");
  noteEl.appendChild(statusEl);

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
  const notesEl = document.querySelector("#notes");
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  notesEl.innerHTML = "";

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNodeDom(note);
      notesEl.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    emptyMessage.classList.add("empty-message");
    notesEl.append(emptyMessage);
  }
};

// Generate the last edited message
const generatedLastEdited = (timestamp) =>
  `Last edited ${moment(timestamp).fromNow()}`;

import moment from "moment";
import { getFilters } from "./filters";
import { getNotes, sortNotes } from "./notes";

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

// Render application notes
const renderNotes = () => {
  const notesEl = document.querySelector("#notes");
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
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

// initialize edit page
const initializeEditPage = () => {
  const titleElement = document.querySelector("#note-title");
  const bodyElement = document.querySelector("#note-body");
  const dateElement = document.querySelector("#last-edited");
  const noteId = location.hash.substring(1);
  const existingNotes = getNotes();
  const note = existingNotes.find((note) => note.id === noteId);

  if (!note) {
    location.assign("./index.html");
  }

  titleElement.value = note.title;
  bodyElement.value = note.body;
  dateElement.textContent = generatedLastEdited(note.updatedAt);
};

// Generate the last edited message
const generatedLastEdited = (timestamp) =>
  `Last edited ${moment(timestamp).fromNow()}`;

export {
  initializeEditPage,
  generateNodeDom,
  renderNotes,
  generatedLastEdited,
};

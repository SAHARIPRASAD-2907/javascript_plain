import { v4 as uuidv4 } from "uuid";
import moment from "moment";

let notes = [];

const loadNotes = () => {
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

// Expose notes from modules
const getNotes = () => notes;

// creating a note
const createNote = () => {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes();
  return id;
};

// save the notes to localStorage
const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

// remove Note from list
const removeNote = (id) => {
  console.log(id);
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
    saveNotes();
  }
};

// sort your notes by one of three ways
const sortNotes = (sortBy) => {
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

const updateNotes = (id, update) => {
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return;
  }
  if (typeof update.title === "string") {
    note.title = update.title;
    note.updatedAt = moment().valueOf();
  }
  if (typeof update.body === "string") {
    note.body = update.body;
    note.updatedAt = moment().valueOf();
  }
  saveNotes();
  return note;
};

notes = loadNotes();

export { updateNotes, getNotes, saveNotes, removeNote, createNote, sortNotes };

const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);
let existingNotes = getSavedNotes();
let note = existingNotes.find(function (note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign("./index.html");
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generatedLastEdited(note.updatedAt);

titleElement.addEventListener("input", function (e) {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generatedLastEdited(note.updatedAt);
  saveNotes(existingNotes);
});

bodyElement.addEventListener("input", function (e) {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generatedLastEdited(note.updatedAt);
  saveNotes(existingNotes);
});

removeElement.addEventListener("click", function () {
  console.log(noteId);
  removeNote(noteId, existingNotes);
  saveNotes(existingNotes);
  window.location.assign("index.html");
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    existingNotes = JSON.parse(e.newValue);
  }
  let note = existingNotes.find(function (note) {
    return note.id === noteId;
  });

  if (note === undefined) {
    location.assign("./index.html");
  }

  titleElement.value = note.title;
  bodyElement.value = note.body;
  dateElement.textContent = generatedLastEdited(note.updatedAt);
});

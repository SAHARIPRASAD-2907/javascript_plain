import { updateNotes, removeNote } from "./notes";
import { generatedLastEdited, initializeEditPage } from "./views";

const titleElement = document.querySelector("#note-title");
const bodyElement = document.querySelector("#note-body");
const removeElement = document.querySelector("#remove-note");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleElement.addEventListener("input", (e) => {
  const note = updateNotes(noteId, {
    title: e.target.value,
  });
  dateElement.textContent = generatedLastEdited(note.updatedAt);
});

bodyElement.addEventListener("input", (e) => {
  const note = updateNotes(noteId, {
    body: e.target.value,
  });
  dateElement.textContent = generatedLastEdited(note.updatedAt);
});

removeElement.addEventListener("click", () => {
  removeNote(noteId);
  window.location.assign("index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    initializeEditPage();
  }
});

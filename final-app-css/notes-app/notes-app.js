console.log("Notes app");
let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited",
};

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

// check for existing saved data

renderNotes(notes, filters);

// creating note
document.querySelector("#create-note").addEventListener("click", (e) => {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  saveNotes(notes);
  location.assign(`edit.html#${id}`);
});

// searching note by text
document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// filtering on change
document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// const now = moment();
// //now.minute(1)
// now.add(1, "week").subtract(20, "days");
// console.log(now.format("MMM Do, YYYY"));
// console.log(now.fromNow());
// const nowTimestamp = now.valueOf();

// console.log(moment(nowTimestamp).toString());

// const birthday = moment();
// birthday.year(2000).month(6).date(29);
// console.log(birthday.format("MMM D, YYYY"));

// November

// const now = new Date()

// Unix Epoch --- January 1st 1970 00:00:00
// 1000
// const now = new Date();
// const timestamp = now.timestamp();

// const myDate = new Date(timestamp);
// console.log(myDate.getFullYear());

// console.log(now);

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Year: ${now.getMonth()}`);
// console.log(`Year: ${now.getDate()}`);

// const dateOne = new Date("March 1 2028 12:00:00");
// const dateTwo = new Date();
// const dateOneTimestamp = dateOne.getTime();
// const dateTwoTimestamp = dateTwo.getTime();

// if (dateOneTimestamp < dateTwoTimestamp) {
//   console.log(dateOne.toString());
// } else if (dateOneTimestamp > dateTwoTimestamp) {
//   console.log(dateTwo.toString());
// }

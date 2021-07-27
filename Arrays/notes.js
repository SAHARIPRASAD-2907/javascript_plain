const notes = ['Note 1','Note 2','Note 3']

// notes.push('My new note')
// const removedNote = notes.pop()
// const removeFirst = notes.shift()
// console.log("Removed note "+removedNote);
// console.log(notes.length);
// console.log(notes[notes.length-1])
// console.log(notes);
//console.log(removeFirst);
notes.splice(1,0,"my name is hari") //adding
console.log(notes.length);
console.log(notes);

// For loop
const players = ['Breanna', 'Kathi', 'Hunter', 'Andrew']
for (let count = 0; count < 3 && count < players.length; count++) {
 const num = count + 1
 const player = players[count]
 console.log(`${num}. ${player}`)
}

//using inddex OF
const places = ['Philadelphia', 'Texas', 'Vermont']
const index = places.indexOf('Vermont')
console.log(index) // Will print 2

// To do notes finding using findIndex
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
   }, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
   }, {
    title: 'Office modification',
    body: 'Get a new seat'
   }]
   const index = notes.findIndex(function (note, index) {
    return note.title === 'Habbits to work on'
   })
   console.log(index) // Will print 1


   //Notes finding
   const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
   }, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
   }, {
    title: 'Office modification',
    body: 'Get a new seat'
   }]
   const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
   }
   const note = findNote(notes, 'my next trip')
   console.log(note) // Will print the first object from our array above
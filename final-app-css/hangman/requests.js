const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=2", false);
//   request.send();
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     return data.puzzle;
//   } else if (e.target.readyState === 4) {
//     throw new Error("Things did not go well");
//   }
// };

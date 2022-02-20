const getDataCallback = (callback) => {
  setTimeout(() => {
    console.log("This time is up");
  }, 2000);
};

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Example data");
  }, 2000);
});

// Using myPromise from above
myPromise.then(
  (data) => {
    console.log(data); // Will print "Example data"
  },
  (err) => {
    console.log(err);
  }
);

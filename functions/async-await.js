const processData = async () => {
  return 101;
};
processData()
  .then((data) => {
    console.log(data); // Will print "101"
  })
  .catch((error) => {
    console.log(error);
  });

const { createFile } = require("./../helpers/multplication-table");

const value = 12;

createFile(value)
  .then(console.log("created file"))
  .catch((err) => console.log(err));

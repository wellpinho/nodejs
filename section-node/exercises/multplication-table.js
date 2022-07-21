const { createFile } = require("./../helpers/multplication-table");

const [, , arg3 = "base"] = process.argv;
const [, base] = arg3.split("=");

!base
  ? console.error({
      message: "Base needs a value",
      error: "File was not created!",
    })
  : createFile(base)
      .then(console.log("created file"))
      .catch((err) => console.log(err));

const { writeFileSync } = require("fs");

const createFile = async (base) => {
  let file = "";

  for (let i = 1; i <= 10; i++) {
    let res = base * i;
    file += `${base} x ${i} = ${res}\n`;
  }

  writeFileSync(`multiplication-${base}.txt`, file);
  console.log(file);
};

module.exports = { createFile };

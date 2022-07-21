const { writeFile } = require("fs");

let file = "";

const multiplication = (value, index = 1) => {
  while (index <= 10) {
    let res = value * index;
    file += `${value} x ${index} = ${res}\n`;
    index++;
  }
};

multiplication(5);

writeFile("multiplication.txt", file, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

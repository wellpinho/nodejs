console.log("Start program");

setTimeout(() => console.log("First timeout"), 3000);

setTimeout(() => {
  console.log("Second timeout");
}, 0);

setTimeout(() => {
  console.log("Third timeout");
}, 1);

console.log("End program");

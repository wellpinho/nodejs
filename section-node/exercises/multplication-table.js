const response = (value, index = 1) => {
  while (index <= 10) {
    let res = value * index;
    console.log(`${value} x ${index} = ${res}`);
    index++;
  }
};

response(5);

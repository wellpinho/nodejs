const DeadPool = {
  name: "Wellington Pinho",
  age: 43,
  phone: "554899999999",

  getName() {
    return `${this.name}, ${this.age}, ${this.phone}`;
  },
};

// destricture an object
const { name, age, phone, address = "Vereador 3615" } = DeadPool;
console.log(name, age, phone, address);

const func = ({ name, age, phone, address = "Severino 3615" }) =>
  console.log(name, age, phone, address);

func(DeadPool);

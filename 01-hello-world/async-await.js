const Employees = [
  {
    id: 1,
    name: "Wellington Pinho",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Raica",
  },
  {
    id: 4,
    name: "Wendell",
  },
];

const Salaries = [
  {
    id: 1,
    salary: 1000,
  },
  {
    id: 2,
    salary: 15000,
  },
];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const employeed = Employees.find((e) => e.id === id)?.name;
    employeed ? resolve(employeed) : reject(`Employee id: ${id}, not found!`);
  });
};

const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = Salaries.find((salary) => salary.id === id)?.salary;
    salary ? resolve(salary) : reject("Salary not found");
  });
};

const id = 5;

const getInfoUser = async (id) => {
  try {
    const employee = await getEmployee(id);
    const salary = await getSalary(id);

    return { employee, salary };
  } catch (error) {
    throw { message: error, code: 400 };
  }
};

getInfoUser(id)
  .then((user) => console.log(user))
  .catch((error) => console.log(error));

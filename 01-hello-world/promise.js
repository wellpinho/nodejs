const Employees = [
  {
    id: 1,
    name: "Wellington",
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
    salary: 1500,
  },
];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    const employeed = Employees.find((e) => e.id === id)?.name;
    employeed ? resolve(employeed) : reject(`Employee ${id} not found!`);
  });
};

const getSalary = (id) => {
  return new Promise((resolve, reject) => {
    const salary = Salaries.find((salary) => salary.id === id)?.salary;
    salary ? resolve(salary) : reject("Salary not found");
  });
};

const id = 2;
let name;

getEmployee(id)
  .then((employee) => {
    employeeName = employee;
    return getSalary(id);
  })
  .then((salary) => console.log(employeeName, "have a salary of:", salary))
  .catch((error) => console.log(error));

const getUserById = (id, callback) => {
  const user = {
    id,
    name: "Wellington",
  };

  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUserById(10, (user) => {
  console.log(user);
});

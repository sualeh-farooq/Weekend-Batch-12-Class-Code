let users = [
    {
      name: "anus",
      email: "anus@mail.com",
      id: 1,
    },
    {
      name: "ali",
      email: "ali@mail.com",
      id: 2,
    },
  ];

const getAllUsers = (req, res) => {
  res.send({ user: users, count: users.length });
};

const createNewUser = (req, res) => {
  users.push({ ...req.body, id: users.length + 1 });
  res.send({ message: "User added succesfully", user: req.body });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((data) => data.id !== parseInt(id));
  res.send({ message: "User deleted Succesfully", users: users });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  let findUser = users.filter((data) => data.id === parseInt(id));
  if (findUser.length > 0) {
    
    const user = findUser[0];
    user.email = email;
    res.send({ users: users });
  
  } else {
    res.send({ message: "User not found !" });
  }
};



module.exports = { getAllUsers , deleteUser , updateUser  , createNewUser }
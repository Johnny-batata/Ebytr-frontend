import invokeAlert from '../helpers/functions/invokeAlert';

const tasksRoute = 'http://localhost:3003/tasks';
const contentJson = 'application/json';

const registerNewUser = async (newUSer) => {
  const endpoint = 'http://localhost:3003/signup';
  const responses = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': contentJson,
    },
    body: JSON.stringify({ ...newUSer }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }

  return data;
};

const loginUser = async (user) => {
  const endpoint = 'http://localhost:3003/login';
  const responses = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': contentJson,
    },
    body: JSON.stringify({ ...user }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }

  return data;
};

const getAllTasks = async () => {
  const endpoint = tasksRoute;
  const token = localStorage.getItem('token');
  const responses = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': contentJson,
      authorization: token,
    },
  })
    .then((response) => response.json())
    .catch((err) => err);

  const data = await responses;

  return data;
};

const createTask = async (newTask) => {
  const endpoint = tasksRoute;
  const token = localStorage.getItem('token');
  const responses = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': contentJson,
      authorization: token,
    },
    body: JSON.stringify({ ...newTask }),

  })
    .then((response) => response.json())
    .catch((err) => err);

  const data = await responses;

  return data;
};

const updateTask = async (task) => {
  const endpoint = tasksRoute;
  const token = localStorage.getItem('token');
  console.log(task, 'task');
  const responses = await fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': contentJson,
      authorization: token,
    },
    body: JSON.stringify({ ...task }),

  })
    .then((response) => response.json())
    .catch((err) => err);

  const data = await responses;

  return data;
};

const removeTask = async (id) => {
  const endpoint = `http://localhost:3003/tasks/${id}`;
  const token = localStorage.getItem('token');
  console.log(id, 'task');
  const responses = await fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': contentJson,
      authorization: token,
    },
  })
    .then((response) => response.json())
    .catch((err) => err);

  const data = await responses;

  return data;
};

const getAllUser = async () => {
  const endpoint = 'http://localhost:3003/user';
  const token = localStorage.getItem('token');

  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': contentJson,
      authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return invokeAlert(data.err.message); }

  return data;
};

export {
  loginUser,
  registerNewUser, getAllTasks, createTask, updateTask, removeTask, getAllUser };

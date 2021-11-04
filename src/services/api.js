import invokeAlert from '../helpers/functions/invokeAlert';

const registerNewUser = async (newUSer) => {
  const endpoint = 'http://localhost:3003/signup';
  const responses = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json',
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
  const endpoint = `http://localhost:3003/tasks`;
  const token = localStorage.getItem('token');
  const responses = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  })
    .then((response) => response.json())
    .catch((err) => err);

  const data = await responses;

  return data;
};

const createTask = async (newTask) => {
  const endpoint = `http://localhost:3003/tasks`;
  const token = localStorage.getItem('token');
  const responses = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify({ ...newTask}),

  })
    .then((response) => response.json())
    .catch((err) => err);

  const data = await responses;

  return data;
};

export { loginUser, registerNewUser, getAllTasks, createTask }
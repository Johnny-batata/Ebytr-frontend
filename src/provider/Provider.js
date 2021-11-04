/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState } from 'react';

import { getAllTasks, getAllUser } from '../services/api';

const Context = createContext();

const defaultCurrentTask = {
  task: '',
  employee: '',
  date: '',
  status: '',
  id: 0,
};

const Provider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentTask, setCurrentTask] = useState(defaultCurrentTask);

  const fetchTasks = async () => {
    const data = await getAllTasks();
    setAllTasks(data.data);
  };

  const fetchUser = async () => {
    const data = await getAllUser();
    console.log(data, 'data');
    setAllUsers(data.data);
  };

  const changeTask = ({ target: { value, name } }) => {
    setCurrentTask({
      ...currentTask,
      [name]: value,
    });
  };

  const renderEmployeesSelect = (employee) => (
    <select name="employee" defaultValue={ employee } onChange={ changeTask }>
      <option value="" selected disabled hidden>Selecione</option>
      {
        allUsers.map(({ name, id }) => (
          <option key={ id }>{ name }</option>
        ))
      }
    </select>
  );

  const context = {
    fetchTasks,
    allTasks,
    allUsers,
    fetchUser,
    renderEmployeesSelect,
    currentTask,
    setCurrentTask,
  };

  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };

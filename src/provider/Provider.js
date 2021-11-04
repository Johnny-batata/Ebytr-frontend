/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState } from 'react';

import { getAllTasks } from '../services/api';

const Context = createContext();

const Provider = ({ children }) => {

  const [allTasks, setAllTasks] = useState([])


  const fetchTasks = async()=> {
    const data = await getAllTasks()
    setAllTasks(data.data)
  }


  const context = {
    fetchTasks,
    allTasks
  };


  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
};

export { Provider, Context };

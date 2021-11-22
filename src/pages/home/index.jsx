/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { FaPenSquare, FaPlusSquare, FaTrash, FaCheck } from 'react-icons/fa';
import Header from './components/header';
import * as S from './index.styles';
import { updateTask, removeTask } from '../../services/api';
import RenderInsertTaskForm from './components/insertTask';
import { Context } from '../../provider/Provider';

const MINUS_ONE = -1;

const defaultSort = {
  name: 'task',
  asc: true,
};

const Home = () => {
  const { allTasks, fetchTasks,
    fetchUser, renderEmployeesSelect, currentTask, setCurrentTask } = useContext(Context);
  const [visibleInsert, setVisibleInsert] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [sortType, setSortType] = useState(defaultSort);
  const [currentStatus, setCurrentStatus] = useState('Em andamento');
  const [currentId, setId] = useState(0);

  useEffect(() => {
    fetchTasks();
    fetchUser();
  }, []);

  const handleTasksStatus = ({ target, target: { name } }) => {
    const buttons = document.querySelectorAll('.selected');
    setCurrentStatus(name);
    buttons.forEach((button) => {
      button.classList.remove('selected');
    });

    target.classList.add('selected');
  };

  const handleInsertTask = () => setVisibleInsert(!visibleInsert);

  const renderTasksStatus = () => (
    <div>
      <button
        onClick={ handleTasksStatus } 
        className="selected"
        name="Em andamento"
        type="button"
      >
        Em andamento
      </button>
      <button onClick={ handleTasksStatus } name="Pendentes" type="button">
        Pendentes
      </button>
      <button onClick={ handleTasksStatus } name="Finalizados" type="button">
        Finalizados
      </button>
      <button type="button" onClick={ handleInsertTask }>
        <FaPlusSquare />
        {' '}
        Tarefa
      </button>
    </div>
  );

  const sortAll = () => {
    const { asc, name } = sortType;
    if (asc === false) {
      return allTasks.sort((a, b) => {
        if (b[name] < a[name]) {
          return 1;
        }
        if (b[name] > a[name]) {
          return MINUS_ONE;
        }
        return 0;
      });
    }
    return allTasks.sort((a, b) => {
      if (b[name] > a[name]) {
        return 1;
      }
      if (b[name] < a[name]) {
        return MINUS_ONE;
      }
      return 0;
    });
  };

  const handleSort = ({ target: { id } }) => {
    const { asc, name } = sortType;
    if (name === id) {
      return setSortType({
        ...sortType,
        name: id,
        asc: !asc,
      });
    }
    return setSortType({
      ...sortType,
      name: id,
      asc: true,
    });
  };

  const handleClick = (id) => {
    setVisibleUpdate(!visibleUpdate);
    setId(id);
    const data = allTasks.filter((el) => el.id === id);
    const { task, employee, date, status } = data[0];
    setCurrentTask({
      task,
      employee,
      date,
      status,
      id,
    });
  };

  const checkId = (id) => {
    if (visibleUpdate && id === currentId) return true;
    return false;
  };

  const sendUpdateTask = async () => {
    setVisibleUpdate(!visibleUpdate);

    await updateTask(currentTask);
    return fetchTasks();
  };

  const changeTask = ({ target: { value, name } }) => {
    setCurrentTask({
      ...currentTask,
      [name]: value,
    });
  };

  const renderStatusSelect = (status) => (
    <select defaultValue={ status } onChange={ changeTask } name="status">
      <option>Em andamento</option>
      <option>Pendentes</option>
      <option>Finalizado</option>
    </select>
  );
  const removeOneTask = async (id) => {
    await removeTask(id);
    return fetchTasks();
  };

  const renderTable = () => (
    <table>
      <thead>
        <tr>
          <th onClick={ handleSort } id="id"> Id</th>
          <th onClick={ handleSort } id="task">Tarefa</th>
          <th id="employee" onClick={ handleSort }>Responsável</th>
          <th id="date" onClick={ handleSort }>Data de inicio</th>
          <th id="status">Status</th>
          <th>Edit</th>
        </tr>
      </thead>
      {
        sortAll()
          .filter((el) => el.status === currentStatus)
          .map(({ task, employee, date, id, status }) => (
            <tbody key={ id }>
              <td>{id}</td>
              <td>
                {
                  !checkId(id) ? task : <input
                    type="text"
                    name="task"
                    defaultValue={ task }
                    onChange={ changeTask }
                  />
                }

              </td>
              <td>
                {
                  !checkId(id) ? employee : renderEmployeesSelect(employee)
                }
              </td>
              <td>
                {
                  !checkId(id) ? date : <input
                    type="date"
                    name="date"
                    defaultValue={ date }
                    onChange={ changeTask }
                  />
                }
              </td>
              <td>{!checkId(id) ? status : renderStatusSelect(status) }</td>
              <td>
                <FaPenSquare
                  class="fa-solid fa-pen-to-square"
                  onClick={ () => handleClick(id) }
                />
                <FaTrash onClick={ () => removeOneTask(id) } />
                {
                  checkId(id) && <FaCheck
                    onClick={ () => sendUpdateTask() }
                  />
                }
              </td>
            </tbody>
          ))
      }
    </table>
  );

  return (
    <div>
      <S.MainDiv>
        <Header />
        <section>
          {renderTasksStatus()}
          {visibleInsert && <RenderInsertTaskForm />}
        </section>
        <h1>Tarefas</h1>
        { allTasks && renderTable()}
      </S.MainDiv>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Header from "./components/header";
import * as S from './index.styles'
import { FaPenSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import { getAllTasks, createTask } from '../../services/api'

const taskDefault = {
  task: '',
  employee: '', 
  date: '',
  status:'',

}

const defaultSort = {
  name: 'task',
  asc: true
}

const Home = () => {
  const [insertTask, setInsertTask] = useState(false)
  const [allTasks, setAllTasks] = useState([])
  const [newTask, setNewTask] = useState(taskDefault)
  const [sortType, setSortType] = useState(defaultSort)
  const [status, setStatus] = useState('Em andamento')

  const fetchTasks = async()=> {
    const data = await getAllTasks()
    setAllTasks(data.data)
  }
  useEffect(() => {
    fetchTasks()
  }, [])

  const handleTasksStatus = ( { target, target: { name } } ) => {
    const buttons = document.querySelectorAll('.selected');
    setStatus(name)
    buttons.forEach((button) => {
      button.classList.remove('selected');
    });

  target.classList.add('selected')
  }

  const renderTasksStatus = () => {
    return (
      <div>
        <button onClick={ handleTasksStatus} class="selected" name="Em andamento">
        Em andamento
        </button>
        <button onClick={ handleTasksStatus} name="Pendentes">
        Pendentes
        </button>
        <button onClick={ handleTasksStatus} name="Finalizados">
        Finalizados
        </button>
        <button type="button" onClick={ handleInsertTask }>
        <FaPlusSquare /> Tarefa
        </button>
      </div>
    )
  }

  const sortAll = () => {
    const { asc, name} = sortType
    if(asc === false )  {
      console.log('falso')
    return allTasks.sort((a, b) => {
      if (b[name] < a[name]) {
        return 1;
      }
      if (b[name] > a[name]) {
        return -1;
      }
      return 0;
    });
  }
    return allTasks.sort((a, b) => {
      if (b[name] > a[name]) {
        return 1;
      }
      if (b[name] < a[name]) {
        return -1;
      }
      return 0;
    });
    
  }

  const handleSort = ({target: {  id }}) => {
    const { asc, name} = sortType
    if(name === id) { 
      return  setSortType({
        ...sortType,
        name: id,
        asc: !asc
      })
    } 
    return setSortType({
      ...sortType,
      name: id,
      asc: true
    })
  }

  const renderTable = () => {
    return (
      <table>
      <thead>
        <tr>
          <th onClick={  handleSort} id="id"> Id</th>
          <th onClick={  handleSort} id="task">Tarefa</th>
          <th id="employee" onClick={  handleSort}>Responsável</th>
          <th id="date" onClick={  handleSort}>Data de inicio</th>
          <th>Edit</th>
        </tr>
      </thead>
      {
        sortAll()
        .filter((el) => el.status === status)
        .map(({ task, employee, date, id}) =>  (
          <tbody key={id}> 
          <td>{id}</td>
          <td>{task}</td>
          <td>{employee}</td>
          <td>{date}</td>
          <td><FaPenSquare class="fa-solid fa-pen-to-square" />  < FaTrash /> </td>
          </tbody> 
        )) 
      }
    </table>
    )
  }

  const handleInsertTask = () => {
    return setInsertTask(!insertTask)
  }

  const handleNewTask = ({ target: { value, name } }) => {
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const sendTask = async() => {
    console.log('clicou')
    return createTask(newTask)
  }

  const renderInsertTaskForm = () => {
    return (
      <S.FormDiv>
        <h1>Inserir Nova Tarefa: </h1>
      <form>
        <label htmlFor="task">
          Tarefa:
        <input type="text" name="task"placeholder="digite aqui..."  onChange={handleNewTask}/>
        </label>
        <label htmlFor="employee" onChange={handleNewTask}>
          Responsável:
        <select name="employee" onChange={handleNewTask}>
        <option value="" selected disabled hidden>Selecione</option>
          <option>fulano1 </option>
          <option>fulano2 </option>
        </select>
        </label>
        <label htmlFor="date">
          Data de inicio:
        <input
        type="date"
        data-date=""
        name="date"
        data-date-format="DD MMMM YYYY"
        required
        onChange={handleNewTask}
      />
      </label>
      <label htmlFor="status" onChange={handleNewTask}>
        Status:
      <select name="status" onChange={handleNewTask}>
      <option value="" selected disabled hidden>Selecione</option>
          <option>Em andamento</option>
          <option>Pendentes</option>
          <option>Finalizados</option>
        </select>
        </label>
        <button type="submit" onClick={ sendTask } >Criar</button> 
      </form>
      </S.FormDiv>
    )
  }

  return (
    <div>
    <S.MainDiv>
      <Header />
      <section>
      {renderTasksStatus()}
    {insertTask && renderInsertTaskForm()}
      </section>
        <h1>Tarefas</h1>
      { allTasks && renderTable()}
    </S.MainDiv>
    </div>
  )
}

export default Home;
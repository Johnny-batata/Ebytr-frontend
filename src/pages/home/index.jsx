import React, { useState, useEffect } from "react";
import Header from "./components/header";
import * as S from './index.styles'
import { FaPenSquare, FaPlusSquare, FaTrash, FaCheck} from 'react-icons/fa'
import { getAllTasks } from '../../services/api'
import RenderInsertTaskForm from "./components/insertTask";

const defaultSort = {
  name: 'task',
  asc: true
}

const Home = () => {
  const [insertTask, setInsertTask] = useState(false)
  const [allTasks, setAllTasks] = useState([])
  const [sortType, setSortType] = useState(defaultSort)
  const [status, setStatus] = useState('Em andamento')
  const [updateTask, setUpdateTask] = useState(false)
  const [currentId, setId] = useState(0)

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

  const handleClick = (id) => {
    console.log('ra', id)
    setUpdateTask(!updateTask)
    setId(id)
  }

  const checkId = (id) => {
    if(updateTask && id === currentId) return true
    return false
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
          <td>{!checkId(id) ? task : <input type="text"  value={task} /> }</td>
          <td>{!checkId(id) ? employee : <input type="text"  value={employee} /> }</td>
          <td>{!checkId(id) ? date : <input type="date"  value={date} /> }</td>
          <td><FaPenSquare class="fa-solid fa-pen-to-square"  onClick={() => handleClick(id)}/>  < FaTrash /> { checkId(id)  &&<FaCheck />}  </td>
          </tbody> 
        )) 
      }
    </table>
    )
  }

  const handleInsertTask = () => {
    return setInsertTask(!insertTask)
  }


  return (
    <div>
    <S.MainDiv>
      <Header />
      <section>
      {renderTasksStatus()}
    {insertTask && <RenderInsertTaskForm />}
      </section>
        <h1>Tarefas</h1>
      { allTasks && renderTable()}
    </S.MainDiv>
    </div>
  )
}

export default Home;
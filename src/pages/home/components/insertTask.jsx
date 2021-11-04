import React, { useState } from "react";
import { createTask } from '../../../services/api'
import * as S from './insertTask.styles'

const taskDefault = {
  task: '',
  employee: '', 
  date: '',
  status:'',

}

const RenderInsertTaskForm = () => {

  const [newTask, setNewTask] = useState(taskDefault)

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

export default RenderInsertTaskForm;
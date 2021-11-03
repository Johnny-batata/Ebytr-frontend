import React, { useState } from "react";
import Header from "./components/header";
import * as S from './index.styles'
import { FaPenSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import { GoX } from 'react-icons/go'

const Home = () => {
  const [insertTask, setInsertTask] = useState(false)

  const renderTasksStatus = () => {
    return (
      // <select>
      //   <option>Em andamento</option>
      //   <option>Pendentes</option>
      //   <option>Finalizados</option>
      // </select>
      <div>
        <h5>Em andamento</h5>
        <h5>Pendentes</h5>
        <h5>Finalizados</h5>
        <button type="button" onClick={ handleInsertTask }>
        <FaPlusSquare /> Tarefa
        </button>
      </div>
    )
  }

  const renderTable = () => {
    return (
      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tarefa</th>
          <th>Responsável</th>
          <th>Data de inicio</th>
          {/* <th>Status</th> */}
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
      <td>0001</td>
      {/* <td>comprar pão</td> */}
      <td>comprar pão, leite, ovos, queijo, pão.. hum, amo pão</td>
      <td>bruno</td>
      <S.TdDate>06-04-2000</S.TdDate>
      {/* <td>Pendente</td> */}
      <td><FaPenSquare class="fa-solid fa-pen-to-square" />  < FaTrash /> </td>
      </tbody>
    </table>
    )
  }

  const handleInsertTask = () => {
    return setInsertTask(!insertTask)
  }

  const renderInsertTaskForm = () => {
    return (
      <S.FormDiv>
        <GoX onClick={ handleInsertTask }/>
        <h1>Inserir Nova Tarefa: </h1>
      <form>
        <label htmlFor="tarefa">
          Tarefa:
        <input type="text" name="tarefa"placeholder="digite aqui..." />
        </label>
        <label htmlFor="responsável">
          Responsável:
        <select name="responsável">
          <option>fulano1 </option>
          <option>fulano2 </option>
        </select>
        </label>
      </form>
      </S.FormDiv>
    )
  }

  return (
    <div>
    {insertTask && renderInsertTaskForm()}
    <S.MainDiv>
      <Header />
      <section>
      {renderTasksStatus()}
      </section>
        <h1>Tarefas</h1>
      {renderTable()}
    </S.MainDiv>
    </div>
  )
}

export default Home;
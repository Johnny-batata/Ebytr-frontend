import React from "react";
import Header from "./components/header";
import * as S from './index.styles'

const Home = () => {

  const renderTasksStatus = () => {
    return (
      <select>
        <option>Em andamento</option>
        <option>Pendentes</option>
        <option>Finalizados</option>
      </select>
    )
  }

  const renderTable = () => {
    return (
      <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Responsável</th>
          <th>Data de inicio</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
      <td>comprar pão</td>
      <td>bruno</td>
      <td>06-04-2000</td>
      <td>Pendente</td>
      </tbody>
    </table>
    )
  }

  console.log('batta')
  return (
    <S.MainDiv>
      <Header />
      {renderTasksStatus()}
      <h1>Tarefas</h1>

      {renderTable()}
    </S.MainDiv>
  )
}

export default Home;
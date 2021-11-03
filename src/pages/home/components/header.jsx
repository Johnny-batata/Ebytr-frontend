import React from "react";
import { FaDoorOpen } from  'react-icons/fa';
import * as S from './header.styles'

const Header = () => {
  console.log('batata')
  const renderHeaderDefault = () => (
    <S.SectionDefault>
      <h1>Lista de tarefas</h1>
      <FaDoorOpen  class="fa-solid fa-door-open" />

    </S.SectionDefault>
  );

  return (
    <S.Header>
      { renderHeaderDefault() }
    </S.Header>
  )
}

export default Header;
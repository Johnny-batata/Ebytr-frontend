import React, { useState } from 'react';
import { FaDoorOpen } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import * as S from './header.styles';

const Header = () => {
  const [redirect, setRedirect] = useState(false);
  const handleClick = () => {
    localStorage.clear();
    setRedirect(true);
  };
  const renderHeaderDefault = () => (
    <S.SectionDefault>

      <h1>Lista de tarefas</h1>
      <FaDoorOpen class="fa-solid fa-door-open" onClick={ handleClick } />
      { redirect && <Redirect to="/" />}
    </S.SectionDefault>
  );

  return (
    <S.Header>
      { renderHeaderDefault() }
    </S.Header>
  );
};

export default Header;

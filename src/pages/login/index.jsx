import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as S from './index.styles';
import { validateIfFieldsAreCorrect } from '../../helpers/verifyFunctions/login_validate';
import { loginUser } from '../../services/api';
import Logo from '../imgs/iconedoApp3.jpg';

const userDefault = {
  email: '',
  password: '',
};

const Login = () => {
  const [user, setUser] = useState(userDefault);
  const [redirect, setRedirect] = useState(false);

  const handleChange = ({ target: { value, name } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleclick = async () => {
    if (!validateIfFieldsAreCorrect(user)) {
      return;
    }
    const login = await loginUser(user);
    if (login) {
      localStorage.setItem('token', login.token);
      localStorage.setItem('usermail', user.email);
      return setRedirect(true);
    }
  };

  const renderInputs = () => (
    <S.Section>
      <div>
        <label htmlFor="e-mail">
          E-mail:
          <br />
          <input type="text" name="email" onChange={ handleChange } id="e-mail" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Senha:
          <br />
          <input type="password" name="password" onChange={ handleChange } />
        </label>
      </div>
      <div>
        <button type="button" onClick={ handleclick }>Entrar </button>
      </div>
      <div>
        <Link to="/signup">Cadastre-se</Link>
      </div>
    </S.Section>
  );

  return (
    <S.MainDiv>
      <S.LogoImg src={ Logo } alt="Logo" />
      <h2>Bem Vindo!</h2>
      <p>Acesse sua conta aqui!</p>
      {renderInputs()}
      {redirect && <Redirect to="/home" />}
    </S.MainDiv>
  );
};

export default Login;

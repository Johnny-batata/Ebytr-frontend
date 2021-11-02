import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';
import { registerNewUser } from '../../services/api';
import { validateIfFieldsAreCorrect } from '../../helpers/verifyFunctions/signUp_validateEmail';
import { ButtonLogin, MainDiv, LogoImg} from './index.styles'
import Logo from '../imgs/iconedoApp3.jpg';


const userDefault = {
  name: '',
  birthdate: '',
  email: '',
  password: '',
};
const SignUp = () => {
  const [userInfo, setUserInfo] = useState(userDefault);
  const [redirect, setRedirect] = useState(false);

  const handleclick = async () => {
    if (!validateIfFieldsAreCorrect(userInfo)) {
      return;
    }
    const register = await registerNewUser(userInfo);
    console.log(register, 'eu aqui');
    if (register) return setRedirect(true);
  };

  const handleChange = ({ target: { value, name } }) => {
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const renderSections = () => (
    <section>
      <input
        type="text"
        name="name"
        onChange={ handleChange }
        placeholder="nome"
        required
      />
      <input
        type="date"
        data-date=""
        onChange={ handleChange }
        name="birthdate"
        data-date-format="DD MMMM YYYY"
        required
      />
      <input
        type="text"
        name="email"
        onChange={ handleChange }
        placeholder="email"
        required
      />

      <input
        type='password' 
        onChange={ handleChange }
        name="password"
        placeholder="senha"
        required
      />
    </section>
  );

  return (
    <MainDiv>
      <LogoImg src={ Logo } alt="Logo" />
      <h2>Bem Vindo!</h2>
      <p>Cadastre seus dados para acessar a plataforma!</p>
      {renderSections()}
      <ButtonLogin type="submit" onClick={ handleclick }>Cadastrar</ButtonLogin>
      {redirect && <Redirect to="/" />}
    </MainDiv>
  );
};

export default SignUp;

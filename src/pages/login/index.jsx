import React, { useState } from "react";
import { Link, Redirect  } from "react-router-dom";
import * as S from  './index.styles'
import { validateIfFieldsAreCorrect } from "../../helpers/verifyFunctions/login_validate";
import { loginUser } from "../../services/api";

const userDefault = {
  email: '',
  password: '', 
}

const Login = () => {
  const [user, setUser] = useState(userDefault);
  const [redirect, setRedirect] = useState(false);

  const handleChange=({ target: { value, name } }) => {
    setUser({
      ...user,
      [name]: value,
    });  
  }

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


  const renderInputs = () => {
    return(
      <S.Section>
        <form>
        <h3> Login </h3>
        <div>
            <label htmlFor="e-mail">E-mail:</label><br />
            <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="password">Senha:</label><br />
            <input type="text" name="password" onChange={handleChange}  />
        </div>
        <div>
            <button type="button" onClick={ handleclick }>Entrar </button >
        </div>
        <div>
            <Link to="/register">Cadastre-se</Link>
        </div>
          </form>
      </S.Section>
    )
  }

  return (
    <div>
      {renderInputs()}
      {redirect && <Redirect to="/inicio" />}
    </div>
  )
}

export default Login
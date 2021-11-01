import styled from 'styled-components';

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 80px;
  width: 100%;
  form {
    align-items: center;
  background-color: rgba(245, 246, 250, 0.65);
  border-radius: 20px;
  box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;
  padding: 20px;
  width: 35%;
    h3 {
      font-size: 1.4rem;

    }
    div {
    display: flex;
    flex-direction: column;
    width: 327px;
    height: 56px;

    }

    input {
      /* width: 90%; */
      display: flex;
    }
    button {
      align-items: center;
  background-color: #218c74;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  height: 35px;
  justify-content: center;
  margin-top: 10px;
  opacity: 1;
  outline: none;
  padding: 0 5px;
  text-align: center;
  text-decoration: none;
  transition: 0.5s;
  /* width: 250px; */
  width: 319px;

    }
    button:hover {
  opacity: 0.5;
  transition: 0.5s;
}
a {
  text-decoration: none;
}
}
`
// height: 100%;
//     display: flex;
//     width: 100%;
//     align-items: center;
//     justify-content: center;
//   background-color: green;
//   form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     margin-bottom: 20px;
//     background-color: grey;
//     h3 {
//       font-size: 1.4rem;

//     }
//     div {
//     display: flex;
//     flex-direction: column;
//     width: 327px;
//     height: 56px;
//     /* align-items: center; */

//     }

//     input {
//       /* width: 90%; */
//       display: flex;
//     }
//     button {
//       display: flex;
//       width: 200px;
//       justify-content: center;
//       align-items: center;
//     }
// }
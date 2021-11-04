import styled from 'styled-components';

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 19px 32px;
  Width: 327px;
  Height: 56px;
  background: #C90000;
  border-radius: 32px;
  color: white;
  font-size: 18px;
`;

export const MainDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  h2 {
    color: #000000;
    font-size: 27px;
    font-weight: bold; 
    margin-bottom: 0;
    margin-top: 20px;
}
  p {
    color: #2E3E5C;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.5px;
  }
  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    input {
      background: #FFFFFF;
      border: 1px solid #D0DBEA;
      box-sizing: border-box;
      border-radius: 32px;
      Width: 327px;
      margin-bottom: 15px ;
      outline: none;
      padding: .5rem 3.5rem .5rem 3.5rem ;
      font-size: 20px;
    }
    input:nth-child(6){
      padding: .5rem 1.0rem .5rem 3.5rem ;

    }
  }
`;

export const LogoImg = styled.img`
    width: 327px;
    height: 140px;
`;

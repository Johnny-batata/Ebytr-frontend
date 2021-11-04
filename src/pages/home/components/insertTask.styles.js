import styled from 'styled-components';

export const FormDiv = styled.div`
  flex-direction: column;
  width: 80% !important;
  height: 60% !important; 
  background-color: #eee; 
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
 -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);
  margin-top: 20px;
  align-items: center;
  svg {
    font-size: 60px;
    right: 10px;
    position: absolute;
  }

  form {
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }
`;

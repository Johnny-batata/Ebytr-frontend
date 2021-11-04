import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
    align-items: center;
  div {
    display: flex;
    height: 60px;
    width: 100%;
    justify-content: center;
    h5 {
      padding: 0.5em;
    }
  }

  button{
    display: flex;
    align-items: center;
    text-decoration: none;

  }
  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      font-size: 1.4em;
      margin-right: 5px;
    }
  }
  table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  text-align: center;
  border-bottom: 2px solid black;
}

tbody td {
  border-bottom: 1px solid #ccc;
  width: 16%;
  text-align: center;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
tbody td:hover {
  white-space:normal;
    text-overflow: inherit;
    overflow: visible;

}


tbody tr:hover {
  background-color: #eee;
}


`
export const FormDiv = styled.div `
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
`
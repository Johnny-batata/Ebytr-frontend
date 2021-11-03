import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: flex-start;
  flex-direction: column;
    align-items: center;
  div {
    display: flex;
    /* margin-top: 55px; */
    height: 60px;
    /* background-color: hotpink; */
    width: 100%;
    justify-content: center;
    h5 {
      padding: 0.5em;
    }
  }

  button{
    display: flex;
    align-items: center;
  }
  section:nth-child(3) {

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px;
    svg {
      font-size: 1.4em;
      margin-right: 5px;
    }
    margin-bottom: 20px;
  }
  table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  /* text-align: left; */
  text-align: center;
  border-bottom: 2px solid black;
  /* width: 10%; */
  /* width: 16%; */
}

tbody td {
  /* padding: 0.5em; */
  border-bottom: 1px solid #ccc;
  width: 16%;
  text-align: center;
  /* white-space:pre; */
    /* overflow:hidden; */
    /* text-overflow: ellipsis; */
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

export const TdDate = styled.td`

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
  }
`
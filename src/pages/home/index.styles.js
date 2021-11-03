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
    background-color: hotpink;
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
/* background-color: green; */
  /* font-size: 11px; */
`

export const FormDiv = styled.div `
  /* background-color: green; */
  background-color: grey;
  /* background-color: rgba(245, 246, 250, 0.65); */

  width: 80% !important;
  height: 80% !important; 
  position: absolute;
  margin-top: 90px;
  margin-right: 20%;
  margin-left: 10%;
  /* box-shadow: inset 0 0 1em black; */

  svg {
    font-size: 60px;
    right: 10px;
    position: absolute;
  }

`
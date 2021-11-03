import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  /* justify-content: center; */
  justify-content: flex-start;
  flex-direction: column;
    align-items: center;
  select {
    display: flex;
    /* margin-top: 55px; */
    height: 60px;
    width: 100%;
  }
  table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  text-align: left;
  border-bottom: 2px solid black;
}

tbody td {
  padding: 0.5em;
  border-bottom: 1px solid #ccc;
}

tbody tr:hover {
  background-color: #eee;
}

`
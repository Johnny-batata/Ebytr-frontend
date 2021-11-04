import styled from 'styled-components';

export const SectionDefault = styled.section`
    background-color: #F08080;
    color: white;
    height: 56px;
    display: flex;
    align-items: center;
    width: 100%;
    position:  fixed;
    justify-content: center;
    top: 0;
    svg {
      width: 27px;
      height: 27px;
    }

    svg:nth-child(2) {
      position: relative;
      display: flex;
      align-items: center;
      left: 42%;
    }
`;

export const Header = styled.header`
width: 100%;
margin-bottom: 56px;`;

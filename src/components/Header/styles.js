import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff0db;
  background: white;
  height: 50px;
  margin-bottom: 30px;

  nav {
    display: flex;

    a {
      margin-right: 10px;
      padding-right: 10px;
      border-right: 2px solid #babaca;
      color: #000;
    }
  }
`;

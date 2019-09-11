import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 20px 30px;
  max-width: 920px;
  background: white;

  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

export const Button = styled.button`
  background: none;
  border: 0;
  color: red;
  float: right;
  margin-top: 20px;
  color: #374955;
  text-transform: uppercase;

  span {
    margin-right: 10px;
  }
`;

export const Content = styled.p`
  line-height: 25px;
  position: relative;

  ${props =>
    !props.isClicked &&
    css`
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        box-shadow: inset 0px -120px 90px -50px #fff;
        pointer-events: none;
      }
    `}
`;

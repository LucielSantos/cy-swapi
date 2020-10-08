import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0,0,0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({active}) => active && css` display: none; `}
`;

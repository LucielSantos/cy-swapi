import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const NavIconContainer = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .3s;
  height: 2.3rem;
  width: 2.3rem;
  border-radius:50%;
  cursor: pointer;

  &:hover{
    background-color: rgba(255, 255,255, .2);
  }

  &:active{
    background-color: rgba(255, 255,255, .3);
  }
`;

export const NavContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
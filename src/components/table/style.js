import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.colors.primary};
`;

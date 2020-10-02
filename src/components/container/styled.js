import styled from 'styled-components';

export const ContainerComponent = styled.div`
  width: 100%;
  max-width: 60rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 1rem;
  box-sizing: border-box;
`;

export const FatherContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

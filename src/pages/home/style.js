import styled from 'styled-components';

import { Text } from '../../components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(Text).attrs({
  size: 'lg',
  clickable: true,
})`
`;

export const Separator = styled.div`
  height: 2rem;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 1rem;
`;
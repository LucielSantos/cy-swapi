import React from 'react';

import { MoonLoader} from 'react-spinners';

import { Container } from './styled';

import { theme } from '../../styles'
import { addTestSelector } from '../../utils/test';
import { loaderPrefixSelector } from '../../constants';

export const Loader = ({
  testSuffix = '',
  active,
}) => {
  return (
    <Container active={active} {...addTestSelector(`${loaderPrefixSelector}${testSuffix ? `-${testSuffix}` : ''}`)}>
      <MoonLoader color={theme.colors.secondary} size={50} />
    </Container>
  );
}
import React from 'react';
import { Text } from '../';
import { rowTablePrefixSelector } from '../../constants';
import { addTestSelector } from '../../utils';
import { Container, Divider } from './style';

export const Table = ({
  rows = Array,
  testSuffix = ''
}) => {
  return (
    <Container>
      {
        rows.length === 0
        ? <Text 
            bold
            marginTop='md'
            marginBottom='md'
            marginLeft='sm'
            size='lg'
            clickable
            {...addTestSelector(`${rowTablePrefixSelector}${testSuffix ? `-${testSuffix}` : ''}`)}
          >
            Nenhum dado encontrado
          </Text>
        : rows.map(text => (
          <>
            <Text 
              bold
              key={text}
              marginTop='md'
              marginBottom='md'
              marginLeft='sm'
              size='lg'
              clickable
              {...addTestSelector(`${rowTablePrefixSelector}${testSuffix ? `-${testSuffix}` : ''}`)}
            >
              {text}
            </Text>

            <Divider />
          </>
        ))
      }
    </Container>
  );
}
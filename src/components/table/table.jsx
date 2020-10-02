import React from 'react';
import { Text } from '../';
import { Container, Divider } from './style';

export const Table = ({
  rows
}) => {
  return (
    <Container>
      {
        rows.map(text => (
          <>
            <Text 
              bold
              key={text}
              marginTop='md'
              marginBottom='md'
              marginLeft='sm'
              size='lg'
              clickable
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
import React from 'react';
import { Text } from '../';
import { navTablePrefixSelector, rowTablePrefixSelector } from '../../constants';
import { addTestSelector } from '../../utils';
import { Container, Divider, NavIconContainer, NavContainer } from './style';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

export const Table = ({
  rows = Array,
  testSuffix = '',
  nextPage = false,
  prevPage = false,
  currentPage = false,
  handlePaginate = false,
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
      
      {
        rows.length >= 0 &&
          <NavContainer
            {...addTestSelector(`${navTablePrefixSelector}${testSuffix ? `-${testSuffix}` : ''}`)}
          >
            {
              prevPage &&
                <NavIconContainer
                  onClick={() => handlePaginate(prevPage)}
                  {...addTestSelector('nav-prev')}
                >
                  <MdNavigateBefore />
                </NavIconContainer>
            }

            <Text
              bold
              marginLeft='lg'
              marginRight='lg'
              size='md'
              {...addTestSelector('nav-current-page')}
            >
              {currentPage}
            </Text>

            {
              nextPage &&
                <NavIconContainer
                  onClick={() => handlePaginate(nextPage)}
                  {...addTestSelector('nav-next')}
                >
                  <MdNavigateNext />
                </NavIconContainer>
            }
          </NavContainer>
      }
    </Container>
  );
}
import React, { useEffect } from 'react';

import { Container, Table, Loader } from '../../components';

export const PeoplesView = ({
  rows,
  nextPage,
  prevPage,
  isLoading,
  handleGetPeoples,
  history,
}) => {
  
  useEffect(() => {
    handleGetPeoples()
  }, [handleGetPeoples]);

  return (
    <Container>
      {rows &&
        <Table
          rows={rows?.map(people => people.name) || []}
          testSuffix='people'
        />
      }

      <Loader active={!isLoading} testSuffix='people-list' />
    </Container>
  );
}
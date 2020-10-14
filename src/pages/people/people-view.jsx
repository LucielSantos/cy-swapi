import React, { useEffect } from 'react';

import { Container, Table, Loader } from '../../components';

export const PeoplesView = ({
  rows,
  nextPage,
  prevPage,
  currentPage,
  isLoading,
  handleGetPeoples,
  history,
}) => {
  
  useEffect(() => {
    handleGetPeoples()
  }, [handleGetPeoples]);

  const handlePaginate = page => {
    handleGetPeoples('', page, currentPage);
  }

  return (
    <Container>
      {rows &&
        <Table
          rows={rows?.map(people => people.name) || []}
          testSuffix='people'
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
        />
      }

      <Loader active={!isLoading} testSuffix='people-list' />
    </Container>
  );
}
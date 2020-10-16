import React, { useEffect } from 'react';

import { Container, Table, Loader } from '../../components';
import { getIdByUrl } from '../../utils';

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

  const onClickRow = (obj) => {
    history.push(`/people/${getIdByUrl(obj.url)}`)
  }

  return (
    <Container>
      {rows &&
        <Table
          rows={rows?.map(people => ({label: people.name, obj: people})) || []}
          testSuffix='people'
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
          onClickRow={onClickRow}
        />
      }

      <Loader active={!isLoading} testSuffix='people-list' />
    </Container>
  );
}
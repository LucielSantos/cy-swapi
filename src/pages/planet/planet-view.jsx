import React, { useEffect } from 'react';

import { Container, Table, Loader } from '../../components';
import { getIdByUrl, setTitle } from '../../utils';

export const PlanetView = ({
  rows,
  nextPage,
  prevPage,
  currentPage,
  isLoading,
  handleGetPlanets,
  history,
}) => {
  
  useEffect(() => {
    setTitle('Listagem de planetas')
    handleGetPlanets()
  }, [handleGetPlanets]);

  const handlePaginate = page => {
    handleGetPlanets(page, currentPage);
  }

  const onClickRow = (obj) => {
    history.push(`/planet/${getIdByUrl(obj.url)}`)
  }

  return (
    <Container>
      {rows &&
        <Table
          rows={rows?.map(planet => ({label: planet.name, obj: planet})) || []}
          testSuffix='planet'
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
          handlePaginate={handlePaginate}
          onClickRow={onClickRow}
        />
      }

      <Loader active={!isLoading} testSuffix='planet-list' />
    </Container>
  );
}
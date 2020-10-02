import React, { useEffect } from 'react';

import { Container, Table } from '../../components';

export const PeoplesView = ({
  peoples: {
    data,
  },
  handleGetPeoples,
  history,
}) => {
  
  useEffect(() => {
    handleGetPeoples()
  }, [handleGetPeoples]);

  return (
    <Container>
      {data.results &&
        <Table
          rows={data?.results.map(people => people.name) || []}
        />
      }

    </Container>
  );
}
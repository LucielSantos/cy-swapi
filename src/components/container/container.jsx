import React from 'react';

import { ContainerComponent, FatherContainer } from './styled';

export const Container = ({
  children,
}) => {
  return (
    <FatherContainer>
      <ContainerComponent>
        {children}
      </ContainerComponent>
    </FatherContainer>
  );
}
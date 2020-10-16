import React, { useEffect } from 'react';

import { Container, Loader, Text } from '../../../components';
import { addTestSelector } from '../../../utils';
import { Row } from './style';

export const PeopleDetailsView = ({
  data,
  isLoading,
  handleGetPeopleDetails,
  match,
}) => {
  
  useEffect(() => {
    handleGetPeopleDetails(match.params.id);
  }, [handleGetPeopleDetails, match.params.id]);

  if(isLoading){
    return <Loader active={!isLoading} testSuffix='people-list' />
  }

  return (
    <Container>
      <Row {...addTestSelector('row-name')} >
        <Text {...labelProps} >Nome:</Text>

        <Text>{data.name}</Text>
      </Row>
      
      <Row {...addTestSelector('row-height')} >
        <Text {...labelProps} >Altura:</Text>

        <Text>{data.height}</Text>
      </Row>
      
      <Row {...addTestSelector('row-gender')} >
        <Text {...labelProps} >Gênero:</Text>

        <Text>{data.gender}</Text>
      </Row>
      
      <Row {...addTestSelector('row-eye-color')} >
        <Text {...labelProps} >Cor do olho:</Text>

        <Text>{data.eye_color}</Text>
      </Row>
      
      <Row {...addTestSelector('row-hair-color')} >
        <Text {...labelProps} >Cor do cabelo:</Text>

        <Text>{data.hair_color}</Text>
      </Row>
      
      <Row {...addTestSelector('row-mass')} >
        <Text {...labelProps} >Peso:</Text>

        <Text>{data.mass}</Text>
      </Row>
      
      <Row {...addTestSelector('row-skin-color')} >
        <Text {...labelProps} >Cor da pele:</Text>

        <Text>{data.skin_color}</Text>
      </Row>
    </Container>
  );
}

const labelProps = {
  marginRight: 'md',
  bold: true,
}
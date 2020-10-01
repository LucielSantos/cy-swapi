import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Text } from '../../components';

import { routes } from '../../routes';
import { addTestSelector } from '../../utils';
import { Body, Container, Footer, Header, LogoImage } from './style';

export const MainView = ({
  ...props
}) => {
  return (
    <Container>
      <Header>
        <LogoImage {...addTestSelector('logo-image')} />
      </Header>

      <Body>
        <Switch>
          {
            routes.map(({path, component: Component}) => (
              <Route path={path} component={Component} key={path} />
            ))
          }
        </Switch>
      </Body>

      <Footer>
          <Text marginBottom='xl'>
            Projeto para implementar testes end-to-end com Cypress
          </Text>

          <Text size='sm' align='center'>
            Desenvolvido por Luciel Santos <br/>
            GitHub: LucielSantosBS <br/>
            Repositório do projeto: cy-swapi <br/>
          </Text>
      </Footer>
    </ Container>
  );
}
import { loaderPrefixSelector, navTablePrefixSelector, rowTablePrefixSelector } from '../../../src/constants';

describe('Verify if people details is rendered', () => {
  it('Check if page is rendered', () => {
    cy.visit('/people/1');

    cy.getBySel(`row-name`)
      .should('exist')
      .should('contain.text', 'Nome:')
      .should('contain.text', 'Luke Skywalker');

    cy.getBySel(`row-height`)
      .should('exist')
      .should('contain.text', 'Altura:')
      .should('contain.text', '172');

    cy.getBySel(`row-gender`)
      .should('exist')
      .should('contain.text', 'Gênero:')
      .should('contain.text', 'male');

    cy.getBySel(`row-eye-color`)
      .should('exist')
      .should('contain.text', 'Cor do olho:')
      .should('contain.text', 'blue');

    cy.getBySel(`row-hair-color`)
      .should('exist')
      .should('contain.text', 'Cor do cabelo:')
      .should('contain.text', 'blond');

    cy.getBySel(`row-mass`)
      .should('exist')
      .should('contain.text', 'Peso:')
      .should('contain.text', '77');

    cy.getBySel(`row-skin-color`)
      .should('exist')
      .should('contain.text', 'Cor da pele:')
      .should('contain.text', 'fair');
  });
});
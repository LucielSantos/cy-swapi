import { loaderPrefixSelector, rowTablePrefixSelector } from '../../../src/constants';

describe('Verify if people is rendered', () => {
  it('Check if show loading', () => {

    cy.visit('/people');

    cy.getBySel(`${loaderPrefixSelector}-people-list`);
  });

  it('Check if peoples list is rendered', () => {
      cy.getBySel(`${rowTablePrefixSelector}-people`)
        .then(params => {
          if(params.text().includes('Nenhum dado encontrado')){
            cy.getBySel(`${rowTablePrefixSelector}-people`)
              .should('contain.text', 'Nenhum dado encontrado')
          }else{
            cy.getBySel(`${rowTablePrefixSelector}-people`)
              .should('not.empty');
          }
        })
  });
});
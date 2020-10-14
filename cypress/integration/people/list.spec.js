import { loaderPrefixSelector, navTablePrefixSelector, rowTablePrefixSelector } from '../../../src/constants';

describe('Verify if people is rendered', () => {
  it('Check if show loading', () => {

    cy.visit('/people');

    cy.getBySel(`${loaderPrefixSelector}-people-list`);
  });

  it('Check if peoples list is rendered', () => {
      cy.getBySel(`${rowTablePrefixSelector}-people`)
        .then(elements => {
          if(elements.text().includes('Nenhum dado encontrado')){
            cy.getBySel(`${rowTablePrefixSelector}-people`)
              .should('contain.text', 'Nenhum dado encontrado')
          }else{
            cy.getBySel(`${rowTablePrefixSelector}-people`)
              .should('not.empty');
          }
        })
  });

  it('Check people list paginate', () => {
    const verifyNav = () => cy.getBySel(`${navTablePrefixSelector}-people`)
      .should('exist')
      

    verifyNav()
      .should('contain.text', '1');

    cy.hasElement('nav-next', () => {
      verifyNav()
        .findBySel('nav-next')
        .should('exist')
        .findBySel('nav-prev')
        .should('not.exist');

      verifyNav()
        .findBySel('nav-next')
        .click()

      verifyNav()
        .should('contain.text', '2');
      
      verifyNav()
        .findBySel('nav-prev')
        .click();

      verifyNav()
        .should('contain.text', '1');

      verifyNav()
        .findBySel('nav-next')
        .should('exist')
        .findBySel('nav-prev')
        .should('not.exist');
    });
  });
});
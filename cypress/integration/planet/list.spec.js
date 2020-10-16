import { loaderPrefixSelector, navTablePrefixSelector, rowTablePrefixSelector } from '../../../src/constants';

describe('Verify if planet is rendered', () => {
  it('Check if planet list show loading', () => {

    cy.visit('/planet');

    cy.getBySel(`${loaderPrefixSelector}-planet-list`);
  });

  it('Check if planet list is rendered', () => {
    cy.testIfListIsRendered('planet');
  });

  it('Check planet list paginate', () => {
    cy.testIfListPagination('planet')
  });
});
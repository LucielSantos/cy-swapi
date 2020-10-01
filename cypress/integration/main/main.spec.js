describe('Verify if main is rendered', () => {
  it('Check if show image', () => {

    cy.visit('/');

    cy.getBySel('logo-image');
  });
});
describe('Verify if Home is rendered', () => {
  it('Check if show all nav links', () => {

    cy.visit('/');

    cy.getBySel('nav-link')
      .should('contain', 'PERSONAGENS')
      .and('contain', 'PLANETAS')
      .and('contain', 'FILMES')
      .and('contain', 'ESPÉCIES')
      .and('contain', 'VEICULOS')
      .and('contain', 'NAVES ESPACIAIS');
  });
});
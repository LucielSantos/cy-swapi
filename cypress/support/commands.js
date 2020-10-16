// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


import { navTablePrefixSelector, rowTablePrefixSelector, testSelector } from '../../src/constants';

Cypress.Commands.add("getBySel", (selector, ...args) => (
  cy.get(`[${testSelector}=${selector}]`, ...args)
));

Cypress.Commands.add("findBySel", { prevSubject: true }, (subject, selector, ...args) => (
  subject.find(`[${testSelector}=${selector}]`, ...args)
));

Cypress.Commands.add('hasElement', (selector, callbackFc) => {
  cy.get('body').then(body => {
    if (body.find(`[${testSelector}=${selector}]`).length > 0) {
      callbackFc();
    }
  });
});

Cypress.Commands.add('testIfListIsRendered', (suffix) => {
  cy.getBySel(`${rowTablePrefixSelector}-${suffix}`)
    .then(elements => {
      if(elements.text().includes('Nenhum dado encontrado')){
        cy.getBySel(`${rowTablePrefixSelector}-${suffix}`)
          .should('contain.text', 'Nenhum dado encontrado')
      }else{
        cy.getBySel(`${rowTablePrefixSelector}-${suffix}`)
          .should('not.empty');
      }
    })
})

Cypress.Commands.add('testListPagination', (suffix) => {
  const verifyNav = () => cy.getBySel(`${navTablePrefixSelector}-${suffix}`)
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
})
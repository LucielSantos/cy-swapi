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


import { testSelector } from '../../src/constants';

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
})
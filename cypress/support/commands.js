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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('submeterLogin', (Cypress, Python, Css) => {
    cy.visit('https://qaplayground.dev/');
    cy.get('[href="/apps/tags-input-box/"] > .card-content > h3').click();
    cy.get('input').type('Cypress{enter}');
    cy.get('input[type="text"]').type('Python{enter}');
    cy.get('input[type="text"]').type('CSS{enter}');
    cy.get('input[type="text"]').type('HTML{enter}');
    cy.get('input[type="text"]').type('VSCODE{enter}');
    cy.get('input[type="text"]').type('NODE{enter}');
    cy.get('input[type="text"]').type('QA{enter}');
    cy.get('input[type="text"]').type('SOFTWARE{enter}');
    cy.get('input[type="text"]').type('TI{enter}');
    cy.get('input[type="text"]').type('PYGAME{enter}');
    cy.get('ul > :nth-child(10)').should('be.visible');
    cy.get('input[type="text"]').type('pAULO{enter}')
    cy.get('button').contains('Remove All').click();
});

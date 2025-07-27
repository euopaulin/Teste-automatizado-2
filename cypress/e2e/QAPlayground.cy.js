describe('Teste automatizado Epic Games', () => {

  it('Acessar o site', () => {
    cy.visit('https://qaplayground.dev/');
    cy.contains('Verify Your Account').click();

    cy.get('.code-container > :nth-child(1)').type('9');
    cy.get('.code-container > :nth-child(2)').type('9');
    cy.get('.code-container > :nth-child(3)').type('9');
    cy.get('.code-container > :nth-child(4)').type('9');
    cy.get('.code-container > :nth-child(5)').type('9');
    cy.get('.code-container > :nth-child(6)').type('9');

    cy.get('.info').should('be.visible');

    cy.get('.info').click();
  });

  it('Acessar o site novamente', () => {
    cy.visit('https://qaplayground.dev/apps/verify-account/');

    cy.get('.topnav-links > .item').click();

    cy.get('span').contains('QA Playground').should('be.visible');

  });

  it('Entrar no campo de texto de tags', () => {
    cy.visit('https://qaplayground.dev/');
    cy.get('[href="/apps/tags-input-box/"] > .card-content > h3').click();
    cy.get('input[type="text"]').type('Cypress{enter}');
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
    cy.get('input[type="text"]').type('pAULO{enter}');

    cy.get('button').contains('Remove All').click();
  });  

  it('Acessar outra funcionalidade', () => {
    cy.visit('https://qaplayground.dev/#apps');

    cy.contains('Multi Level Dropdown').click();

    cy.get(':nth-child(4) > a.icon-button').click();

    cy.get('[href="#settings"]').click();

  });
});

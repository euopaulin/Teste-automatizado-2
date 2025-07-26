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

});

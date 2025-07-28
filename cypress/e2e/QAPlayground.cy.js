describe('Teste de case automatizado no site QA Playground', () => {
  //Usuário acessa o site
  //Clica no botão Verify Your Account
  //Preenche o campo de verificação com o código 999999
  //Verifica se a mensagem de sucesso é exibida
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

  //Usuário acessa o site novamente
  //Clica no link QA Playground
  //Cypress verifica se o link está visível
  
  it('Acessar o site novamente', () => {
    cy.visit('https://qaplayground.dev/apps/verify-account/');

    cy.get('.topnav-links > .item').click();

    cy.get('span').contains('QA Playground').should('be.visible');

  });

  //Usuário acessa o site novamente
  //Clica no link de Tags Input Box
  //Ele preenche o campo de texto com várias tags e pressiona enter para cada uma
  //Cypress verifica se a última tag inserida está visível
  //Cypress remove todas as tags inseridas
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
    cy.get('input[type="text"]').type('pAULO{enter}')

    cy.get('button').contains('Remove All').click();
  });  


  //Usuário acessa o site novamente
  //Clica no link de Multi Level Dropdown
  //Cypress clica no botão de ícone de configurações
  //Cypress clica no link de configurações
  it('Acessar outra funcionalidade', () => {
    cy.visit('https://qaplayground.dev/#apps');

    cy.contains('Multi Level Dropdown').click();

    cy.get(':nth-child(4) > a.icon-button').click();

    cy.get('[href="#settings"]').click();

  });
});

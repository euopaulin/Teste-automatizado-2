describe('Teste automatizado Epic Games', () => {
  it('Acessar o site', () => {
    cy.visit('https://store.epicgames.com/pt-BR/', {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
  },
  failOnStatusCode: false
});
    cy.get('#nav-flyout-toggle').click();
  });
});

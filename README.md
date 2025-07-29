# 🚧 Casos de testes automatizados QA Playground

Obejtivo dos testes é verificar se o site atende os requisitos de usababilidade e conformidade esperados para uma boa interação do usuário.

## 🛠️ Ferramentas

VScode

Cypress

## 🧪 Case de testes

1 - **Acesso e primeira atividade**

    - Usuário acessa o site
    - Vai até a opção "Verify Your Account"
    - Cypress verifica se a opção acima está visivel
    - Após isso o usuário clica em "Verify Your Account"
    - Será direcionado para outro link
    - Aparecerá uma campo para digitar 6 digitos
    - O usuário tem que conseguir digitar os 6 digitos
    - Após isso deve aparecer uma info de "Sucess"
    - Cypress irá verificar se a mensagem está visivel

2 - **Acesso e segunda atividade**

    - Usuário acessa o site novamente
    - Vai até a opção "Verify Your Account"
    - Cypress verifica se o link está visível

3 - **Acesso e terceira atividade**

    - Usuário acessa o site novamente
    - Clica no link de Tags Input Box
    - Ele preenche o campo de texto com várias tags e pressiona enter para cada uma
    - Cypress verifica se a última tag inserida está visível
    - Cypress remove todas as tags inseridas

4 - **Acesso a quarta atividade**

    - Usuário acessa o site novamente
    - Clica no link de Multi Level Dropdown
    - Cypress clica no botão de ícone de configurações
    - Cypress clica no link de configurações
    - Clica no JavaScript
    - E por fim retorna a página principal
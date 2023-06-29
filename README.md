# Desafio React Native
O objetivo deste desafio é avaliar suas habilidades de desenvolvimento com React
Native ( utilizando o EXPO). O desafio consiste em criar um aplicativo simples que
consuma uma API de listagem de usuários com inteligência e transparência dos dados
para funcionar online/offline com a mesma usabilidade.
O conceito de offline first é muito importante para usabilidade do usuário, então para
cada tela e resultado de busca, cria-se uma base local com os dados buscados
utilizando SQLite, para que quando sem o usuário encontrar sem conexão consiga
visualizar os últimos dados que foram buscados.
Disponibilizamos uma API para o consumo de login e listagem de usuários.
(https://reqres.in/)

1. Fazer o Login na plataforma e salvar o usuário e senha para que na próxima vez
que tentar acessar não precisar buscar novamente na API.
  - POST `/api/login`

2. Realizar busca de usuarios e exibir a listagem:
  - Caso o SQLite já tenha informações a busca deve vir de lá;
  - Caso contrário buscar na api: GET `/api/users`

3. Para cada busca deve ser feito a sincronização na base local(SQLite) para exibir
depois na listagem dos usuários;

5. Cadastrar novos usuários:
  - SQLite
  - API: POST `/api/users`
    
5. Funcionalidades extras (opcional):
  - Adicione uma busca offline por nome;
  - Utilize um Modal do React Navigation como tela de cadastro e envie os dados
do novo usuário para a tela pai sem utilizar parâmetros de navegação. https://reactnavigation.org/docs/modal/

## Requisitos técnicos:
  - TypeScript
  - Utilize componentes funcionais e hooks.
  - Separe o código em componentes reutilizáveis e mantenha um bom padrão de
organização.
  - Utilize boas práticas de desenvolvimento, como tratamento de erros e validação de
dados.
  - O layout e o design do aplicativo não são o foco principal, mas tente criar uma
interface agradável e responsiva.
# Thoughts - Projeto Node.js MVC

## Descrição do Projeto

O projeto Thoughts é uma aplicação web desenvolvida em Node.js, seguindo o padrão de projeto MVC (Model-View-Controller). Ele proporciona uma experiência semelhante a uma rede social, permitindo que os usuários publiquem pensamentos que podem ser visualizados e pesquisados por outros usuários. A aplicação inclui funcionalidades como autenticação de usuários, gerenciamento de pensamentos, e uma dashboard personalizada para cada usuário.

## Funcionalidades

1. **Autenticação de Usuários:**
   - Registro de novos usuários.
   - Login seguro com criptografia de senhas.
   - Logout para encerrar a sessão do usuário.

2. **Gerenciamento de Pensamentos:**
   - Criação, edição e exclusão de pensamentos.
   - Visualização dos pensamentos na dashboard do usuário.
   - Ordenação dos pensamentos por diferentes critérios.
   - Busca de pensamentos com operadores de busca.

3. **Dashboard Personalizada:**
   - Exibição dos pensamentos do usuário logado.
   - Mensagem informativa se a dashboard estiver vazia.
   - Estilização personalizada para uma melhor experiência do usuário.

## Estrutura do Projeto

O projeto segue a estrutura de um modelo MVC para organizar e separar responsabilidades. As principais pastas incluem:

- **models:** Contém os modelos de dados (entidades) como User e Thought, definidos com Sequelize para interação com o banco de dados.
  
- **views:** Armazena as visualizações (templates Handlebars) para renderizar as páginas da aplicação.

- **controllers:** Responsável por controlar o fluxo da lógica de negócios, manipulando requisições e respostas.

- **routes:** Define as rotas da aplicação, conectando URLs às funções dos controllers.

- **public:** Armazena recursos públicos, como arquivos CSS para estilização.

- **db:** Inclui configurações e scripts para interação com o banco de dados.

- **sessions:** Armazena dados de sessão, utilizando session-file-store para persistência.

- **helpers:** Contém ajudantes e middlewares adicionais, como verificação de autenticação.

## Requisitos e Dependências

Para executar o projeto, é necessário ter o Node.js instalado e seguir estas etapas:

1. Execute `npm install` para instalar as dependências.
2. Configure as variáveis de ambiente necessárias, como a conexão com o banco de dados.

## Como Executar o Projeto

1. Execute `npm start` para iniciar o servidor.
2. Acesse a aplicação através do navegador: `http://localhost:3000`.

Aproveite a experiência interativa do Thoughts para compartilhar e explorar pensamentos!

***

# Thoughts - Node.js MVC Project

## Project Description

The Thoughts project is a web application developed in Node.js, following the Model-View-Controller (MVC) design pattern. It provides an experience similar to a social network, allowing users to post thoughts that can be viewed and searched by other users. The application includes features such as user authentication, thought management, and a personalized dashboard for each user.

## Features

1. **User Authentication:**
   - Registration of new users.
   - Secure login with password encryption.
   - Logout to end the user's session.

2. **Thought Management:**
   - Creation, editing, and deletion of thoughts.
   - Visualization of thoughts on the user's dashboard.
   - Sorting thoughts by different criteria.
   - Searching for thoughts using search operators.

3. **Personalized Dashboard:**
   - Display of thoughts from the logged-in user.
   - Informative message if the dashboard is empty.
   - Custom styling for a better user experience.

## Project Structure

The project follows the structure of an MVC model to organize and separate responsibilities. The main folders include:

- **models:** Contains data models (entities) such as User and Thought, defined with Sequelize for interaction with the database.
  
- **views:** Stores views (Handlebars templates) to render application pages.

- **controllers:** Responsible for controlling the flow of business logic, handling requests, and responses.

- **routes:** Defines application routes, connecting URLs to controller functions.

- **public:** Stores public resources, such as CSS files for styling.

- **db:** Includes configurations and scripts for interaction with the database.

- **sessions:** Stores session data, using session-file-store for persistence.

- **helpers:** Contains helpers and additional middlewares, such as authentication verification.

## Requirements and Dependencies

To run the project, Node.js must be installed, and the following steps should be followed:

1. Run `npm install` to install dependencies.
2. Configure necessary environment variables, such as the database connection.

## How to Run the Project

1. Run `npm start` to start the server.
2. Access the application through the browser: `http://localhost:3000`.

Enjoy the interactive experience of Thoughts to share and explore thoughts!

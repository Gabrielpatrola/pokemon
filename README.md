# 👾 Pokemon API

<p align="center">
  <img alt="Develop by" src="https://img.shields.io/badge/Develop%20by-Gabriel%20Patrola-blue?style=flat&logo=Awesome-Lists">
<p>

<h3 align="center">
  <a href="#-sobre">Sobre</a>
  <span> · </span>
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>
  <span> · </span>
  <a href="#-como-usar">Como usar</a>
  <span> · </span>
  <a href="#-material-de-apoio">Material de apoio</a>
</h3>

## 💭 Sobre

Uma pequena API com um CRUD de pokemons e com um endpoint para uma batalha entre dois pokemons.

## 👨‍💻 Tecnologias Utilizadas

- <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener">TypeScript</a>
- <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener">Node.js</a>
- <a href="https://typeorm.io/#/" target="_blank" rel="noopener">TypeORM</a>
- <a href="https://docs.docker.com/" target="_blank" rel="noopener">Docker</a>

## ⁉ Como usar

### 🤔 Pré-requisitos

Para conseguir utilizar a aplicação sem nenhum problema é necessário ter em sua máquina:

- Ter em sua máquina o **<a href="https://www.npmjs.com/" target="_blank" rel="noopener">NPM</a>** ou **<a href="https://yarnpkg.com/" target="_blank" rel="noopener">Yarn</a>** para o gerenciamento dos pacotes da aplicação.
- Ter o **<a href="https://www.docker.com/" target="_blank" rel="noopener">Docker</a>** para facilitar o setup do banco de dados.
- E não menos importante, o **<a href="https://git-scm.com/" target="_blank" rel="noopener">Git</a>** para clonar o repositório em seu computador.

### 📝 Passo a passo

Primeiro clone o repositório em seu computador, por meio do terminal utilizando o comando:

1. Clonando o repositório

```sh
  # Clone o repositório
  $ git clone https://github.com/Gabrielpatrola/pokemon.git
  # Entre na pasta raiz da aplicação
  $ cd pokemon
```

2. Instalar as dependências da aplicação

```sh
  $ yarn # ou npm install
```

3. Configurar as variáveis de ambiente

Crie um arquivo chamado de '.env' copiando as informações existentes no arquivo '.env.example'.

4. Iniciar docker da aplicação, este ja iniciará o postgresql

```sh
  # Comando para iniciar a aplicação em modo de desenvolvimento
  $ docker-compose up -d
```

5. Inicie a aplicação

```sh
  $ yarn dev # ou npm run dev
```

5. Testando a aplicação

```sh
  # Comando para realizar os testes
  $ yarn test # ou npm run test
```

## 📚 Material de apoio

Este projeto inclui uma documentação interativa da API utilizando o Swagger UI, que oferece uma maneira fácil e visual de explorar todos os endpoints disponíveis, bem como realizar chamadas de teste diretamente pelo navegador.

### Usando o Swagger UI

1. **Inicie a Aplicação**: Certifique-se de que a aplicação esteja rodando localmente em sua máquina ou esteja acessível em um ambiente de desenvolvimento remoto, conforme as instruções fornecidas na seção "Como Usar" deste documento.

2. **Acesse o Swagger UI**: entre em `http://localhost:3333/api-docs`.

3. **Explore a Documentação**: Uma vez no Swagger UI, você poderá ver uma lista de todos os endpoints disponíveis, modelos de dados, e realizar chamadas de teste para a API. Cada endpoint listado terá informações detalhadas sobre os métodos HTTP suportados, parâmetros esperados, e os formatos de resposta.

4. **Teste a API**: Para testar um endpoint específico, clique no método desejado para expandir os detalhes. Você poderá fornecer valores para os parâmetros requeridos e então clicar no botão "Try it out!" para fazer uma chamada de teste.

### Online

Caso queira testar online sem ter que clonar o repositório, entre no link:[Pokemon API](https://pokemon-0p2w.onrender.com/api-docs)

---


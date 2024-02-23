import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pokemon API',
      version: '1.0.0',
      description: 'A simple API to manage Pokemons',
    },
    components: {
      schemas: {
        Pokemon: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'O ID único do Pokémon',
            },
            tipo: {
              type: 'string',
              description: 'O tipo do Pokémon',
            },
            treinador: {
              type: 'string',
              description: 'O nome do treinador do Pokémon',
            },
            nivel: {
              type: 'integer',
              description: 'O nível do Pokémon',
              example: 1,
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], 

};

export const specs = swaggerJsDoc(options);
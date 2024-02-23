import request from 'supertest';
import app from '../app'; 

describe('Pokémon API', () => {
  let newPokemonId: number;

  it('POST /pokemons - Deve criar um novo Pokémon', async () => {
    const res = await request(app)
      .post('/pokemons')
      .send({
        tipo: 'pikachu',
        treinador: 'Ash Ketchum'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    newPokemonId = res.body.id;
  });

  it('GET /pokemons - Deve listar todos os Pokémons', async () => {
    const res = await request(app).get('/pokemons');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('GET /pokemons/:id - Deve retornar um Pokémon pelo ID', async () => {
    const res = await request(app).get(`/pokemons/${newPokemonId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', newPokemonId);
  });

  it('PUT /pokemons/:id - Deve atualizar um Pokémon existente', async () => {
    const res = await request(app)
      .put(`/pokemons/${newPokemonId}`)
      .send({
        treinador: 'Misty'
      });
    expect(res.statusCode).toEqual(204);
  });

  it('DELETE /pokemons/:id - Deve deletar um Pokémon', async () => {
    const res = await request(app).delete(`/pokemons/${newPokemonId}`);
    expect(res.statusCode).toEqual(204);
  });
});

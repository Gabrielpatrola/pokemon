import request from 'supertest';
import app from '../app';

describe('Pokemon API', () => {
  let newPokemonId: number;

  it('POST /pokemons - Should create a new Pokemon', async () => {
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

  it('GET /pokemons - Should list all Pokemons', async () => {
    const res = await request(app).get('/pokemons');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('GET /pokemons/:id - Should return a Pokemon by ID', async () => {
    const res = await request(app).get(`/pokemons/${newPokemonId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', newPokemonId);
  });

  it('PUT /pokemons/:id - Should update an existing Pokemon', async () => {
    const res = await request(app)
      .put(`/pokemons/${newPokemonId}`)
      .send({
        treinador: 'Misty'
      });
    expect(res.statusCode).toEqual(204);
  });

  it('DELETE /pokemons/:id - Should delete a Pokemon', async () => {
    const res = await request(app).delete(`/pokemons/${newPokemonId}`);
    expect(res.statusCode).toEqual(204);
  });
});
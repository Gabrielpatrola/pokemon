import request from 'supertest';
import app from '../app';

describe('Battle API', () => {
  let pokemonAId: number;
  let pokemonBId: number;

  beforeAll(async () => {
    let res = await request(app)
      .post('/pokemons')
      .send({ tipo: 'pikachu', treinador: 'Ash' });
    expect(res.statusCode).toEqual(200);
    pokemonAId = res.body.id;

    res = await request(app)
      .post('/pokemons')
      .send({ tipo: 'charizard', treinador: 'Misty' });
    expect(res.statusCode).toEqual(200);
    pokemonBId = res.body.id;
  });

  it('POST /batalhar/:pokemonAId/:pokemonBId - Deve realizar uma batalha', async () => {
    const res = await request(app).post(`/batalhar/${pokemonAId}/${pokemonBId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('vencedor');
    expect(res.body).toHaveProperty('perdedor');
  });
});

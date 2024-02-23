import { Router } from 'express';
import pokemonRouter from './pokemon.routes';
import battleRouter from './battle.routes';

const routes = Router();

routes.use('/', [pokemonRouter, battleRouter]);

export default routes;

import { Router } from 'express';
import { PokemonController } from "../controllers/PokemonController";

const pokemonRouter = Router();
//const pokemonContoller = new PokemonController();

pokemonRouter.post("/pokemons", PokemonController.create);
pokemonRouter.put("/pokemons/:id", PokemonController.update);
pokemonRouter.delete("/pokemons/:id", PokemonController.delete);
pokemonRouter.get("/pokemons/:id", PokemonController.get);
pokemonRouter.get("/pokemons", PokemonController.list);

export default pokemonRouter;
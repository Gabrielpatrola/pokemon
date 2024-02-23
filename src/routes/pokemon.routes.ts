import { Router } from 'express';
import { PokemonController } from "../controllers/PokemonController";

const pokemonRouter = Router();

/**
 * @swagger
 * /pokemons:
 *   post:
 *     summary: Cria um novo Pokémon
 *     tags: [Pokémon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: pikachu
 *               treinador:
 *                 type: string
 *                 example: Ash Ketchum
 *     responses:
 *       200:
 *         description: Pokémon criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       400:
 *         description: Tipo inválido
 */
pokemonRouter.post("/pokemons", PokemonController.create);

/**
 * @swagger
 * /pokemons/{id}:
 *   put:
 *     summary: Atualiza um Pokémon existente pelo ID
 *     tags: [Pokémon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do Pokémon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               treinador:
 *                 type: string
 *                 example: Misty
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Pokémon não encontrado
 */
pokemonRouter.put("/pokemons/:id", PokemonController.update);

/**
 * @swagger
 * /pokemons/{id}:
 *   delete:
 *     summary: Deleta um Pokémon pelo ID
 *     tags: [Pokémon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do Pokémon a ser deletado
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Pokémon não encontrado
 */
pokemonRouter.delete("/pokemons/:id", PokemonController.delete);

/**
 * @swagger
 * /pokemons/{id}:
 *   get:
 *     summary: Retorna um Pokémon pelo ID
 *     tags: [Pokémon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do Pokémon
 *     responses:
 *       200:
 *         description: Pokémon encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       404:
 *         description: Pokémon não encontrado
 */
pokemonRouter.get("/pokemons/:id", PokemonController.get);

/**
 * @swagger
 * /pokemons:
 *   get:
 *     summary: Retorna uma lista de todos os Pokémons
 *     tags: [Pokémon]
 *     responses:
 *       200:
 *         description: Lista de Pokémons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pokemon'
 */
pokemonRouter.get("/pokemons", PokemonController.list);

export default pokemonRouter;
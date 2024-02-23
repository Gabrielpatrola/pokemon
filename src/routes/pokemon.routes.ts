import { Router } from 'express';
import { PokemonController } from "../controllers/PokemonController";

const pokemonRouter = Router();
const pokemonController = new PokemonController();

/**
 * @swagger
 * /pokemons:
 *   post:
 *     summary: Cria um novo Pokemon
 *     tags: [Pokemon]
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
 *         description: Pokemon criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       400:
 *         description: Tipo inválido
 */
pokemonRouter.post('/pokemons', (req, res) => pokemonController.create(req, res));

/**
 * @swagger
 * /pokemons/{id}:
 *   put:
 *     summary: Atualiza um Pokemon existente pelo ID
 *     tags: [Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do Pokemon
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
 *         description: Pokemon não encontrado
 */
pokemonRouter.put('/pokemons/:id', (req, res) => pokemonController.update(req, res));

/**
 * @swagger
 * /pokemons/{id}:
 *   delete:
 *     summary: Deleta um Pokemon pelo ID
 *     tags: [Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do Pokemon a ser deletado
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Pokemon não encontrado
 */
pokemonRouter.delete('/pokemons/:id', (req, res) => pokemonController.delete(req, res));

/**
 * @swagger
 * /pokemons/{id}:
 *   get:
 *     summary: Retorna um Pokemon pelo ID
 *     tags: [Pokemon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do Pokemon
 *     responses:
 *       200:
 *         description: Pokemon encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       404:
 *         description: Pokemon não encontrado
 */
pokemonRouter.get('/pokemons/:id', (req, res) => pokemonController.get(req, res));

/**
 * @swagger
 * /pokemons:
 *   get:
 *     summary: Retorna uma lista de todos os Pokemons
 *     tags: [Pokemon]
 *     responses:
 *       200:
 *         description: Lista de Pokemons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pokemon'
 */
pokemonRouter.get('/pokemons', (req, res) => pokemonController.list(req, res));

export default pokemonRouter;
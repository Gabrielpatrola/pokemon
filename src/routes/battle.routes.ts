import { Router } from 'express';
import { BattleController } from "../controllers/BattleController";

const battleRouter = Router();
const battleController = new BattleController();

/**
 * @swagger
 * /batalhar/{pokemonAId}/{pokemonBId}:
 *   post:
 *     summary: Efetua uma batalha entre dois Pokemons
 *     tags: [Battle]
 *     parameters:
 *       - in: path
 *         name: pokemonAId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Pokemon A
 *       - in: path
 *         name: pokemonBId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Pokemon B
 *     responses:
 *       200:
 *         description: Retorna o resultado da batalha
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 vencedor:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     tipo:
 *                       type: string
 *                     treinador:
 *                       type: string
 *                     nivel:
 *                       type: integer
 *                 perdedor:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     tipo:
 *                       type: string
 *                     treinador:
 *                       type: string
 *                     nivel:
 *                       type: integer
 *       404:
 *         description: Um ou ambos os Pokemons não foram encontrados
 *       500:
 *         description: Erro interno do servidor
 */
battleRouter.post('/batalhar/:pokemonAId/:pokemonBId', (req, res) => battleController.battle(req, res));

export default battleRouter;

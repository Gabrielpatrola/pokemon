import { Router } from 'express';
import { BattleController } from "../controllers/BattleController";

const battleRouter = Router();

/**
 * @swagger
 * /batalhar/{pokemonAId}/{pokemonBId}:
 *   post:
 *     summary: Efetua uma batalha entre dois Pokémons
 *     tags: [Battle]
 *     parameters:
 *       - in: path
 *         name: pokemonAId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Pokémon A
 *       - in: path
 *         name: pokemonBId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do Pokémon B
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
 *         description: Um ou ambos os Pokémons não foram encontrados
 *       500:
 *         description: Erro interno do servidor
 */
battleRouter.post("/batalhar/:pokemonAId/:pokemonBId", BattleController.battle);

export default battleRouter;

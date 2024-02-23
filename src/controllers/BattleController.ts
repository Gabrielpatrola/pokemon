import { Request, Response } from "express";
import { BattleService } from "../services/BattleService";

export class BattleController {
  static async battle(req: Request, res: Response) {
    const { pokemonAId, pokemonBId } = req.params;
    const battleService = new BattleService();

    try {
      const { winner, loser } = await battleService.battle(parseInt(pokemonAId), parseInt(pokemonBId));
      console.log(winner, loser)
      const response = {
        vencedor: { id: winner.id, tipo: winner.tipo, treinador: winner.treinador, nivel: winner.nivel },
        perdedor: loser ? { id: loser.id, tipo: loser.tipo, treinador: loser.treinador, nivel: loser.nivel } : "Perdedor deletado da tabela"
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

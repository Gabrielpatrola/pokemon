import { Request, Response } from "express";
import { BattleService } from "../services/BattleService";

export class BattleController {
  private battleService: BattleService;

  constructor() {
    this.battleService = new BattleService();
  }

  async battle(req: Request, res: Response) {
    const { pokemonAId, pokemonBId } = req.params;

    try {
      const { winner, loser } = await this.battleService.battle(parseInt(pokemonAId), parseInt(pokemonBId));

      const response = {
        vencedor: { id: winner.id, tipo: winner.tipo, treinador: winner.treinador, nivel: winner.nivel },
        perdedor: { id: loser.id, tipo: loser.tipo, treinador: loser.treinador, nivel: loser.nivel }
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

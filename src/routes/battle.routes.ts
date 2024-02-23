import { Router } from 'express';
import { BattleController } from "../controllers/BattleController";

const battleRouter = Router();

battleRouter.post("/batalhar/:pokemonAId/:pokemonBId", BattleController.battle);

export default battleRouter;
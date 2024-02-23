import { Pokemon } from "../entity/Pokemon";
import { AppDataSource } from "../data-source";

export class BattleService {
  private pokemonRepository = AppDataSource.getRepository(Pokemon);

    async battle(pokemonAId: number, pokemonBId: number) {
      const pokemonA = await this.pokemonRepository.findOneBy({ id: pokemonAId });
      const pokemonB = await this.pokemonRepository.findOneBy({ id: pokemonBId });

      if (!pokemonA || !pokemonB) {
        throw new Error("Um ou ambos os Pokémons não foram encontrados.");
    }

      const totalLevel = pokemonA.nivel + pokemonB.nivel;
      const probabilityA = pokemonA.nivel / totalLevel;
      const random = Math.random();

      let winner: Pokemon, loser: Pokemon;

      if (random < probabilityA) {
        winner = pokemonA;
        loser = pokemonB;
      } else {
        winner = pokemonB;
        loser = pokemonA;
      }

      winner.nivel += 1;
      await Pokemon.update(winner.id, { nivel: winner.nivel });

      if (loser.nivel > 1) {
        loser.nivel -= 1;
        await Pokemon.update(loser.id, { nivel: loser.nivel });
      } else {
        loser.nivel = 0;
        await Pokemon.delete(loser.id);
      }

        return { winner, loser };
    }
}

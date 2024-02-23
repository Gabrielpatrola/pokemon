import { Pokemon } from "../entity/Pokemon";
import { AppDataSource } from "../data-source";

export class BattleService {
  private pokemonRepository = AppDataSource.getRepository(Pokemon);

  async battle(pokemonAId: number, pokemonBId: number) {
    const pokemonA = await this.pokemonRepository.findOneBy({ id: pokemonAId });
    const pokemonB = await this.pokemonRepository.findOneBy({ id: pokemonBId });

    if (!pokemonA || !pokemonB) {
      throw new Error("Um ou ambos os Pokemons não foram encontrados.");
    }

    const { winner, loser } = this.probabilityCalculation(pokemonA, pokemonB);

    winner.nivel += 1;
    await Pokemon.update(winner.id, { nivel: winner.nivel });

    if (loser.nivel > 1) {
      loser.nivel -= 1;
      await Pokemon.update(loser.id, { nivel: loser.nivel });
    } else {
      loser.nivel = 0
      await Pokemon.delete(loser.id);
    }

    return { winner, loser };
  }


  probabilityCalculation(pokemonA: Pokemon, pokemonB: Pokemon) {
    const [higherLevelPokemon, lowerLevelPokemon] = pokemonA.nivel > pokemonB.nivel ? [pokemonA, pokemonB] : [pokemonB, pokemonA];

    const baseProbability = higherLevelPokemon.nivel / (higherLevelPokemon.nivel + lowerLevelPokemon.nivel);

    const random = Math.random();

    if (random < baseProbability) {
      return { winner: higherLevelPokemon, loser: lowerLevelPokemon };
    }

    return { winner: lowerLevelPokemon, loser: higherLevelPokemon };
  }

}

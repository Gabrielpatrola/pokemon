import { Pokemon } from "../entity/Pokemon";
import { AppDataSource } from "../data-source";

export class PokemonService {
  private static pokemonRepository = AppDataSource.getRepository(Pokemon);

  static async create(tipo: string, treinador: string): Promise<Pokemon> {
    if (!["charizard", "mewtwo", "pikachu"].includes(tipo)) {
      throw new Error("Tipo inválido");
    }

    const pokemon = this.pokemonRepository.create({ tipo, treinador, nivel: 1 });
    await this.pokemonRepository.save(pokemon);
    return pokemon;
  }

  static async update(id: number, treinador: string): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOneBy({ id });
    if (!pokemon) {
      throw new Error("Pokemon não encontrado");
    }

    pokemon.treinador = treinador;
    await this.pokemonRepository.save(pokemon);
    return pokemon;
  }
  static async delete(id: number): Promise<void> {
    const result = await this.pokemonRepository.delete(id);
    if (result.affected === 0) {
      throw new Error("Pokemon não encontrado para deletar");
    }
  }

  static async get(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOneBy({ id });
    if (!pokemon) {
      throw new Error("Pokemon não encontrado");
    }

    return pokemon;
  }

  static async list(): Promise<Pokemon[]> {
    return await this.pokemonRepository.find();
  }
}

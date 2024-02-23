import { PokemonService } from "./PokemonService";

jest.mock("../data-source", () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      create: jest.fn().mockImplementation((pokemon) => Promise.resolve({ ...pokemon, id: Math.floor(Math.random() * 1000) })),
      save: jest.fn().mockImplementation((pokemon) => Promise.resolve({ ...pokemon, id: Math.floor(Math.random() * 1000) })),
      findOneBy: jest.fn().mockImplementation(({ id }) =>
        id === 1 ? Promise.resolve({ id: 1, tipo: "pikachu", treinador: "Ash", nivel: 5 }) : null
      ),
      delete: jest.fn().mockImplementation((id) =>
        id === 1 ? Promise.resolve({ affected: 1 }) : Promise.reject(new Error("Pokemon não encontrado para deletar"))
      ),
      find: jest.fn().mockResolvedValue([
        { id: 1, tipo: "pikachu", treinador: "Ash", nivel: 5 },
        { id: 2, tipo: "charizard", treinador: "Misty", nivel: 4 }
      ])
    })
  }
}));

describe("PokemonService", () => {
  let pokemonService: PokemonService;

  beforeEach(() => {
    pokemonService = new PokemonService();
  });

  it("Create should successfully create a Pokemon", async () => {
    const pokemon = await pokemonService.create("pikachu", "Ash");
    expect(pokemon).toHaveProperty("tipo", "pikachu");
    expect(pokemon).toHaveProperty("treinador", "Ash");
    expect(pokemon).toHaveProperty("id");
  });

  it("Create should throw an error for invalid type", async () => {
    await expect(pokemonService.create("invalid", "Ash")).rejects.toThrow("Tipo inválido");
  });

  it("Update should successfully update a Pokemon's trainer", async () => {
    const updatedPokemon = await pokemonService.update(1, "Brock");
    expect(updatedPokemon).toHaveProperty("treinador", "Brock");
  });

  it("Update should throw an error if the Pokemon is not found", async () => {
    await expect(pokemonService.update(999, "Brock")).rejects.toThrow("Pokemon não encontrado");
  });

  it("Delete should remove a Pokemon", async () => {
    await expect(pokemonService.delete(1)).resolves.not.toThrow();
  });

  it("Delete should throw an error if the Pokemon is not found", async () => {
    await expect(pokemonService.delete(999)).rejects.toThrow("Pokemon não encontrado para deletar");
  });

  it("Get should retrieve a Pokemon by id", async () => {
    const pokemon = await pokemonService.get(1);
    expect(pokemon).toHaveProperty("id", 1);
  });

  it("Get should throw an error if the Pokemon is not found", async () => {
    await expect(pokemonService.get(999)).rejects.toThrow("Pokemon não encontrado");
  });

  it("List should return all Pokemons", async () => {
    const pokemons = await pokemonService.list();
    expect(pokemons.length).toBeGreaterThan(0);
  });
});

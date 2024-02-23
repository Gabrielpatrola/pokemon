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

  it("create deve criar um Pokemon com sucesso", async () => {
    const pokemon = await pokemonService.create("pikachu", "Ash");
    expect(pokemon).toHaveProperty("tipo", "pikachu");
    expect(pokemon).toHaveProperty("treinador", "Ash");
    expect(pokemon).toHaveProperty("id");
  });

  it("create deve lançar um erro para tipo inválido", async () => {
    await expect(pokemonService.create("invalido", "Ash")).rejects.toThrow("Tipo inválido");
  });

  it("update deve atualizar o treinador de um Pokemon com sucesso", async () => {
    const updatedPokemon = await pokemonService.update(1, "Brock");
    expect(updatedPokemon).toHaveProperty("treinador", "Brock");
  });

  it("update deve lançar um erro se o Pokemon não for encontrado", async () => {
    await expect(pokemonService.update(999, "Brock")).rejects.toThrow("Pokemon não encontrado");
  });

  it("delete deve remover um Pokemon", async () => {
    await expect(pokemonService.delete(1)).resolves.not.toThrow();
  });

  it("delete deve lançar um erro se o Pokemon não for encontrado", async () => {
    await expect(pokemonService.delete(999)).rejects.toThrow("Pokemon não encontrado para deletar");
  });

  it("get deve recuperar um Pokemon pelo id", async () => {
    const pokemon = await pokemonService.get(1);
    expect(pokemon).toHaveProperty("id", 1);
  });

  it("get deve lançar um erro se o Pokemon não for encontrado", async () => {
    await expect(pokemonService.get(999)).rejects.toThrow("Pokemon não encontrado");
  });

  it("list deve retornar todos os Pokemons", async () => {
    const pokemons = await pokemonService.list();
    expect(pokemons.length).toBeGreaterThan(0);
  });
});

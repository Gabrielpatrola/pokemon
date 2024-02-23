import { BattleService } from "../services/BattleService";

jest.mock("../data-source", () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      findOneBy: jest.fn().mockImplementation(({ id }) => {
        if (id === 1) {
          return Promise.resolve({ id: 1, tipo: "pikachu", treinador: "Ash", nivel: 100 });
        } else if (id === 2) {
          return Promise.resolve({ id: 2, tipo: "charizard", treinador: "Misty", nivel: 2 });
        }
      }),
      update: jest.fn().mockImplementation((pokemon) => Promise.resolve(pokemon)),
      delete: jest.fn().mockImplementation((id) =>
        id === 1 ? Promise.resolve({ affected: 1 }) : Promise.reject(new Error("Pokemon não encontrado para deletar"))
      )
    })
  }
}));

describe("BattleService", () => {
  let battleService: BattleService;

  beforeEach(() => {
    battleService = new BattleService();
  });

  it("Should correctly determine the winner and loser when both Pokemons are found", async () => {
    const { winner, loser } = await battleService.battle(1, 2);

    expect(winner.id).toBe(1);
    expect(loser.id).toBe(2);
    expect(winner.nivel).toBe(101);
    expect(loser.nivel).toBe(1);
  });

  it("Should throw an error if one of the Pokemons is not found", async () => {
    await expect(battleService.battle(1, 999)).rejects.toThrow("Um ou ambos os Pokemons não foram encontrados.");
    await expect(battleService.battle(999, 2)).rejects.toThrow("Um ou ambos os Pokemons não foram encontrados.");
  });

  it("Should throw an error if neither of the Pokemons are found", async () => {
    await expect(battleService.battle(999, 998)).rejects.toThrow("Um ou ambos os Pokemons não foram encontrados.");
  });
});

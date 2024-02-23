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

  it("deve determinar corretamente o vencedor e o perdedor quando ambos os Pokemons são encontrados", async () => {
    const { winner, loser } = await battleService.battle(1, 2);

    expect(winner.id).toBe(1);
    expect(loser.id).toBe(2);
    expect(winner.nivel).toBe(101);
    expect(loser.nivel).toBe(1);
  });

  it("deve lançar um erro se um dos Pokemons não for encontrado", async () => {
    await expect(battleService.battle(1, 999)).rejects.toThrow("Um ou ambos os Pokemons não foram encontrados.");
    await expect(battleService.battle(999, 2)).rejects.toThrow("Um ou ambos os Pokemons não foram encontrados.");
  });

  it("deve lançar um erro se nenhum dos Pokemons for encontrado", async () => {
    await expect(battleService.battle(999, 998)).rejects.toThrow("Um ou ambos os Pokemons não foram encontrados.");
  });
});

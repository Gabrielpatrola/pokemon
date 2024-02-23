import { Request, Response } from "express";
import { PokemonService } from "../services/PokemonService";

export class PokemonController {
  private pokemonService: PokemonService;

  constructor() {
    this.pokemonService = new PokemonService();
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { tipo, treinador } = req.body;

    try {
      const pokemon = await this.pokemonService.create(tipo, treinador);
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { treinador } = req.body;

    try {
      await this.pokemonService.update(Number(id), treinador);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.pokemonService.delete(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async get(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const pokemon = await this.pokemonService.get(Number(id));
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async list(req: Request, res: Response): Promise<Response> {
    try {
      const pokemons = await this.pokemonService.list();
      return res.status(200).json(pokemons);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

}
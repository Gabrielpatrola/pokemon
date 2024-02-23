import { Request, Response } from "express";
import { PokemonService } from "../services/PokemonService";

export class PokemonController {
  static async create(req: Request, res: Response): Promise<Response> {
    const { tipo, treinador } = req.body;

    try {
      const pokemon = await PokemonService.create(tipo, treinador);
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { treinador } = req.body;

    try {
      await PokemonService.update(Number(id), treinador);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

 static async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await PokemonService.delete(Number(id));
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async get(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const pokemon = await PokemonService.get(Number(id));
      return res.status(200).json(pokemon);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async list(req: Request, res: Response): Promise<Response> {
    try {
      const pokemons = await PokemonService.list();
      return res.status(200).json(pokemons);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

}
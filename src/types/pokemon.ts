import { IPokemon } from "./pokeapi";

export interface IPokemonSecondaryCard extends Pick<IPokemon, "id" | "name" | "sprites"> {}

import { IPokemon } from "./pokeapi";

export interface IPokemonPrimaryCard extends Pick<IPokemon, "id" | "name"> {
    sprites: {
        front: string;
    };
}

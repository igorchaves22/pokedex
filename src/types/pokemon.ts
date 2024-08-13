import { IPokemon } from "./pokeapi";

export interface IPokemonPrimaryCard extends Pick<IPokemon, "id" | "name"> {
    sprites: {
        front: string;
    };
}
export interface IPokemonSecondaryCard extends Pick<IPokemon, "id" | "order" | "name"> {
    sprites: {
        front: string;
    };
    color: string;
}
export interface ICatalog {
    isLoading: boolean;
    isError: boolean;
    search: string | null;
    filter: string | null;
    data: {
        offsite: number;
        count: number;
        list: IPokemonSecondaryCard[];
    };
}

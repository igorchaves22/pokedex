import { IPokemon } from "./pokeapi";

export type iconsType = {
    [key: string]: string;
};

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
export interface IPokemonTertiaryCard extends Pick<IPokemon, "name"> {
    sprites: {
        front: string;
    };
}
export interface IDetails extends Pick<IPokemon, "id" | "order" | "name"> {
    nameJa: string;
    description: string;
    sprites: {
        front: string;
    };
    types: {
        name: string;
    }[];
    abilities: string;
    evolutionChain: IPokemonSecondaryCard[];
    allVarieties: IPokemonSecondaryCard[];
    allVersions: {
        generation: string;
        versions: {
            name: string;
            pokemon: {
                sprites: {
                    front: string;
                };
            };
        }[];
    }[];
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

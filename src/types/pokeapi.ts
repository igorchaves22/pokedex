export interface IPokeApi {
    count: number;
    results: {
        name: string;
    }[];
    pokemon: {
        pokemon: {
            name: string;
        };
    }[];
    pokemon_entries: {
        pokemon_species: {
            url: string;
        };
    }[];
    pokemon_species: {
        url: string;
    }[];
}
export interface IPokemon {
    id: number;
    order: number;
    name: string;
    sprites: {
        front_default: string;
        other: {
            showdown: {
                front_default: string;
            };
        };
    };
    species: {
        url: string;
    };
}
export interface ISpecies {
    color: {
        name: string;
    };
}

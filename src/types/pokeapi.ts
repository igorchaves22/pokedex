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
            name: string;
        };
    }[];
    pokemon_species: {
        name: string;
    }[];
    chain: {
        evolves_to: IPokeApi["chain"][];
        species: {
            name: string;
        };
    };
    varieties: {
        pokemon: {
            name: string;
        };
    }[];
}
export interface IPokemon {
    id: number;
    order: number;
    name: string;
    sprites: {
        front_default: string;
        other: {
            "official-artwork": {
                front_default: string;
            };
            showdown: {
                front_default: string;
            };
        };
        versions: {
            [generationName: string]: {
                [versionName: string]: {
                    front_default: string;
                };
            };
        };
    };
    species: {
        url: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
        };
    }[];
}
export interface ISpecies {
    color: {
        name: string;
    };
    names: {
        language: {
            name: string;
        };
        name: string;
    }[];
    flavor_text_entries: {
        flavor_text: string;
    }[];
    evolution_chain: {
        url: string;
    };
    varieties: {
        pokemon: {
            name: string;
        };
    }[];
}

export interface IPokemon {
    id: number;
    order: number;
    name: string;
    sprites: {
        other: {
            showdown: {
                front_default: string;
            };
        };
    };
}
export interface IPokeApi {
    count: number;
    results: {
        name: string;
    }[];
}

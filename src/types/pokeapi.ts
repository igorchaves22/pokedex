export interface IPokeApi {
    count: number;
    results: {
        name: string;
    }[];
}
export interface IPokemon {
    id: number;
    name: string;
    sprites: {
        other: {
            showdown: {
                front_default: string;
            };
        };
    };
}

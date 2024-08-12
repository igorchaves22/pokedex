import { IPokemon, IPokemonPrimaryCard } from "~types";

export const formatPokemonPrimaryCard = ({ id, name, sprites }: IPokemon): IPokemonPrimaryCard => {
    return {
        id,
        name,
        sprites: {
            front: sprites.other.showdown.front_default
        }
    };
};

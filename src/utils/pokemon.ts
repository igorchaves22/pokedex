import { IPokemon, IPokemonPrimaryCard, IPokemonSecondaryCard, ISpecies } from "~types";

export const formatPokemonPrimaryCard = ({ id, name, sprites }: IPokemon): IPokemonPrimaryCard => {
    return {
        id,
        name,
        sprites: {
            front: sprites.other.showdown.front_default
        }
    };
};

export const formatPokemonSecondaryCard = ({
    id,
    order,
    name,
    sprites,
    color
}: IPokemon & ISpecies): IPokemonSecondaryCard => {
    return {
        id,
        order,
        name,
        sprites: {
            front: sprites.front_default
        },
        color: color.name
    };
};

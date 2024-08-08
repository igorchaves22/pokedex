import { getPokemon } from "~services";
import { IPokemon } from "~types";
import { getRandomNumber } from "./global";

export const gerRandomPokemon = async (id: number): Promise<IPokemon> => {
    try {
        const pokemon = await getPokemon(id);

        return pokemon;
    } catch {
        const newId = getRandomNumber();
        const newPokemon = await gerRandomPokemon(newId);

        return newPokemon;
    }
};

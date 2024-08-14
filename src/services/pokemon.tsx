import { IPokeApi, IPokemonPrimaryCard, IPokemonSecondaryCard } from "~types";
import {
    formatPokemonDetails,
    formatPokemonPrimaryCard,
    formatPokemonSecondaryCard,
    getIdFromUrl,
    getRandomNumber
} from "~utils";
import { api } from "./api";
import { getEvolutionChain, getPokemonDataFromApi, getSpeciesDataFromApi } from "./pokeapi";

const MAX_NUMBER_POKÉMON_IN_RANDOM_LIST = 12;

export async function getPokemonSecondaryCard(nameOrId: string | number) {
    const pokemonData = await getPokemonDataFromApi(nameOrId);
    const speciesId = getIdFromUrl(pokemonData.species.url);
    const speciesData = await getSpeciesDataFromApi(speciesId);
    const data = formatPokemonSecondaryCard({
        ...pokemonData,
        ...speciesData
    });

    return data;
}

export const getRandomPokemon = async (id: number): Promise<IPokemonPrimaryCard> => {
    try {
        const data = await getPokemonDataFromApi(id);

        return formatPokemonPrimaryCard(data);
    } catch {
        const newId = getRandomNumber();
        const newPokemon = await getRandomPokemon(newId);

        return newPokemon;
    }
};

export async function getRandomPokemonList() {
    const list = Array.from({ length: MAX_NUMBER_POKÉMON_IN_RANDOM_LIST }, () => {
        const id = getRandomNumber();

        return getRandomPokemon(id);
    });
    const data = await Promise.all(list);

    return data;
}

export async function getPokemonListByType(filterSelected: string) {
    const endpoint = `type/${filterSelected}`;
    const { pokemon } = await api.get<Pick<IPokeApi, "pokemon">>(endpoint).then(({ data }) => data);
    const list = pokemon.map(async ({ pokemon: { name } }) => {
        const data = getPokemonSecondaryCard(name);

        return data;
    });
    const data = await Promise.all(list);

    return data;
}

export async function getPokemonListByPokedex(filterSelected: string) {
    const endpoint = `pokedex/${filterSelected}`;
    const { pokemon_entries } = await api.get<Pick<IPokeApi, "pokemon_entries">>(endpoint).then(({ data }) => data);
    const list = pokemon_entries.map(async ({ pokemon_species: { name } }) => {
        const data = getPokemonSecondaryCard(name);

        return data;
    });
    const data = await Promise.all(list);

    return data;
}

export async function getPokemonListByGeneration(filterSelected: string) {
    const endpoint = `generation/${filterSelected}`;
    const { pokemon_species } = await api.get<Pick<IPokeApi, "pokemon_species">>(endpoint).then(({ data }) => data);
    const list = pokemon_species.map(async ({ name }) => {
        const data = getPokemonSecondaryCard(name);

        return data;
    });
    const data = await Promise.all(list);

    return data;
}

export async function getPokemonList(offset: number, limit: number) {
    const endpoint = `pokemon/?offset=${offset}&limit=${limit}`;
    const { count, results } = await api.get<Pick<IPokeApi, "count" | "results">>(endpoint).then(({ data }) => data);
    const list = results.map(async ({ name }) => {
        const data = getPokemonSecondaryCard(name);

        return data;
    });
    const data = {
        count,
        list: await Promise.all(list)
    };

    return data;
}

export async function getDetails(name: string) {
    const pokemonData = await getPokemonDataFromApi(name);
    const speciesId = getIdFromUrl(pokemonData.species.url);
    const speciesData = await getSpeciesDataFromApi(speciesId);
    const evolutionChainData = async () => {
        const chain = await getEvolutionChain(speciesData.evolution_chain.url);
        const getChain = async ({ evolves_to, species }: IPokeApi["chain"]) => {
            const current = await getPokemonSecondaryCard(species.name);
            const next: IPokemonSecondaryCard[][] = await Promise.all(
                evolves_to.map((nextChain) => getChain(nextChain))
            );

            return [current, ...next.flat()];
        };
        const chainData = await getChain(chain);

        return chainData;
    };
    const varietiesData = speciesData.varieties.map(async ({ pokemon: { name } }) => {
        const pokemonData = await getPokemonDataFromApi(name);
        const speciesId = getIdFromUrl(pokemonData.species.url);
        const speciesData = await getSpeciesDataFromApi(speciesId);
        const data = formatPokemonSecondaryCard({
            id: pokemonData.id,
            color: speciesData.color,
            sprites: pokemonData.sprites,
            name: pokemonData.name,
            order: pokemonData.order
        });

        return data;
    });
    const data = formatPokemonDetails({
        ...pokemonData,
        ...speciesData,
        id: pokemonData.id,
        color: speciesData.color,
        sprites: pokemonData.sprites,
        name: pokemonData.name,
        evolutionChain: await evolutionChainData(),
        allVarieties: await Promise.all(varietiesData)
    });

    return data;
}

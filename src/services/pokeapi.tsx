import { IPokeApi, IPokemon, IPokemonPrimaryCard, ISpecies } from "~types";
import { formatPokemonPrimaryCard, formatPokemonSecondaryCard, getIdFromUrl, getRandomNumber } from "~utils";
import { api } from "./api";

const MAX_NUMBER_POKÉMON_IN_RANDOM_LIST = 12;

export async function getPokemonDataFromApi(id: string | number) {
    const endpoint = `pokemon/${id}`;
    const { data } = await api.get<IPokemon>(endpoint);

    return data;
}

export async function getSpeciesDataFromApi(id: string | number) {
    const endpoint = `pokemon-species/${id}`;
    const { data } = await api.get<ISpecies>(endpoint);

    return data;
}

export async function getFilterDataFromApi(url: string) {
    const endpoint = `${url}/?limit=1000&offset=0`;
    const { results } = await api.get<Pick<IPokeApi, "results">>(endpoint).then(({ data }) => data);

    return results;
}

export async function getRandomPokemonList() {
    const getRandomPokemon = async (id: number): Promise<IPokemonPrimaryCard> => {
        try {
            const data = await getPokemonDataFromApi(id);

            return formatPokemonPrimaryCard(data);
        } catch {
            const newId = getRandomNumber();
            const newPokemon = await getRandomPokemon(newId);

            return newPokemon;
        }
    };
    const promises = Array.from({ length: MAX_NUMBER_POKÉMON_IN_RANDOM_LIST }, () => {
        const id = getRandomNumber();

        return getRandomPokemon(id);
    });
    const resolvePromise = await Promise.all(promises);

    return resolvePromise;
}

export async function getPokemonListByType(filterSelected: string) {
    const endpoint = `type/${filterSelected}`;
    const { pokemon } = await api.get<Pick<IPokeApi, "pokemon">>(endpoint).then(({ data }) => data);
    const promises = pokemon.map(async ({ pokemon: { name } }) => {
        const pokemon = await getPokemonDataFromApi(name);
        const speciesId = getIdFromUrl(pokemon.species.url);
        const { color } = await getSpeciesDataFromApi(speciesId);
        const data = formatPokemonSecondaryCard({
            ...pokemon,
            color
        });

        return data;
    });
    const resolvePromise = await Promise.all(promises);

    return resolvePromise;
}

export async function getPokemonListByPokedex(filterSelected: string) {
    const endpoint = `pokedex/${filterSelected}`;
    const { pokemon_entries } = await api.get<Pick<IPokeApi, "pokemon_entries">>(endpoint).then(({ data }) => data);
    const promises = pokemon_entries.map(async ({ pokemon_species: { url } }) => {
        const pokemonId = getIdFromUrl(url);
        const pokemon = await getPokemonDataFromApi(pokemonId);
        const speciesId = getIdFromUrl(pokemon.species.url);
        const { color } = await getSpeciesDataFromApi(speciesId);
        const data = formatPokemonSecondaryCard({
            ...pokemon,
            color
        });

        return data;
    });
    const resolvePromise = await Promise.all(promises);

    return resolvePromise;
}

export async function getPokemonListByGeneration(filterSelected: string) {
    const endpoint = `pokedex/${filterSelected}`;
    const { pokemon_species } = await api.get<Pick<IPokeApi, "pokemon_species">>(endpoint).then(({ data }) => data);
    const promises = pokemon_species.map(async ({ url }) => {
        const pokemonId = getIdFromUrl(url);
        const pokemon = await getPokemonDataFromApi(pokemonId);
        const speciesId = getIdFromUrl(pokemon.species.url);
        const { color } = await getSpeciesDataFromApi(speciesId);
        const data = formatPokemonSecondaryCard({
            ...pokemon,
            color
        });

        return data;
    });
    const resolvePromise = await Promise.all(promises);

    return resolvePromise;
}

export async function getPokemonList(offset: number, limit: number) {
    const endpoint = `pokemon/?offset=${offset}&limit=${limit}`;
    const { count, results } = await api.get<Pick<IPokeApi, "count" | "results">>(endpoint).then(({ data }) => data);
    const promises = results.map(async ({ name }) => {
        const pokemon = await getPokemonDataFromApi(name);
        const speciesId = getIdFromUrl(pokemon.species.url);
        const { color } = await getSpeciesDataFromApi(speciesId);
        const data = formatPokemonSecondaryCard({
            ...pokemon,
            color
        });

        return data;
    });
    const resolvePromise = await Promise.all(promises);
    const data = {
        count,
        list: resolvePromise
    };

    return data;
}

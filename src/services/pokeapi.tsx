import { IPokeApi, IPokemon, ISpecies } from "~types";
import { getIdFromUrl } from "~utils";
import { api } from "./api";

export async function getFilterDataFromApi(url: string) {
    const endpoint = `${url}/?limit=1000&offset=0`;
    const { results } = await api.get<Pick<IPokeApi, "results">>(endpoint).then(({ data }) => data);

    return results;
}

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

export async function getEvolutionChain(url: string) {
    const evolutionChainId = getIdFromUrl(url);
    const endpoint = `evolution-chain/${evolutionChainId}`;
    const { chain: data } = await api.get<Pick<IPokeApi, "chain">>(endpoint).then(({ data }) => data);

    return data;
}

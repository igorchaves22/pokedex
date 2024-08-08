import { IPokemon } from "~types";
import { api } from "./api";

export async function getPokemon(id: string | number) {
    const endpoint = `pokemon/${id}`;
    const { data } = await api.get<IPokemon>(endpoint);

    return data;
}

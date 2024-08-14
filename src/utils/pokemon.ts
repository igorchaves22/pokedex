import bugIcon from "~assets/icon/bug.svg";
import darkIcon from "~assets/icon/dark.svg";
import dragonIcon from "~assets/icon/dragon.svg";
import electricIcon from "~assets/icon/electric.svg";
import fairyIcon from "~assets/icon/fairy.svg";
import fightingIcon from "~assets/icon/fighting.svg";
import fireIcon from "~assets/icon/fire.svg";
import flyingIcon from "~assets/icon/flying.svg";
import ghostIcon from "~assets/icon/ghost.svg";
import grassIcon from "~assets/icon/grass.svg";
import groundIcon from "~assets/icon/ground.svg";
import iceIcon from "~assets/icon/ice.svg";
import normalIcon from "~assets/icon/normal.svg";
import poisonIcon from "~assets/icon/poison.svg";
import psychicIcon from "~assets/icon/psychic.svg";
import rockIcon from "~assets/icon/rock.svg";
import waterIcon from "~assets/icon/water.svg";
import { iconsType, IDetails, IPokemon, IPokemonPrimaryCard, IPokemonSecondaryCard, ISpecies } from "~types";
import { replaceHyphensWithSpaces } from "./global";

export const pokemonIconsType: iconsType = {
    bug: bugIcon,
    dragon: dragonIcon,
    dark: darkIcon,
    electric: electricIcon,
    fairy: fairyIcon,
    fighting: fightingIcon,
    fire: fireIcon,
    flying: flyingIcon,
    ghost: ghostIcon,
    grass: grassIcon,
    ground: groundIcon,
    ice: iceIcon,
    normal: normalIcon,
    poison: poisonIcon,
    psychic: psychicIcon,
    rock: rockIcon,
    water: waterIcon
};

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
}: Pick<IPokemon, "id" | "order" | "name" | "sprites"> & Pick<ISpecies, "color">): IPokemonSecondaryCard => {
    return {
        id,
        order,
        name,
        color: color.name,
        sprites: {
            front: sprites.front_default
        }
    };
};

export const formatPokemonDetails = ({
    id,
    order,
    name,
    sprites,
    names,
    types,
    flavor_text_entries,
    abilities,
    evolutionChain,
    allVarieties
}: IPokemon &
    ISpecies & { evolutionChain: IPokemonSecondaryCard[]; allVarieties: IPokemonSecondaryCard[] }): IDetails => {
    return {
        id,
        order,
        name,
        nameJa: names?.find((nameEntry) => nameEntry.language.name === "ja")?.name ?? "",
        sprites: {
            front: sprites.other["official-artwork"].front_default
        },
        types: types.map(({ type: { name } }) => ({ name })),
        description: flavor_text_entries[0].flavor_text,
        abilities: abilities.map(({ ability: { name } }) => replaceHyphensWithSpaces(name)).join(", "),
        evolutionChain,
        allVarieties,
        allVersions: Object.entries(sprites.versions).map(([generationName, versionsData]) => {
            const versions = Object.entries(versionsData).map(([versionName, { front_default }]) => ({
                name: versionName,
                pokemon: {
                    sprites: {
                        front: front_default
                    }
                }
            }));

            return {
                generation: generationName,
                versions
            };
        })
    };
};

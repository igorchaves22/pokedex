import * as PhosphorIconReact from "@phosphor-icons/react";
import { ReactElement } from "react";
import { FilterType, PhosphorIconType } from "~types";

export const PhosphorIcon = PhosphorIconReact;

export const renderElement = (condition: boolean, element: ReactElement) => {
    if (!condition) {
        return null;
    }

    return element;
};

export const getRandomNumber = () => {
    const min = 1;
    const max = 2000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const catalogFilters: { name: FilterType }[] = [{ name: "type" }, { name: "pokedex" }, { name: "generation" }];

export const getIdFromUrl = (url: string) => {
    const fetchId = /\/(\d+)\/$/;
    const match = url.match(fetchId);
    const id = Number(match![1]);

    return id;
};

export const replaceHyphensWithSpaces = (value: string) => {
    const replace = value.replace(/-/g, " ");

    return replace;
};

export const myLinks: {
    url: string;
    icon: PhosphorIconType;
    title: string;
}[] = [
    {
        url: "mailto:contato.igorgabriel@hotmail.com",
        icon: "EnvelopeSimple",
        title: "Email"
    },
    {
        url: "https://www.linkedin.com/in/igorchaves22",
        icon: "LinkedinLogo",
        title: "LinkedIn"
    },
    {
        url: "https://github.com/igorchaves22",
        icon: "GithubLogo",
        title: "GitHub"
    }
];

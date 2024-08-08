import * as PhosphorIconReact from "@phosphor-icons/react";

export const PhosphorIcon = PhosphorIconReact;

export const getRandomNumber = () => {
    const min = 1;
    const max = 2000;

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

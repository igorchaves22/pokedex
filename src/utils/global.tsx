import * as PhosphorIconReact from "@phosphor-icons/react";
import { ReactElement } from "react";

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

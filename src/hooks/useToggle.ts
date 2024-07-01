import { useState } from "react";
import { FunctionType } from "~types";

interface IUseToggle<T> {
    initialState: T;
    alternativeState: T;
    callback?: FunctionType<T, void>;
}

export const useToggle = <T>({ initialState, alternativeState, callback }: IUseToggle<T>) => {
    const [stateValue, setStateValue] = useState<T>(initialState);

    const handleStateValue = (applyState?: T) => {
        const newState =
            applyState !== undefined ? applyState : stateValue === initialState ? alternativeState : initialState;

        setStateValue(newState);
        callback && callback(newState);
    };

    return { stateValue, handleStateValue };
};

import { useState } from "react";
import { FunctionType } from "~types";

interface IUseToggle<T> {
    initialState: T;
    alternativeState: T;
    callback?: FunctionType<T, void>;
}

export const useToggle = <T>({ initialState, alternativeState, callback }: IUseToggle<T>) => {
    const [state, setState] = useState<T>(initialState);

    const handleValue = (applyState?: T) => {
        const newState = applyState ?? (state === initialState ? alternativeState : initialState);

        if (callback) {
            callback(newState);
        }

        setState(newState);
    };

    return { state, handleValue };
};

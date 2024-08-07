import { useState, useEffect } from "react";

interface IUseLocalStorage<T> {
    key: string;
    initialValue: T;
}

const STORAGE_VALUE_INITIAL_VALUE = <T>(key: string, initialValue: T): T => {
    const item = localStorage.getItem(key);

    if (item) {
        return JSON.parse(item) as T;
    }

    return initialValue;
};

export const useLocalStorage = <T>({ key, initialValue }: IUseLocalStorage<T>) => {
    const [storedValue, setStoredValue] = useState<T>(STORAGE_VALUE_INITIAL_VALUE(key, initialValue));

    const handleStoredValue = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return { storedValue, handleStoredValue };
};

import { useEffect, useState } from "react";

interface IUseLocalStorage<T> {
    key: string;
    initialValue: T;
}

export const useLocalStorage = <T>({ key, initialValue }: IUseLocalStorage<T>) => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        const item = localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    });

    const handleStoredValue = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return { storedValue, handleStoredValue };
};

import { createContext, useCallback, useState } from "react";
import { FilterType, FunctionType, IChildren } from "~types";

interface IFilterContext {
    activeFilter: FilterType;
    handleFilter: FunctionType<FilterType, void>;
}

export const FilterContext = createContext({} as IFilterContext);
const INITIAL_STATE = null;

export function FilterContextProvider({ children }: IChildren) {
    const [activeFilter, setActiveFilter] = useState<FilterType>(INITIAL_STATE);

    const handleFilter = useCallback((newFilter: FilterType) => {
        setActiveFilter(newFilter);
    }, []);

    return (
        <FilterContext.Provider
            value={{
                activeFilter,
                handleFilter
            }}
        >
            {children}
        </FilterContext.Provider>
    );
}

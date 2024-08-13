import { createContext, useCallback, useState } from "react";
import { FunctionType, ICatalog, IChildren } from "~types";

type OptionalSearchType = Partial<Omit<ICatalog, "data">> & { data?: Partial<ICatalog["data"]> };

interface ICatalogContext {
    catalog: ICatalog;
    handleCatalog: FunctionType<OptionalSearchType, void>;
    handleClickResetAll: FunctionType;
}

export const CatalogContext = createContext({} as ICatalogContext);
const INITIAL_STATE = {
    isLoading: true,
    isError: false,
    search: null,
    filter: null,
    data: {
        offsite: 0,
        count: 0,
        list: []
    }
};

export function CatalogContextProvider({ children }: IChildren) {
    const [catalog, setCatalog] = useState<ICatalog>(INITIAL_STATE);

    const handleCatalog = useCallback(
        (newState: OptionalSearchType) => {
            setCatalog((prevState) => ({
                ...prevState,
                ...newState,
                data: {
                    ...prevState.data,
                    ...newState.data
                }
            }));
        },
        [setCatalog]
    );
    const handleClickResetAll = useCallback(() => {
        handleCatalog({
            search: null,
            filter: null,
            data: {
                offsite: -999999
            }
        });
        setTimeout(() => {
            handleCatalog({
                data: {
                    offsite: 0
                }
            });
        }, 50);
    }, [handleCatalog]);

    return (
        <CatalogContext.Provider
            value={{
                catalog,
                handleCatalog,
                handleClickResetAll
            }}
        >
            {children}
        </CatalogContext.Provider>
    );
}

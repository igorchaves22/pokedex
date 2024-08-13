import { useCallback, useContext, useEffect } from "react";
import { CatalogContext, ScreenContext } from "~contexts";
import { useFetchPokemonList } from "./usePokeApi";

const ITEMS_PER_PAGE = 20;

export const usePagination = () => {
    const { catalog, handleCatalog } = useContext(CatalogContext);
    const { handleClickScrollToTop } = useContext(ScreenContext);
    const { isLoading, isError, data } = useFetchPokemonList(catalog.data.offsite, ITEMS_PER_PAGE);

    const renderPagination = catalog.search === null && catalog.filter === null && catalog.isError === false;
    const currentPage = Math.floor(catalog.data.offsite / ITEMS_PER_PAGE) + 1;
    const totalPage = Math.ceil(catalog.data.count / ITEMS_PER_PAGE);
    const handlePage = useCallback(
        (newOffsite: number) => {
            const pageRange = newOffsite < 0 || newOffsite >= totalPage * ITEMS_PER_PAGE;

            if (pageRange) {
                return null;
            }

            handleClickScrollToTop();
            handleCatalog({
                data: {
                    offsite: newOffsite
                }
            });
        },
        [handleCatalog, handleClickScrollToTop, totalPage]
    );
    const handleClickToFirstPage = useCallback(() => {
        const pageNumber = 0;

        handlePage(pageNumber);
    }, [handlePage]);
    const handleClickToPrevPage = useCallback(() => {
        const pageNumber = catalog.data.offsite - ITEMS_PER_PAGE;

        handlePage(pageNumber);
    }, [catalog.data.offsite, handlePage]);
    const handleClickToNextPage = useCallback(() => {
        const pageNumber = catalog.data.offsite + ITEMS_PER_PAGE;

        handlePage(pageNumber);
    }, [catalog.data.offsite, handlePage]);
    const handleClickToLastPage = useCallback(() => {
        const pageNumber = (totalPage - 1) * ITEMS_PER_PAGE;

        handlePage(pageNumber);
    }, [handlePage, totalPage]);

    useEffect(() => {
        handleCatalog({
            isLoading,
            isError,
            data
        });
    }, [data, handleCatalog, isError, isLoading]);

    return {
        renderPagination,
        currentPage,
        totalPage,
        handleClickToFirstPage,
        handleClickToPrevPage,
        handleClickToNextPage,
        handleClickToLastPage
    };
};

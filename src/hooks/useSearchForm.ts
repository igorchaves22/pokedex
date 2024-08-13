import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CatalogContext } from "~contexts";
import { IValidationSearchSchema } from "~types";
import { searchSchema } from "~utils";
import { useFetchPokemon } from "./usePokeApi";

export const useSearchForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset
    } = useForm<IValidationSearchSchema>({
        resolver: yupResolver(searchSchema)
    });
    const [searchTerm, setSearchTerm] = useState<string | null>(null);
    const { handleCatalog } = useContext(CatalogContext);
    const { isLoading, isError, data } = useFetchPokemon(searchTerm);

    const onSubmit = handleSubmit(() => {
        const inputValue = watch("search");

        setSearchTerm(inputValue);
        handleCatalog({
            search: searchTerm
        });
        reset();
    });

    useEffect(() => {
        handleCatalog({
            isLoading,
            isError,
            data: {
                count: 1,
                list: data ? [data] : []
            }
        });
    }, [data, handleCatalog, isError, isLoading]);

    return { register, errors, onSubmit };
};

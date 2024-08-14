import { useParams } from "react-router-dom";
import { useFetchDetails } from "./usePokeApi";

export const useDetails = () => {
    const { id } = useParams();
    const { isLoading, isError, data } = useFetchDetails(id ?? "");

    return { isLoading, isError, data };
};

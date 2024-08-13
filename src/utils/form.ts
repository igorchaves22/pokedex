import * as yup from "yup";

export const searchSchema = yup.object().shape({
    search: yup.string().required("Search is required").min(3, "Search must be at least 3 characters")
});

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            "~components": resolve(__dirname, "./src/components"),
            "~pages": resolve(__dirname, "./src/pages"),
            "~types": resolve(__dirname, "./src/types"),
            "~utils": resolve(__dirname, "./src/utils")
        }
    }
});

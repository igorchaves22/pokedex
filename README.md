# Pokedex

The Pokedex is a tool for searching and exploring information about Pokémon. With it, you can discover details about each Pokémon, such as abilities, types, stats, and much more. It is ideal for Pokémon fans who want to learn more about their favorite characters.

## Layout preview

![Image](./public/assets/layout-preview.png)

## About

The Pokedex is a web application developed to provide a robust and interactive interface for exploring Pokémon data. Utilizing **TypeScript** and **React.js**, the project combines type safety and efficiency in creating dynamic interfaces, ensuring a highly responsive and secure application with a codebase that is both robust and easy to maintain.

The project adheres to solid development principles, including the implementation of SOLID principles to ensure a clean and extensible architecture. Page navigation is managed with **React Router Dom**, providing a smooth and intuitive user experience. Styling is achieved with **Styled-components**. For data management, **React Query** is used in conjunction with **Axios** to make efficient API calls and manage loading and error states. Form management and validation are handled with **React Hook Form** and **Yup**.

Code quality is maintained with **ESLint** and **Prettier**, which help ensure consistency and adherence to best coding practices. To ensure the robustness of the application, unit tests are performed with **Jest** and **React Testing Library**, verifying that the application functions as expected and allowing for the identification and correction of potential issues before release.

## Technologies

-   TypeScript
-   React.js
-   Styled-components
-   React Router Dom
-   Axios
-   React Query
-   React Hook Form
-   Yup
-   Jest
-   React Testing Library

## User features

-   **Responsiveness**: interface adjusts to different screen sizes, ensuring a good experience on both mobile devices and desktops.
-   **Page Structure**: easy navigation between sections with support for scroll-to-top functionality.
-   **Theme Toggle**: switch between light and dark modes to match your preference.
-   **Advanced Search** search for Pokémon by name and refine with filters by type, Pokédex number, and generation.
-   **Favorites**: save Pokémon for quick access with local storage.
-   **Pokémon Details**: view comprehensive information including number, name, image, types, description, abilities, evolutions, varieties, and versions.

## Deploy

Access the [Live Demo](https://igorchaves-pokedex.vercel.app/) or copy the URL directly: `https://igorchaves-pokedex.vercel.app/`

## How to Use

**Running app:**

-   Clone this repository to your computer
-   Install dependencies using the command: `pnpm i`
-   Start the development server with: `pnpm dev`
-   Open your browser and navigate to: `http://localhost:3000`

**Running Tests:**

-   To run unit tests, use the command: `pnpm test`

# Web Gallery App Technical Documentation

This technical documentation provides an overview of the web gallery app developed using Next.js, React, and TypeScript. The app allows users to search for their favorite pictures and displays the search results in a gallery format. The documentation will cover the code base and provide explanations for each file and component.

### Table of Contents

- [Web Gallery App Technical Documentation](#web-gallery-app-technical-documentation)
    - [Table of Contents](#table-of-contents)
    - [Files and Components](#files-and-components)
    - [Functionality](#functionality)
    - [Installation and Setup](#installation-and-setup)
    - [Dependencies](#dependencies)
    - [File tree](#file-tree)

### Files and Components

The code base of the web gallery app consists of several files and components:

1. `index.tsx`: This file contains the main component `Home`, which serves as the entry point for the web gallery app. It includes the implementation for searching and filtering photos based on user input. The component renders a search bar, displays search results, and handles the rendering of individual photos.

2. `404.tsx`: This file contains the `NotFound` component, which is displayed when a user visits a non-existent page.

3. `login/index.tsx`: This file contains the `Login` component, which represents the login page of the web gallery app.

4. `gallery/index.tsx`: This file contains the `Gallery` component, which represents the gallery page of the web gallery app.

5. `hooks/useDebounce.ts`: This file contains the `useDebounce` custom hook, which is used to debounce the user's search input. It delays the update of the search query to reduce unnecessary API calls.

6. `components/SearchBar/SearchBar.tsx`: This file contains the `SearchBar` component, which renders the search bar UI and handles user input for searching photos.

7. `components/Navbar/Navbar.tsx`: This file contains the `Navbar` component, which renders the navigation bar for the web gallery app. It displays the available routes and highlights the active route based on the current URL.

8. `components/Button/Button.tsx`: This file contains the `Button` component, which renders a customizable button with different variants (primary, secondary, and action). It uses the `Link` component from Next.js for navigation.

9. `Utilities/classes.ts`: This file contains a utility function `classes` that helps concatenate and format CSS classes for components.

10. `Utilities/getData.ts`: This file contains the utility function `getData`, which fetches data from the JSONPlaceholder API. It is used to retrieve the photos for the web gallery app.

11. `Utilities/sliceStringByValue.ts`: This file contains the utility function `sliceStringByValue`, which slices a string based on a specific value. It is used to highlight search query matches in photo titles.

### Functionality

The web gallery app provides the following functionality:

- Search Bar: The `SearchBar` component allows users to enter their search query. It debounces the input using the `useDebounce` hook to avoid making frequent API requests while the user is typing.

- Search Results: The `Home` component filters and displays search results based on the user's input. It fetches the photo data using the `getStaticProps` function and filters the photos based on the search query. The search results are displayed in a gallery format, showing the photo thumbnails and titles.

- Search Query Validation: The app validates the search query and displays appropriate messages to the user. If the query is less than three characters, it prompts the user to enter at least three characters for meaningful results.

- Photo Title Highlighting: The app highlights the search query matches within the photo titles. It slices the title using the `sliceStringByValue` utility

 function and applies CSS styling to the matched substrings.

- Navigation: The `Navbar` component provides navigation links to different pages of the web gallery app. It highlights the active route based on the current URL.

### Installation and Setup

To run the web gallery app locally, follow these steps:

1. Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. Clone the repository or download the code files for the web gallery app.

3. Open a terminal or command prompt and navigate to the project directory.

4. Run the following command to install the required dependencies:

   ```
   npm install
   ```

5. After the installation is complete, start the development server by running the following command:

   ```
   npm run dev
   ```

6. The web gallery app should now be running locally. Open your web browser and access the app at `http://localhost:3000`.

### Dependencies

The web gallery app relies on the following dependencies:

- Next.js: A React framework for server-rendered applications.
- React: A JavaScript library for building user interfaces.
- TypeScript: A statically-typed superset of JavaScript.
- `next/image`: A Next.js component for optimizing and rendering images.

These dependencies are managed through npm and will be automatically installed when following the installation steps mentioned above.

Additionally, the web gallery app uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com/photos) to fetch the photo data for the gallery.

### File tree
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 Button
 ┃ ┃ ┣ 📜 Button.tsx
 ┃ ┃ ┗ ...
 ┃ ┣ 📂 Navbar
 ┃ ┃ ┣ 📜 Navbar.tsx
 ┃ ┃ ┗ ...
 ┃ ┣ 📂 SearchBar
 ┃ ┃ ┣ 📜 SearchBar.tsx
 ┃ ┃ ┗ ...
 ┃ ┗ ...
 ┣ 📂 hooks
 ┃ ┣ 📜 useDebounce.ts
 ┃ ┗ ...
 ┣ 📂 pages
 ┃ ┣ 📂 gallery
 ┃ ┃ ┣ 📜 index.tsx
 ┃ ┃ ┗ ...
 ┃ ┣ 📂 login
 ┃ ┃ ┣ 📜 index.tsx
 ┃ ┃ ┗ ...
 ┃ ┣ 📜 404.tsx
 ┃ ┗ 📜 index.tsx
 ┣ 📂 Utilities
 ┃ ┣ 📜 classes.ts
 ┃ ┣ 📜 getData.ts
 ┃ ┗ 📜 sliceStringByValue.ts
 ┣ 📜 _app.tsx
 ┣ 📜 _document.tsx
 ┣ 📜 404.tsx
 ┣ 📜 global.css
 ┣ 📜 index.tsx
 ┗ ...
```
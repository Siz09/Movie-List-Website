# Movie List

A modern, responsive movie listing web application built with **React** and **Vite**, allowing users to explore popular movies, manage favorites, and enjoy a smooth browsing experience.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Project Description

**Movie List** is a single-page application (SPA) that fetches movie data from The Movie Database (TMDb) API. Users can browse trending movies, view details, and save their favorite movies. The project emphasizes a clean, modular structure with React components and context-based state management.

## Features

- Display popular movies with details fetched from TMDb API
- Add or remove movies from favorites
- Responsive navigation bar for smooth page transitions
- Modular and reusable React components
- Context API for global state management

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/movie-list.git
   ```

2. **Navigate to the frontend folder:**
   ```bash
   cd movie-list/frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Create a `.env` file in the frontend directory and add your TMDb API key:**
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

## Usage

- Open the browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`)
- Browse popular movies on the Home page
- Add or remove movies from your Favorites list

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** CSS (modularized per component/page)
- **State Management:** React Context API
- **API:** The Movie Database (TMDb)
- **Linting:** ESLint

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a pull request

## License

This project is licensed under the MIT License.
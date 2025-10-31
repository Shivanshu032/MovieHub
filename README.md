# 🎬 MovieHub - Modern Movie Discovery App

A modern, fully-responsive movie discovery web application built with React.js and powered by The Movie Database (TMDB) API. Browse, search, filter, and save your favorite movies!

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38B2AC)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF)

## ✨ Features

-   🔍 **Real-time Search** - Search through thousands of movies instantly
-   🎭 **Genre Filtering** - Filter movies by your favorite genres
-   ⭐ **Sort Options** - Sort by popularity, rating, or release date
-   ❤️ **Like Functionality** - Save your favorite movies (persists in localStorage)
-   📱 **Responsive Design** - Beautiful UI on mobile, tablet, and desktop
-   🎬 **Detailed Movie Info** - View comprehensive details, cast, ratings, and more
-   🚀 **Fast & Modern** - Built with Vite for lightning-fast performance

## 🛠️ Tech Stack

-   **Frontend Framework:** React.js 19.1
-   **Styling:** Tailwind CSS 4.1
-   **Routing:** React Router DOM
-   **HTTP Client:** Axios
-   **State Management:** React Context API + Hooks
-   **Build Tool:** Vite
-   **API:** The Movie Database (TMDB) API

## 📋 Prerequisites

Before you begin, ensure you have:

-   Node.js (v16 or higher)
-   npm or yarn package manager
-   A TMDB API Key (free)

## 🚀 Getting Started

### 1. Get Your TMDB API Key

1. Go to [TMDB Website](https://www.themoviedb.org/)
2. Create a free account
3. Navigate to Settings → API
4. Request an API key (choose "Developer" option)
5. Copy your API key

### 2. Installation

```bash
# Clone the repository (if applicable)
# git clone <your-repo-url>

# Navigate to project directory
cd movie-app

# Install dependencies
npm install
```

### 3. Environment Setup

1. Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

2. Open `.env` and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_actual_api_key_here
```

### 4. Run the Application

```bash
# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 📁 Project Structure

```
movie-app/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── SearchBar.jsx
│   │   ├── GenreFilter.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── LikedMovies.jsx
│   │   └── About.jsx
│   ├── context/          # React Context providers
│   │   └── LikesContext.jsx
│   ├── services/         # API services
│   │   └── tmdb.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── .env                 # Environment variables
├── package.json
└── vite.config.js
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🌟 Key Features Explained

### Search & Filter

-   **Real-time Search:** Debounced search with 500ms delay for optimal performance
-   **Genre Filtering:** Filter movies by any genre
-   **Sorting:** Multiple sort options (popularity, rating, date)

### Like System

-   **Persistent Storage:** Liked movies are saved in localStorage
-   **Toggle Functionality:** Easy like/unlike with heart icon
-   **Dedicated Page:** View all your liked movies in one place

### Movie Details

-   **Rich Information:** Overview, cast, crew, ratings, budget, revenue
-   **Visual Design:** Beautiful backdrop images and poster displays
-   **Cast Gallery:** View top cast members with photos

## 🎨 Customization

### Colors

The app uses a purple-pink gradient theme. To customize:

-   Edit color values in component files
-   Modify Tailwind classes in components

### API Configuration

All API calls are centralized in `src/services/tmdb.js` for easy modification.

## 📝 Environment Variables

| Variable            | Description       | Required |
| ------------------- | ----------------- | -------- |
| `VITE_TMDB_API_KEY` | Your TMDB API Key | Yes      |

## 🐛 Troubleshooting

**Movies not loading?**

-   Check if your API key is correctly set in `.env`
-   Ensure the `.env` file starts with `VITE_`
-   Restart the dev server after changing `.env`

**Blank screen?**

-   Check browser console for errors
-   Verify all dependencies are installed
-   Clear browser cache and localStorage

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

-   Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
-   This product uses the TMDB API but is not endorsed or certified by TMDB

## 👨‍💻 Author

Built with ❤️ using React and Tailwind CSS

---

**Note:** Remember to keep your API key private and never commit `.env` file to version control!

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

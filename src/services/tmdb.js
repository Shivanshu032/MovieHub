import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY || "YOUR_API_KEY_HERE";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

// Create axios instance with default config
const tmdbApi = axios.create({
	baseURL: BASE_URL,
	params: {
		api_key: API_KEY,
	},
});

// Utility function to get image URL
export const getImageUrl = (path, size = "w500") => {
	if (!path) return "/placeholder-movie.png";
	return `${IMAGE_BASE_URL}/${size}${path}`;
};

// Get trending movies
export const getTrendingMovies = async (timeWindow = "week") => {
	try {
		const response = await tmdbApi.get(`/trending/movie/${timeWindow}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching trending movies:", error);
		throw error;
	}
};

// Search movies by query
export const searchMovies = async (query, page = 1) => {
	try {
		const response = await tmdbApi.get("/search/movie", {
			params: {
				query,
				page,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error searching movies:", error);
		throw error;
	}
};

// Get movie details
export const getMovieDetails = async (movieId) => {
	try {
		const response = await tmdbApi.get(`/movie/${movieId}`, {
			params: {
				append_to_response: "credits,videos",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching movie details:", error);
		throw error;
	}
};

// Get movie genres
export const getGenres = async () => {
	try {
		const response = await tmdbApi.get("/genre/movie/list");
		return response.data.genres;
	} catch (error) {
		console.error("Error fetching genres:", error);
		throw error;
	}
};

// Discover movies with filters
export const discoverMovies = async (filters = {}) => {
	try {
		const response = await tmdbApi.get("/discover/movie", {
			params: {
				...filters,
				sort_by: filters.sort_by || "popularity.desc",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error discovering movies:", error);
		throw error;
	}
};

// Get popular movies
export const getPopularMovies = async (page = 1) => {
	try {
		const response = await tmdbApi.get("/movie/popular", {
			params: { page },
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching popular movies:", error);
		throw error;
	}
};

export default tmdbApi;

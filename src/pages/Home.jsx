import { useState, useEffect, useCallback } from "react";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import MovieGrid from "../components/MovieGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import {
	getTrendingMovies,
	searchMovies,
	discoverMovies,
} from "../services/tmdb";

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedGenre, setSelectedGenre] = useState("");
	const [selectedSort, setSelectedSort] = useState("popularity.desc");
	const [error, setError] = useState(null);

	// Fetch movies based on filters
	const fetchMovies = useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			let data;

			if (searchQuery.trim()) {
				// Search movies
				data = await searchMovies(searchQuery);
			} else if (selectedGenre) {
				// Filter by genre
				data = await discoverMovies({
					with_genres: selectedGenre,
					sort_by: selectedSort,
				});
			} else {
				// Get trending movies with sort
				data = await discoverMovies({
					sort_by: selectedSort,
				});
			}

			setMovies(data.results || []);
		} catch (err) {
			console.error("Error fetching movies:", err);
			setError("Failed to load movies. Please try again later.");
		} finally {
			setLoading(false);
		}
	}, [searchQuery, selectedGenre, selectedSort]);

	useEffect(() => {
		fetchMovies();
	}, [fetchMovies]);

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	const handleGenreChange = (genreId) => {
		setSelectedGenre(genreId);
		setSearchQuery(""); // Clear search when changing genre
	};

	const handleSortChange = (sortValue) => {
		setSelectedSort(sortValue);
	};

	return (
		<div className="min-h-screen bg-gray-900">
			{/* Hero Section */}
			<div className="bg-gradient-to-b from-purple-900/50 to-gray-900 py-12">
				<div className="container mx-auto px-4">
					<div className="text-center mb-8">
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
							Discover Amazing Movies
						</h1>
						<p className="text-gray-300 text-lg">
							Search, filter, and explore thousands of movies
						</p>
					</div>

					{/* Search Bar */}
					<div className="flex justify-center mb-8">
						<SearchBar onSearch={handleSearch} />
					</div>

					{/* Filters */}
					{!searchQuery && (
						<GenreFilter
							selectedGenre={selectedGenre}
							onGenreChange={handleGenreChange}
							selectedSort={selectedSort}
							onSortChange={handleSortChange}
						/>
					)}
				</div>
			</div>

			{/* Movies Section */}
			<div className="container mx-auto px-4 py-8">
				{loading ? (
					<LoadingSpinner />
				) : error ? (
					<div className="text-center py-20">
						<p className="text-red-400 text-xl">{error}</p>
						<button
							onClick={fetchMovies}
							className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
						>
							Try Again
						</button>
					</div>
				) : (
					<>
						<div className="mb-6">
							<h2 className="text-2xl font-semibold text-white">
								{searchQuery
									? `Search results for "${searchQuery}"`
									: selectedGenre
									? "Filtered Movies"
									: "Popular Movies"}
							</h2>
							<p className="text-gray-400 mt-1">
								{movies.length} movies found
							</p>
						</div>
						<MovieGrid
							movies={movies}
							emptyMessage={
								searchQuery
									? "No movies found for your search."
									: "No movies available."
							}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Home;

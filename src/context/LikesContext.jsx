import { createContext, useContext, useState, useEffect } from "react";

const LikesContext = createContext();

export const useLikes = () => {
	const context = useContext(LikesContext);
	if (!context) {
		throw new Error("useLikes must be used within a LikesProvider");
	}
	return context;
};

export const LikesProvider = ({ children }) => {
	const [likedMovies, setLikedMovies] = useState([]);

	// Load liked movies from localStorage on mount
	useEffect(() => {
		const storedLikes = localStorage.getItem("likedMovies");
		if (storedLikes) {
			try {
				setLikedMovies(JSON.parse(storedLikes));
			} catch (error) {
				console.error(
					"Error parsing liked movies from localStorage:",
					error
				);
				setLikedMovies([]);
			}
		}
	}, []);

	// Save to localStorage whenever likedMovies changes
	useEffect(() => {
		localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
	}, [likedMovies]);

	const toggleLike = (movie) => {
		setLikedMovies((prev) => {
			const isLiked = prev.some((m) => m.id === movie.id);

			if (isLiked) {
				// Remove from likes
				return prev.filter((m) => m.id !== movie.id);
			} else {
				// Add to likes
				return [...prev, movie];
			}
		});
	};

	const isLiked = (movieId) => {
		return likedMovies.some((m) => m.id === movieId);
	};

	const clearAllLikes = () => {
		setLikedMovies([]);
	};

	const value = {
		likedMovies,
		toggleLike,
		isLiked,
		clearAllLikes,
	};

	return (
		<LikesContext.Provider value={value}>{children}</LikesContext.Provider>
	);
};

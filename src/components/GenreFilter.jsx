import { useState, useEffect } from "react";
import { getGenres } from "../services/tmdb";

const GenreFilter = ({
	selectedGenre,
	onGenreChange,
	selectedSort,
	onSortChange,
}) => {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const genreList = await getGenres();
				setGenres(genreList);
			} catch (error) {
				console.error("Failed to fetch genres:", error);
			}
		};

		fetchGenres();
	}, []);

	const sortOptions = [
		{ value: "popularity.desc", label: "Most Popular" },
		{ value: "popularity.asc", label: "Least Popular" },
		{ value: "vote_average.desc", label: "Highest Rated" },
		{ value: "vote_average.asc", label: "Lowest Rated" },
		{ value: "release_date.desc", label: "Newest First" },
		{ value: "release_date.asc", label: "Oldest First" },
	];

	return (
		<div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
			{/* Genre Filter */}
			<div className="relative">
				<select
					value={selectedGenre}
					onChange={(e) => onGenreChange(e.target.value)}
					className="appearance-none px-6 py-3 pr-10 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer transition-all hover:bg-gray-700"
				>
					<option value="">All Genres</option>
					{genres.map((genre) => (
						<option key={genre.id} value={genre.id}>
							{genre.name}
						</option>
					))}
				</select>
				<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>

			{/* Sort Filter */}
			<div className="relative">
				<select
					value={selectedSort}
					onChange={(e) => onSortChange(e.target.value)}
					className="appearance-none px-6 py-3 pr-10 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer transition-all hover:bg-gray-700"
				>
					{sortOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default GenreFilter;

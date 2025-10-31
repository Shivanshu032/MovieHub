import MovieCard from "./MovieCard";

const MovieGrid = ({ movies, emptyMessage = "No movies found." }) => {
	if (!movies || movies.length === 0) {
		return (
			<div className="text-center py-20">
				<p className="text-gray-400 text-xl">{emptyMessage}</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};

export default MovieGrid;

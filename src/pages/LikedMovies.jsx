import { useLikes } from "../context/LikesContext";
import MovieGrid from "../components/MovieGrid";

const LikedMovies = () => {
	const { likedMovies, clearAllLikes } = useLikes();

	return (
		<div className="min-h-screen bg-gray-900">
			<div className="container mx-auto px-4 py-12">
				{/* Header */}
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
					<div>
						<h1 className="text-4xl font-bold text-white mb-2">
							Liked Movies
						</h1>
						<p className="text-gray-400">
							You have {likedMovies.length}{" "}
							{likedMovies.length === 1 ? "movie" : "movies"} in
							your collection
						</p>
					</div>

					{likedMovies.length > 0 && (
						<button
							onClick={() => {
								if (
									window.confirm(
										"Are you sure you want to clear all liked movies?"
									)
								) {
									clearAllLikes();
								}
							}}
							className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
							Clear All
						</button>
					)}
				</div>

				{/* Movies Grid */}
				{likedMovies.length === 0 ? (
					<div className="text-center py-20">
						<div className="text-6xl mb-4">💔</div>
						<h2 className="text-2xl font-semibold text-white mb-2">
							No liked movies yet
						</h2>
						<p className="text-gray-400 mb-6">
							Start exploring and add movies to your favorites!
						</p>
						<a
							href="/"
							className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
						>
							Discover Movies
						</a>
					</div>
				) : (
					<MovieGrid movies={likedMovies} />
				)}
			</div>
		</div>
	);
};

export default LikedMovies;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails, getImageUrl } from "../services/tmdb";
import { useLikes } from "../context/LikesContext";
import LoadingSpinner from "../components/LoadingSpinner";

const MovieDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { toggleLike, isLiked } = useLikes();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const liked = movie ? isLiked(movie.id) : false;

	useEffect(() => {
		const fetchMovieDetails = async () => {
			setLoading(true);
			setError(null);

			try {
				const data = await getMovieDetails(id);
				setMovie(data);
			} catch (err) {
				console.error("Error fetching movie details:", err);
				setError("Failed to load movie details.");
			} finally {
				setLoading(false);
			}
		};

		fetchMovieDetails();
	}, [id]);

	if (loading) return <LoadingSpinner />;

	if (error || !movie) {
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center">
				<div className="text-center">
					<p className="text-red-400 text-xl mb-4">
						{error || "Movie not found"}
					</p>
					<button
						onClick={() => navigate("/")}
						className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
					>
						Back to Home
					</button>
				</div>
			</div>
		);
	}

	const backdropUrl = getImageUrl(movie.backdrop_path, "original");
	const posterUrl = getImageUrl(movie.poster_path, "w500");

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			{/* Backdrop */}
			<div className="relative h-[500px] overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${backdropUrl})` }}
				>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
				</div>

				{/* Back Button */}
				<button
					onClick={() => navigate(-1)}
					className="absolute top-6 left-6 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
				</button>

				{/* Movie Info Overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
					<div className="flex flex-col md:flex-row gap-8 items-end">
						{/* Poster */}
						<img
							src={posterUrl}
							alt={movie.title}
							className="w-48 md:w-64 rounded-lg shadow-2xl"
							onError={(e) => {
								e.target.src =
									"https://via.placeholder.com/500x750?text=No+Image";
							}}
						/>

						{/* Title and basic info */}
						<div className="flex-1 pb-4">
							<h1 className="text-4xl md:text-5xl font-bold mb-2">
								{movie.title}
							</h1>
							<div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
								<span className="flex items-center gap-1">
									<span className="text-yellow-500">⭐</span>
									<span className="font-semibold">
										{movie.vote_average?.toFixed(1)}
									</span>
									<span className="text-sm">
										({movie.vote_count} votes)
									</span>
								</span>
								<span>•</span>
								<span>
									{movie.release_date
										? new Date(
												movie.release_date
										  ).getFullYear()
										: "N/A"}
								</span>
								<span>•</span>
								<span>
									{movie.runtime
										? `${movie.runtime} min`
										: "N/A"}
								</span>
							</div>

							{/* Genres */}
							<div className="flex flex-wrap gap-2 mb-4">
								{movie.genres?.map((genre) => (
									<span
										key={genre.id}
										className="px-3 py-1 bg-purple-600/50 backdrop-blur-sm rounded-full text-sm"
									>
										{genre.name}
									</span>
								))}
							</div>

							{/* Like Button */}
							<button
								onClick={() => toggleLike(movie)}
								className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
									liked
										? "bg-red-500 hover:bg-red-600"
										: "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
								}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill={liked ? "currentColor" : "none"}
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
								{liked ? "Unlike" : "Like"}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-8 py-12">
				{/* Overview */}
				<div className="mb-12">
					<h2 className="text-2xl font-bold mb-4">Overview</h2>
					<p className="text-gray-300 text-lg leading-relaxed">
						{movie.overview || "No overview available."}
					</p>
				</div>

				{/* Cast */}
				{movie.credits?.cast && movie.credits.cast.length > 0 && (
					<div className="mb-12">
						<h2 className="text-2xl font-bold mb-6">Top Cast</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
							{movie.credits.cast.slice(0, 12).map((person) => (
								<div key={person.id} className="text-center">
									<img
										src={getImageUrl(
											person.profile_path,
											"w185"
										)}
										alt={person.name}
										className="w-full aspect-[2/3] object-cover rounded-lg mb-2"
										onError={(e) => {
											e.target.src =
												"https://via.placeholder.com/185x278?text=No+Image";
										}}
									/>
									<p className="font-semibold text-sm">
										{person.name}
									</p>
									<p className="text-gray-400 text-xs">
										{person.character}
									</p>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Additional Info */}
				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-3">Details</h3>
						<div className="space-y-2 text-gray-300">
							{movie.status && (
								<p>
									<span className="font-semibold">
										Status:
									</span>{" "}
									{movie.status}
								</p>
							)}
							{movie.budget > 0 && (
								<p>
									<span className="font-semibold">
										Budget:
									</span>{" "}
									${movie.budget.toLocaleString()}
								</p>
							)}
							{movie.revenue > 0 && (
								<p>
									<span className="font-semibold">
										Revenue:
									</span>{" "}
									${movie.revenue.toLocaleString()}
								</p>
							)}
							{movie.original_language && (
								<p>
									<span className="font-semibold">
										Language:
									</span>{" "}
									{movie.original_language.toUpperCase()}
								</p>
							)}
						</div>
					</div>

					{movie.production_companies &&
						movie.production_companies.length > 0 && (
							<div>
								<h3 className="text-xl font-bold mb-3">
									Production Companies
								</h3>
								<div className="space-y-2 text-gray-300">
									{movie.production_companies.map(
										(company) => (
											<p key={company.id}>
												{company.name}
											</p>
										)
									)}
								</div>
							</div>
						)}
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;

import { Link } from "react-router-dom";
import { useLikes } from "../context/LikesContext";
import { getImageUrl } from "../services/tmdb";

const MovieCard = ({ movie }) => {
	const { toggleLike, isLiked } = useLikes();
	const liked = isLiked(movie.id);

	const handleLikeClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		toggleLike(movie);
	};

	return (
		<Link
			to={`/movie/${movie.id}`}
			className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
		>
			{/* Movie Poster */}
			<div className="relative aspect-[2/3] overflow-hidden">
				<img
					src={getImageUrl(movie.poster_path)}
					alt={movie.title}
					className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
					onError={(e) => {
						e.target.src =
							"https://via.placeholder.com/500x750?text=No+Image";
					}}
				/>

				{/* Overlay on hover */}
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<div className="absolute bottom-0 left-0 right-0 p-4">
						<p className="text-white text-sm line-clamp-3">
							{movie.overview || "No description available."}
						</p>
					</div>
				</div>

				{/* Like Button */}
				<button
					onClick={handleLikeClick}
					className={`absolute top-2 right-2 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
						liked
							? "bg-red-500 text-white scale-110"
							: "bg-white/30 text-white hover:bg-white/50"
					}`}
					aria-label={liked ? "Unlike" : "Like"}
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
				</button>

				{/* Rating Badge */}
				<div className="absolute top-2 left-2 bg-yellow-500 text-black font-bold px-2 py-1 rounded-md text-sm flex items-center space-x-1">
					<span>⭐</span>
					<span>{movie.vote_average?.toFixed(1) || "N/A"}</span>
				</div>
			</div>

			{/* Movie Info */}
			<div className="p-4">
				<h3 className="text-white font-semibold text-lg line-clamp-1 mb-1">
					{movie.title}
				</h3>
				<p className="text-gray-400 text-sm">
					{movie.release_date
						? new Date(movie.release_date).getFullYear()
						: "N/A"}
				</p>
			</div>
		</Link>
	);
};

export default MovieCard;

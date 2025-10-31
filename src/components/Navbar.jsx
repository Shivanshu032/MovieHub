import { Link, useLocation } from "react-router-dom";
import { useLikes } from "../context/LikesContext";

const Navbar = () => {
	const location = useLocation();
	const { likedMovies } = useLikes();

	const navLinks = [
		{ path: "/", label: "Home" },
		{ path: "/liked", label: "Liked Movies" },
		{ path: "/about", label: "About" },
	];

	const isActive = (path) => location.pathname === path;

	return (
		<nav className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-2">
						<span className="text-2xl">🎬</span>
						<span className="text-white font-bold text-xl">
							MovieHub
						</span>
					</Link>

					{/* Navigation Links */}
					<div className="flex items-center space-x-6">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`text-white font-medium transition-all duration-200 hover:text-yellow-300 relative ${
									isActive(link.path) ? "text-yellow-300" : ""
								}`}
							>
								{link.label}
								{link.path === "/liked" &&
									likedMovies.length > 0 && (
										<span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
											{likedMovies.length}
										</span>
									)}
								{isActive(link.path) && (
									<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300"></span>
								)}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

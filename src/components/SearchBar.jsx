import { useState, useEffect } from "react";

const SearchBar = ({ onSearch, placeholder = "Search movies..." }) => {
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		// Debounce search
		const delayDebounceFn = setTimeout(() => {
			onSearch(searchTerm);
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm, onSearch]);

	const handleClear = () => {
		setSearchTerm("");
	};

	return (
		<div className="relative w-full max-w-2xl">
			<div className="relative">
				<input
					type="text"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder={placeholder}
					className="w-full px-5 py-3 pl-12 pr-12 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
				/>

				{/* Search Icon */}
				<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
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
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>

				{/* Clear Button */}
				{searchTerm && (
					<button
						onClick={handleClear}
						className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
						aria-label="Clear search"
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
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};

export default SearchBar;

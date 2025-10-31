const About = () => {
	const features = [
		{
			icon: "🔍",
			title: "Real-time Search",
			description:
				"Search through thousands of movies instantly with our smart search feature.",
		},
		{
			icon: "🎭",
			title: "Genre Filtering",
			description:
				"Filter movies by your favorite genres and discover new favorites.",
		},
		{
			icon: "⭐",
			title: "Sort Options",
			description:
				"Sort movies by popularity, rating, or release date to find what you want.",
		},
		{
			icon: "❤️",
			title: "Personal Collection",
			description:
				"Like your favorite movies and build your own personalized collection.",
		},
		{
			icon: "📱",
			title: "Responsive Design",
			description:
				"Enjoy seamless experience across all devices - mobile, tablet, and desktop.",
		},
		{
			icon: "🎬",
			title: "Detailed Info",
			description:
				"View comprehensive movie details including cast, crew, and ratings.",
		},
	];

	const techStack = [
		{ name: "React.js", description: "UI Library" },
		{ name: "Tailwind CSS", description: "Styling" },
		{ name: "React Router", description: "Navigation" },
		{ name: "Axios", description: "HTTP Client" },
		{ name: "TMDB API", description: "Movie Data" },
		{ name: "Context API", description: "State Management" },
	];

	return (
		<div className="min-h-screen bg-gray-900 text-white">
			{/* Hero Section */}
			<div className="bg-gradient-to-b from-purple-900/50 to-gray-900 py-20">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl font-bold mb-4">About MovieHub</h1>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						Your ultimate destination for discovering, exploring,
						and organizing your favorite movies
					</p>
				</div>
			</div>

			{/* Features Section */}
			<div className="container mx-auto px-4 py-16">
				<h2 className="text-3xl font-bold text-center mb-12">
					Features
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
						>
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-400">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Tech Stack Section */}
			<div className="bg-gray-800/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">
						Built With
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{techStack.map((tech, index) => (
							<div
								key={index}
								className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors"
							>
								<p className="font-semibold mb-1">
									{tech.name}
								</p>
								<p className="text-sm text-gray-400">
									{tech.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* About Project Section */}
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold mb-6 text-center">
						About This Project
					</h2>
					<div className="space-y-4 text-gray-300 text-lg leading-relaxed">
						<p>
							MovieHub is a modern movie discovery web application
							built with React.js and powered by The Movie
							Database (TMDB) API. This project demonstrates the
							implementation of a full-featured movie browsing
							experience with real-time search, filtering, and
							personalization features.
						</p>
						<p>
							The application uses React Context API for state
							management, ensuring your liked movies persist
							across sessions using localStorage. The responsive
							design, crafted with Tailwind CSS, provides a
							seamless experience on any device.
						</p>
						<p>
							Whether you're looking for the latest blockbusters,
							classic films, or hidden gems, MovieHub makes it
							easy to discover and organize your favorite movies.
						</p>
					</div>

					{/* Data Attribution */}
					<div className="mt-12 p-6 bg-gray-800 rounded-lg text-center">
						<p className="text-gray-400 mb-4">
							Movie data provided by
						</p>
						<img
							src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
							alt="TMDB Logo"
							className="h-8 mx-auto mb-4"
						/>
						<p className="text-sm text-gray-500">
							This product uses the TMDB API but is not endorsed
							or certified by TMDB.
						</p>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-4">
						Ready to Discover?
					</h2>
					<p className="text-xl mb-6">
						Start exploring thousands of amazing movies today!
					</p>
					<a
						href="/"
						className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
					>
						Browse Movies
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;

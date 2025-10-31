const LoadingSpinner = ({ size = "large" }) => {
	const sizeClasses = {
		small: "h-8 w-8",
		medium: "h-12 w-12",
		large: "h-16 w-16",
	};

	return (
		<div className="flex justify-center items-center min-h-[300px]">
			<div className="relative">
				<div
					className={`${sizeClasses[size]} border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin`}
				></div>
				<div className="mt-4 text-center">
					<p className="text-gray-400">Loading...</p>
				</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;

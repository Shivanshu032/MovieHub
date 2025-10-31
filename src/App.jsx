import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LikesProvider } from "./context/LikesContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import LikedMovies from "./pages/LikedMovies";
import About from "./pages/About";

function App() {
	return (
		<Router>
			<LikesProvider>
				<div className="min-h-screen bg-gray-900">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/:id" element={<MovieDetails />} />
						<Route path="/liked" element={<LikedMovies />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
			</LikesProvider>
		</Router>
	);
}

export default App;

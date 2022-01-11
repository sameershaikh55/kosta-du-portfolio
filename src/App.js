// This is a React Router v6 app
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Press from "./pages/Press";
import Videos from "./pages/Videos";
import Projects from "./pages/Projects";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/press" element={<Press />} />
				<Route path="/videos" element={<Videos />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

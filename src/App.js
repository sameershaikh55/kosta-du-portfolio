// This is a React Router v6 app
import { Switch, Route } from "react-router-dom";

// IMPORTING ANIMATIONS
import AOS from "aos";

// CSS
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Press from "./pages/Press";
import Videos from "./pages/Videos";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<>
			<ScrollToTop />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/press" component={Press} />
				<Route exact path="/videos" component={Videos} />
				<Route exact path="/projects" component={Projects} />
			</Switch>
		</>
	);
}

export default App;

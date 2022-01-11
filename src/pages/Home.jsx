import React from "react";

// COMPONENTS
import Layout from "../layout";
import Hero from "../components/Hero";
import FutureThinking from "../components/FutureThinking";
import FeaturedProject from "../components/FeaturedProject";
import Blog from "../components/Blog";
import Cta from "../components/Cta";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<FutureThinking />
			<FeaturedProject />
			<Blog />
			<Cta />
		</Layout>
	);
};

export default Home;

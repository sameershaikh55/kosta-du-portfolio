import React from "react";

// COMPONENTS
import Layout from "../layout";
import ProjectHero from "../components/ProjectHero";
import PastInitiatives from "../components/PastInitiatives";
import Cta from "../components/Cta";

const Projects = () => {
	return (
		<Layout>
			<ProjectHero />
			<PastInitiatives />
			<Cta />
		</Layout>
	);
};

export default Projects;

import React from "react";

// COMPONENTS
import Layout from "../layout";
import PressHero from "../components/PressHero";
import PressBody from "../components/PressBody";
import Cta from "../components/Cta";

const Press = () => {
	return (
		<Layout>
			<PressHero />
			<PressBody />
			<br />
			<br />
			<Cta />
		</Layout>
	);
};

export default Press;

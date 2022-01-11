import React from "react";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="header_below"></div>
			{children}
			<Footer />
		</>
	);
};

export default Layout;

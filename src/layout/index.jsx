import React, { useState } from "react";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const OnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<div className="header_below"></div>
			{children}
			<Footer />
		</>
	);
};

export default Layout;

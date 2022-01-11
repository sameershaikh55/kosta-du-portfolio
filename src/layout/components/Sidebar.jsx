import React from "react";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	const navigationsOne = [
		{
			text: "Biography",
			link: "/",
		},
		{
			text: "Projects",
			link: "/projects",
		},
		{
			text: "Blog",
			link: "blog",
		},
	];
	const navigationsTwo = [
		{
			text: "Press",
			link: "/press",
		},
		{
			text: "Videos",
			link: "/videos",
		},
		{
			text: "Contact",
			link: "/contact",
		},
	];

	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="page_container w-100">
				<div className="container-fluid w-100">
					<div className="row">
						<div className="mx-auto col-10 col-md-6">
							<ul className="list-unstyled">
								{navigationsOne.map((item, i) => {
									return (
										<li
											className="row fw600 text-white f28 pointer mb-4"
											key={i}
										>
											<div className="col-2">{`0${i + 1}`}</div>
											<div className="col-10">
												{(item.text !== "Blog" && (
													<Link
														activeClass="activeNav"
														onClick={ClickEvent}
														to={item.link}
													>
														{item.text}
													</Link>
												)) || (
													<Links
														activeClass="activeNav"
														onClick={ClickEvent}
														to={item.link}
														smooth={true}
														duration={600}
														spy={true}
														offset={-50}
													>
														{item.text}
													</Links>
												)}
											</div>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="mx-auto col-10 col-md-6">
							<ul className="list-unstyled">
								{navigationsTwo.map((item, i) => {
									return (
										<li
											className="row fw600 text-white f28 pointer mb-4"
											key={i}
										>
											<div className="col-2">{`0${i + 4}`}</div>
											<div className="col-10">
												<Link
													activeClass="activeNav"
													onClick={ClickEvent}
													to={item.link}
												>
													{item.text}
												</Link>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

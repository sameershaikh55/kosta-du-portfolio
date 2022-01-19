import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Links } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	let location = useLocation().pathname;

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
										<li className="row text-white f28 pointer mb-4" key={i}>
											<div
												className={`${
													location === item.link && "text-dark"
												} col-2`}
											>{`0${i + 1}`}</div>
											<div className="col-10 d-flex justify-content-between">
												{(item.text !== "Blog" && (
													<Link
														onClick={ClickEvent}
														to={item.link}
														className={`${
															(location === item.link && "text-dark fw600") ||
															"fw500"
														}`}
													>
														{item.text}
													</Link>
												)) || (
													<Links
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

												{location === item.link && (
													<div className="me-0 me-sm-5">
														<svg
															width="34"
															height="38"
															viewBox="0 0 34 38"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M30.987 1.77199C30.861 0.674618 29.8694 -0.11289 28.772 0.0130374L10.8893 2.06515C9.79198 2.19107 9.00447 3.18275 9.1304 4.28012C9.25633 5.37748 10.248 6.16499 11.3454 6.03907L27.2411 4.21497L29.0651 20.1107C29.1911 21.208 30.1828 21.9955 31.2801 21.8696C32.3775 21.7437 33.165 20.752 33.0391 19.6546L30.987 1.77199ZM3.56622 37.2438L30.5662 3.24376L27.4338 0.756234L0.433778 34.7562L3.56622 37.2438Z"
																fill="black"
															/>
														</svg>
													</div>
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
										<li className="row text-white f28 pointer mb-4" key={i}>
											<div
												className={`${
													location === item.link && "text-dark"
												} col-2`}
											>{`0${i + 4}`}</div>
											<div className="col-10 d-flex justify-content-between">
												<Link
													className={`${
														(location === item.link && "text-dark fw600") ||
														"fw500"
													}`}
													onClick={ClickEvent}
													to={item.link}
												>
													{item.text}
												</Link>

												{location === item.link && (
													<div className="me-0 me-sm-5">
														<svg
															width="34"
															height="38"
															viewBox="0 0 34 38"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M30.987 1.77199C30.861 0.674618 29.8694 -0.11289 28.772 0.0130374L10.8893 2.06515C9.79198 2.19107 9.00447 3.18275 9.1304 4.28012C9.25633 5.37748 10.248 6.16499 11.3454 6.03907L27.2411 4.21497L29.0651 20.1107C29.1911 21.208 30.1828 21.9955 31.2801 21.8696C32.3775 21.7437 33.165 20.752 33.0391 19.6546L30.987 1.77199ZM3.56622 37.2438L30.5662 3.24376L27.4338 0.756234L0.433778 34.7562L3.56622 37.2438Z"
																fill="black"
															/>
														</svg>
													</div>
												)}
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

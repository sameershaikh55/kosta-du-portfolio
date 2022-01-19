import React from "react";
import logo from "../../assets/images/logoW.svg";
import youtube from "../../assets/images/socials/youtube.svg";
import telegram from "../../assets/images/socials/telegram.svg";
import linkdin from "../../assets/images/socials/linkdin.svg";
import { Link } from "react-router-dom";
import { Link as Links } from "react-scroll";

const Footer = () => {
	const navigations = [
		{ text: "Bio", link: "/" },
		{ text: "Projects", link: "/projects" },
		{ text: "Blog", link: "blog" },
		{ text: "Press", link: "/press" },
		{ text: "Videos", link: "/videos" },
		{ text: "Contact", link: "/contact" },
	];

	return (
		<div className="footer_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex flex-column flex-md-row justify-content-lg-between align-items-lg-center">
								<div className="logo_container">
									<Link to="/">
										<img src={logo} alt="" />
									</Link>
								</div>

								<ul className="my-5 my-md-0 list-unstyled d-none d-lg-flex align-items-center">
									{navigations.map((item, i) => {
										return (
											<li className="mx-4 text-white f18 pointer" key={i}>
												{(item.text !== "Blog" && (
													<Link
														to={item.link}
														className={`text-white text-decoration-none`}
													>
														{item.text}
													</Link>
												)) || (
													<Links
														to={item.link}
														smooth={true}
														duration={600}
														spy={true}
														offset={-50}
														className="text-white text-decoration-none"
													>
														{item.text}
													</Links>
												)}
											</li>
										);
									})}
								</ul>

								<ul className="mt-3 mb-5 my-md-0 list-unstyled row d-lg-none gy-4 align-items-center">
									{navigations.map((item, i) => {
										return (
											<li className="col-4 text-white f18 pointer" key={i}>
												{item.link}
											</li>
										);
									})}
								</ul>

								<ul className="list-unstyled d-flex align-items-center mb-0">
									<li>
										<a target="blank" href="https://www.youtube.com/c/KostaDu">
											<img className="pointer" src={youtube} alt="" />
										</a>
									</li>
									<li className="mx-2">
										<a
											target="blank"
											href="https://www.linkedin.com/in/kostadu/"
										>
											<img className="pointer" src={linkdin} alt="" />
										</a>
									</li>
									<li>
										<a target="blank" href="https://t.me/KostaDu">
											<img className="pointer" src={telegram} alt="" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

import React from "react";
import logo from "../../assets/images/logoW.svg";
import youtube from "../../assets/images/socials/youtube.svg";
import telegram from "../../assets/images/socials/telegram.svg";
import linkdin from "../../assets/images/socials/linkdin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	const navigations = [
		{ link: "Bio" },
		{ link: "Projects" },
		{ link: "Blog" },
		{ link: "Press" },
		{ link: "Videos" },
		{ link: "Contact" },
	];

	return (
		<div className="footer_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center">
								<div className="logo_container">
									<Link to="/">
										<img src={logo} alt="" />
									</Link>
								</div>

								<ul className="list-unstyled d-flex align-items-center mb-0">
									{navigations.map((item, i) => {
										return (
											<li className="mx-4 text-white f18 pointer" key={i}>
												{item.link}
											</li>
										);
									})}
								</ul>

								<ul className="list-unstyled d-flex align-items-center mb-0">
									<li>
										<a target="blank" href="https://www.youtube.com/">
											<img className="pointer" src={youtube} alt="" />
										</a>
									</li>
									<li className="mx-2">
										<a target="blank" href="https://www.linkedin.com/">
											<img className="pointer" src={linkdin} alt="" />
										</a>
									</li>
									<li>
										<a target="blank" href="https://web.telegram.org/">
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

import React, { useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/hamburger.svg";
import cross from "../../assets/images/cross.svg";
import { Link } from "react-router-dom";

const Header = ({ ClickEvent, isOpen }) => {
	useEffect(() => {
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".header_container");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 0);
				header.classList.toggle("shadow-sm", window.scrollY > 0);
			}
		});
	}, []);

	return (
		<div className="header_container">
			<div className="page_container w-100">
				<div className="container-fluid w-100">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center">
								<div className="logo_container">
									<Link to="/">
										<img src={logo} alt="" />
									</Link>
								</div>

								<div className="d-flex align-items-center">
									<p className="mb-0 fw600 pe-3 pe-md-4">Get to know me</p>
									<div className="burger_ pointer">
										{(isOpen && (
											<img onClick={ClickEvent} src={cross} alt="" />
										)) || <img onClick={ClickEvent} src={hamburger} alt="" />}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

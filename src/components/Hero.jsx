import React from "react";
import youtube from "../assets/images/heroSocials/youtube.svg";
import linkdin from "../assets/images/heroSocials/linkdin.svg";
import telegram from "../assets/images/heroSocials/telegram.svg";
import hero from "../assets/images/hero.png";

const Hero = () => {
	return (
		<div className="hero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="color2 fw900 f58">Kosta Du</h1>
									<h1 className="fw-light">
										Fintech leader, speaker & entrepreneur.
									</h1>
									<div className="socials d-flex align-items-center">
										<p className="f20 mb-0">Let's connect</p>
										<div className="line_ mx-4"></div>
										<ul className="list-unstyled d-flex align-items-center mb-0">
											<li>
												<img src={youtube} alt="" />
											</li>
											<li className="mx-3">
												<img src={linkdin} alt="" />
											</li>
											<li>
												<img src={telegram} alt="" />
											</li>
										</ul>
									</div>
								</div>
								<div className="d-none d-md-block col-12 col-md-6">
									<img className="hero_img" src={hero} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<img className="d-block d-md-none w-100 mt-5" src={hero} alt="" />
			</div>
		</div>
	);
};

export default Hero;

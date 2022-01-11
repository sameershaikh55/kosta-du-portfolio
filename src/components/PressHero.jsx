import React from "react";
import pressHero from "../assets/images/pressHero.png";

const PressHero = () => {
	return (
		<div className="press_hero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-5 align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="fw900 f58 let_space color2">Press</h1>
									<p className="mt-5 f18">
										Coverage of Kosta and his projects in the the news.
									</p>
								</div>
								<div className="d-none d-md-block col-12 col-md-6">
									<img className="w-100" src={pressHero} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<img className="w-100 d-block ps-3 d-md-none" src={pressHero} alt="" />
			</div>
		</div>
	);
};

export default PressHero;

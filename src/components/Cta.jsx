import React from "react";
import cta from "../assets/images/cta.svg";

const Cta = () => {
	return (
		<div className="cta_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-5 align-items-center">
								<div className="col-12 col-md-6">
									<img className="w-100" src={cta} alt="" />
								</div>
								<div className="col-12 col-md-6 pb-5 pb-md-0">
									<h1 className="f40 let_space text-white">
										Let’s talk. I’ll teach you how to launch your own business!
									</h1>
									<button className="mt-5 bg-white px-5 py-2 rounded-pill border-0 text-uppercase color3 let_space">
										contact
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cta;

import React from "react";
import PressCard from "./cards/PressCard";

const PressBody = () => {
	return (
		<div className="press_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-4">
								{[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
									return (
										<div className="col-4">
											<PressCard />
										</div>
									);
								})}
							</div>

							<div className="btn_cont d-flex justify-content-center">
								<button className=" text-uppercase bg_color3 text-white border-0 px-5 py-2 rounded-pill">
									read more
								</button>
							</div>

							<div className="row gy-4">
								{[1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
									return (
										<div className="col-4">
											<PressCard />
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PressBody;

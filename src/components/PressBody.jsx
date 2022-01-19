import React, { useState } from "react";
import { press } from "../services/press";
import PressCard from "./cards/PressCard";

const PressBody = () => {
	const [loadMore, setLoadMore] = useState(9);

	return (
		<div className="press_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row gy-4">
								{press.slice(0, loadMore).map((item, i) => {
									return (
										<div key={i} className="col-12 col-sm-6 col-md-4">
											<PressCard item={item} />
										</div>
									);
								})}
							</div>

							<div className="btn_cont d-flex justify-content-center">
								<button
									onClick={() => setLoadMore(loadMore + loadMore)}
									className=" text-uppercase bg_color3 text-white border-0 px-5 py-2 rounded-pill"
								>
									read more
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PressBody;

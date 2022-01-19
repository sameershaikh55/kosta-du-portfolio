import React from "react";

const EmbedCalender = () => {
	return (
		<div className="embed_calender_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-5 embed_inner">
									<h1 className="f40 let_space text-white">
										Or just book a <br /> call right away!
									</h1>
								</div>
								<div className="col-12 col-md-5 embed_inner">
									<div className="embed_calender border">
										<iframe src="https://meetings.kostadu.com?view=compact"></iframe>
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

export default EmbedCalender;

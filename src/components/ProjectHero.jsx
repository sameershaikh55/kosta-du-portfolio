import React from "react";
import project1 from "../assets/images/project1.svg";
import project2 from "../assets/images/project2.svg";
import arrow from "../assets/images/arrow.svg";

const ProjectHero = () => {
	return (
		<div className="projects_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-10 col-sm-8 col-lg-6">
									<h1 className="f58 fw900 color2">Projects</h1>
									<p className="f18 mt-5">
										Lorem ipsum dolor sit amet consectetur adipiscing elit
									</p>
								</div>
							</div>

							<div className="project_body">
								<h2 className="fw-bold">2019 – present</h2>

								<div className="single_project">
									<div className="max_project">
										<img className="w-100" src={project1} alt="" />
									</div>

									<div className="project_card p-4">
										<p className="fw600 color2">dapio.com</p>
										<h4 className="fw800 my-4">Dapio</h4>
										<p className="mb-4 lh-baseline">
											Dapio is an embedded payment engine. We are on a mission
											to enable any company to offer their own financial
											services through our Payments as a Service (Paas)
											platform.
										</p>

										<div className="d-flex align-items-center">
											<p className="color2 mb-0 text-uppercase">see website</p>
											<img className="ms-4" src={arrow} alt="" />
										</div>
									</div>
								</div>

								<div className="single_project2">
									<div className="max_project">
										<img className="w-100" src={project2} alt="" />
									</div>

									<div className="project_card p-4">
										<p className="fw600 color2">paymobtech.com</p>
										<h4 className="fw800 my-4">Paymob Technologies</h4>
										<p className="mb-4 lh-baseline pb-4">
											On-land payment infrastructure for the next generation
											merchant services. Including multi-banking payment gateway
											and Smart/Soft POS interfaces.
										</p>

										{/* <div className="d-flex align-items-center">
											<p className="color2 mb-0 text-uppercase">see website</p>
											<img className="ms-4" src={arrow} alt="" />
										</div> */}
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

export default ProjectHero;

import React from "react";
import featuredProjects from "../assets/images/featuredProjects.svg";

const FeaturedProject = () => {
	return (
		<div className="featured_projects_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex flex-column justify-content-center align-items-center">
								<h1 className="f40 text-center fw800">Featured projects</h1>
								<div className="line_ my-3"></div>
							</div>

							<div className="body">
								<img className="w-100" src={featuredProjects} alt="" />

								<div className="projects_cta_container">
									<p className="text-uppercase color2 fw600 let_space mb-1">
										projects
									</p>
									<h4 className="let_space fw600">Paymob Smart Payments</h4>
									<p className="let_space fw600 mb-5">
										Transparent auction marketplace for financial services to
										access emerging markets
									</p>
									<button className="bg_color2 text-white px-4 border-0 rounded-pill py-2 px-5 text-uppercase fw-light">
										Website
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

export default FeaturedProject;

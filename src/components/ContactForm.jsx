import React from "react";
import location from "../assets/images/icons/location.svg";
import message from "../assets/images/icons/message.svg";
import telegram from "../assets/images/icons/telegram.svg";
import linkdin from "../assets/images/icons/linkdin.svg";
import youtube from "../assets/images/icons/youtube.svg";

const ContactForm = () => {
	return (
		<div className="contact_form_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="f58 fw900 color2">
								Turn <span className="color3">ideas</span> <br /> into
								established <br /> business
							</h1>

							<div className="row form_container">
								<div className="col-6">
									<div className="row">
										<div className="d-flex align-items-start">
											<img src={location} alt="" />
											<p className="mb-0 ms-3 fw-light f18">
												Level 39 <br /> One Canada Square, Canary Wharf, <br />{" "}
												London E14 5AB
											</p>
										</div>
										<div className="d-flex align-items-center mt-5">
											<img src={message} alt="" />
											<p className="mb-0 ms-3 fw-light f18">
												kosta@paymobpos.com
											</p>
										</div>
										<div className="col-12 d-flex align-items-center mt-5">
											<img src={telegram} alt="" />
											<img className="mx-3" src={youtube} alt="" />
											<img src={linkdin} alt="" />
										</div>
									</div>
								</div>
								<div className="col-6">
									<form
										action="
                  "
										className="row gy-4"
									>
										<div className="col-12">
											<input
												className="w-100 py-2 px-2"
												type="text"
												name=""
												id=""
												placeholder="Name*"
											/>
										</div>
										<div className="col-12">
											<input
												className="w-100 py-2 px-2"
												type="text"
												name=""
												id=""
												placeholder="Email*"
											/>
										</div>
										<div className="col-12">
											<input
												className="w-100 py-2 px-2"
												type="text"
												name=""
												id=""
												placeholder="Phone"
											/>
										</div>
										<div className="col-12">
											<textarea
												name=""
												id=""
												className="w-100 py-2 px-2"
												placeholder="Message"
												rows="6"
											></textarea>
										</div>

										<div className="col-12">
											<button className="text-uppercase bg_color2 px-5 py-2 rounded-pill text-white border-0 let_space">
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;

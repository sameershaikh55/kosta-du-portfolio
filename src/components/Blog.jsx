import React from "react";
import blogPlaceholder from "../assets/images/blogPlaceholder.svg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const Blog = () => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	return (
		<div id="blog" className="blog_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center">
								<h1 className="mb-0 fw900">Blog</h1>
								<div className="d-flex align-items-center mt-3 mt-md-0">
									<div className="arrow_btns d-flex align-items-center me-4">
										<button ref={navigationPrevRef}>
											<IoIosArrowBack fontSize={22} />
										</button>
										<button ref={navigationNextRef} className="ms-3">
											<IoIosArrowForward fontSize={22} />
										</button>
									</div>
									<button className="text-uppercase bg_color3 text-white border-0 px-5 py-2 rounded-pill">
										read more
									</button>
								</div>
							</div>

							<div className="mt-5">
								<div className="swiper_container">
									<Swiper
										spaceBetween={25}
										navigation={{
											prevEl: navigationPrevRef.current,
											nextEl: navigationNextRef.current,
										}}
										onInit={(swiper) => {
											swiper.params.navigation.prevEl =
												navigationPrevRef.current;
											swiper.params.navigation.nextEl =
												navigationNextRef.current;
											swiper.navigation.init();
											swiper.navigation.update();
										}}
										breakpoints={{
											// when window width is >= 768px
											575: {
												width: 575,
												slidesPerView: 1,
											},
											768: {
												width: 768,
												slidesPerView: 2,
											},
											// when window width is >= 640px
											992: {
												slidesPerView: 3,
											},
											// when window width is >= 768px
										}}
										className="mySwiper"
									>
										{[1, 1, 1, 1, 1, 1].map((item, i) => {
											return (
												<SwiperSlide key={i}>
													<div className="position-relative slider_">
														<img
															className="w-100"
															src={blogPlaceholder}
															alt=""
														/>

														<div className="position-absolute d-flex w-100 justify-content-around">
															<div className="d-flex flex-column text-white">
																<p className="f18 mb-0">Lorem ipsum dolor </p>
																<p className="f14 fw-light mb-0">Category</p>
															</div>
															<div>
																<button className="ms-3">
																	<IoIosArrowForward
																		fontSize={22}
																		color="#3359CF"
																	/>
																</button>
															</div>
														</div>
													</div>
												</SwiperSlide>
											);
										})}
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;

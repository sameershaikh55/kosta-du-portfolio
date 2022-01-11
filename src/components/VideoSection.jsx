import React from "react";
import videoPlc from "../assets/images/videoPlc.svg";
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

const VideoSection = () => {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	return (
		<div className="videos_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-10 col-sm-8 col-lg-6">
									<h1 className="f58 fw900 color2">Videos</h1>
									<p className="f18 mt-4 mt-md-5">
										Entrepreneurial tips, advice and a behind the scenes look at
										running a fintech startup.
									</p>
								</div>
							</div>

							<div className="mt-5 row">
								<div className="col-12 d-flex flex-xl-column justify-content-between justify-content-md-start col-xl-2 pt-5 recent_videos mb-4 mb-xl-0">
									<h1 className="mb-0">
										Recent <br className="d-none d-xl-block" /> Videos
									</h1>
									<div className="arrow_btns d-flex align-items-center mt-xl-4">
										<button ref={navigationPrevRef}>
											<IoIosArrowBack fontSize={22} />
										</button>
										<button ref={navigationNextRef} className="ms-3">
											<IoIosArrowForward fontSize={22} />
										</button>
									</div>
								</div>
								<div className="col-12 col-xl-10">
									<div className="position-relative bg-white">
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
													slidesPerView: 2,
												},
												// when window width is >= 768px
												// when window width is >= 640px
												1400: {
													slidesPerView: 3,
												},
												// when window width is >= 768px
											}}
											className="mySwiper"
										>
											{[1, 1, 1, 1, 1, 1].map((item, i) => {
												return (
													<SwiperSlide key={i}>
														<div className="slider_">
															<img className="w-100" src={videoPlc} alt="" />

															<div className="w-75 mx-auto text-center f18 mt-2">
																Web Summit 2021 | What To Do At The Physical
																Event (Part 2)
															</div>
															<p className="text-uppercase f14 text-center color2">
																1 week ago
															</p>
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
		</div>
	);
};

export default VideoSection;

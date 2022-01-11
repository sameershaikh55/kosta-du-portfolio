import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
// import "swiper/swiper-bundle.min.css";

// swiper core styles
// import "swiper/swiper.min.css";

// import Swiper core and required modules
// import SwiperCore, { EffectCoverflow } from "swiper";

// install Swiper modules
// SwiperCore.use([EffectCoverflow]);

const Blog = () => {
	return (
		<div className="blog_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="d-flex justify-content-between align-items-center">
								<h1 className="mb-0 fw900">Blog</h1>
								<div className="d-flex align-items-center">
									<div className="arrow_btns d-flex align-items-center me-4">
										<button>
											<IoIosArrowBack fontSize={22} />
										</button>
										<button className="ms-3">
											<IoIosArrowForward fontSize={22} />
										</button>
									</div>
									<button className="text-uppercase bg_color3 text-white border-0 px-5 py-2 rounded-pill">
										read more
									</button>
								</div>
							</div>

							<div>
								{/* <Swiper
									effect={"coverflow"}
									grabCursor={true}
									centeredSlides={true}
									loop={true}
									slidesPerView={2}
									coverflowEffect={{
										rotate: 50,
										stretch: 0,
										depth: 100,
										modifier: 1,
										slideShadows: true,
									}}
									pagination={true}
									className="mySwiper"
								>
									{[1, 1, 1, 1].map((item, i) => {
										return <SwiperSlide key={i}>lorem</SwiperSlide>;
									})}
								</Swiper> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;

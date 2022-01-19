import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import { getMediumPosts } from "../services/medium";
import BlogCard from "./cards/BlogCard";

// install Swiper modules
SwiperCore.use([Navigation]);

const Blog = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		getMediumPosts().then((res) => setBlogs(res.items));
	}, []);

	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);

	if (!blogs.length) {
		return "";
	}

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
									<a target="blank" href="https://kostadu.medium.com/">
										<button className="text-uppercase bg_color3 text-white border-0 px-5 py-2 rounded-pill">
											read more
										</button>
									</a>
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
												slidesPerView: 2,
											},
											// when window width is >= 768px
										}}
										className="mySwiper"
									>
										{blogs.map((item, i) => {
											return (
												<SwiperSlide key={i}>
													<BlogCard item={item} />
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

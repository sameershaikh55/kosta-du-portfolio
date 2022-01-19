import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BlogCard = ({ item }) => {
	return (
		<>
			<style jsx>{`
				.line-limit-1 {
					display: -webkit-box;
					-webkit-line-clamp: 1;
					text-overflow: ellipsis;
					overflow: hidden;
					width: 100%;
					-webkit-box-orient: vertical;
				}
				.line-limit-2 {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					overflow: hidden;
					width: 100%;
					-webkit-box-orient: vertical;
				}
			`}</style>

			<div className="position-relative slider_ each_slide">
				<div className="img_container position-relative">
					<img className="w-100" src={item.thumbnail} alt="" />
					<div className="overlay"></div>
				</div>

				<div className="position-absolute d-flex w-100 justify-content-between px-3">
					<div className="d-flex flex-column text-white">
						<p className="f18 fw600 mb-0 line-limit-1">{item.title}</p>
						<div className="row">
							<div className="col-10">
								<p className="f14 fw-light mb-0 d-flex flex-wrap line-limit-2">
									{item.categories.slice(0, 3).map((item2, i) => {
										return (
											<span key={i}>
												&nbsp;{item2}
												{i !== item.categories.length - 1 && ","}{" "}
											</span>
										);
									})}
								</p>
							</div>
						</div>
					</div>
					<div>
						<a target="blank" href={item.link}>
							<button className="ms-3">
								<IoIosArrowForward fontSize={22} color="#3359CF" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogCard;

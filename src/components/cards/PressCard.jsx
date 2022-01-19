import React from "react";
import arrow from "../../assets/images/arrow.svg";

const PressCard = ({ item }) => {
	return (
		<>
			<style jsx>{`
				.line-limit-2 {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					text-overflow: ellipsis;
					overflow: hidden;
					width: 100%;
					-webkit-box-orient: vertical;
				}
			`}</style>

			<div
				data-aos="fade"
				className="press_card d-flex flex-column justify-content-between p-4"
			>
				<div>
					<div className="row">
						<div className="col-6">
							<img className="w-100" src={item.logo} alt="" />
						</div>
					</div>
					<h3 className="line-limit-2 my-5 montserrat fw700">{item.title}</h3>
				</div>
				<a
					href={item.link}
					target="blank"
					className="d-flex align-items-center text-decoration-none"
				>
					<p className="mb-0">LEARN MORE</p>
					<img className="ms-4" src={arrow} alt="" />
				</a>
			</div>
		</>
	);
};

export default PressCard;

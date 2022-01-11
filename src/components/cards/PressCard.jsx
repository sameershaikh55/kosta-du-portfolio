import React from "react";
import fontechLogo from "../../assets/images/fontechLogo.svg";
import arrow from "../../assets/images/arrow.svg";

const PressCard = () => {
	return (
		<div className="press_card p-4">
			<img src={fontechLogo} alt="" />
			<h2 className="my-5 montserrat fw700">Paymob Tech on Fintech Scotland</h2>
			<div className="d-flex align-items-center">
				<p className="mb-0">LEARN MORE</p>
				<img className="ms-4" src={arrow} alt="" />
			</div>
		</div>
	);
};

export default PressCard;

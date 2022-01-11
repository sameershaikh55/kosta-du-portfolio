import React from "react";

const InitiativeCard = ({ picture, decs }) => {
	return (
		<div className="initiative_card w-100">
			<img className="w-100" src={picture} alt="" />

			<div className="text-white p-4 overlay">{decs}</div>
		</div>
	);
};

export default InitiativeCard;

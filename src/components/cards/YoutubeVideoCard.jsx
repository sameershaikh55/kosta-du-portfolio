import React from "react";
import { formatDistanceStrict } from "date-fns";

const YoutubeVideoCard = ({ item }) => {
	return (
		<div className="slider_">
			<a
				target="_blank"
				className="text-decoration-none text-black"
				href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
			>
				<img
					className="w-100"
					src={item.snippet.thumbnails.medium.url}
					alt=""
				/>

				<div className="w-75 mx-auto text-center f18 mt-2">
					{item.snippet.title}
				</div>
				<p className="text-uppercase f14 text-center color2">
					{formatDistanceStrict(new Date(item.snippet.publishedAt), Date.now())}{" "}
					ago
				</p>
			</a>
		</div>
	);
};

export default YoutubeVideoCard;

export async function getMediumPosts() {
	try {
		let response;
		const mediumRSSFeed = "https://medium.com/feed/@kostadu";
		const rssToJsonApi =
			"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kostadu";
		const data = { params: { rss_url: mediumRSSFeed } };
		response = await fetch(rssToJsonApi);
		return await response.json();
	} catch (e) {
		throw new Error("Error fetching posts", e);
	}
}

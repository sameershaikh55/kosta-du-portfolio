export default async function getYouTubeVideos() {
	const API_KEY = "AIzaSyCj5JJcWFtp48WS7m9ovR5LCDiCeVBLvsc";
	const playlistId = "UUqldLtVWPYc4loYELtAacGA";
	const baseUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=6&key=${API_KEY}`;

	const results = await fetch(baseUrl);

	return await results.json();
}

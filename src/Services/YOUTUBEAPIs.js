const YOUTUBE_API_KEY = "AIzaSyApuIj4tY2qfOgFxg9cBxoVYa_FYJ77OwQ";

/**
** We can call
** export const YOUTUBE_MOST_POPULAR_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=[YOUTUBE_API_KEY]';

 */ 

export const YOUTUBE_MOST_POPULAR_VIDEOS_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + YOUTUBE_API_KEY;

// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]
export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+YOUTUBE_API_KEY+"&id="

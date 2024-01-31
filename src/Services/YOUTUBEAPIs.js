const YOUTUBE_API_KEY = "AIzaSyDQ1o3j2ppq0chPRzwethIs2wNO7kdiGGo";


/**
** // We can call like this also
**export const YOUTUBE_MOST_POPULAR_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=[YOUTUBE_API_KEY]';

 */ 
export const YOUTUBE_API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${YOUTUBE_API_KEY}`,
    Accept: 'application/json',
  },
};


export const YOUTUBE_MOST_POPULAR_VIDEOS_API =
	'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN';



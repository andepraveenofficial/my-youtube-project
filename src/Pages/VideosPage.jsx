
/* -----> Third Party Packages <----- */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

/* -----> External Components <----- */
import VideoCard from '../Components/VideoCard.jsx';
import VideoCardShimmer from '../Components/VideoCardShimmer.jsx';

/* -----> Hard Code <----- */
import { mostPopularVideosHardCode } from './../Utils/hardCode.js';

/* -----> APIs <------ */
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from '../Services/YOUTUBEAPIs.js';


/* -----> Component <----- */
const VideosPage = () => {
    console.log("VideosPage")

    // Local State
    const [mostPopularVideos, setMostPopularVideos] = useState([])

    // Methods
    const getMostPopularVideos = async () => {
        console.log("mostPopularVideos API called")

        const url = YOUTUBE_MOST_POPULAR_VIDEOS_API;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);
        const videosList = data.items;
        setMostPopularVideos(videosList)

    }

    // Effects
    useEffect(() => {
        getMostPopularVideos()
    }, [])

    // Rturn JSX
    return (
        <div className='flex flex-row flex-wrap'>
            {mostPopularVideos.map((each) => (
                <Link to={`/watch/${each.id}`} key={each.id}>
                    <VideoCard data={each} />
                </Link>))}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((each, index) => (<VideoCardShimmer key={index} />))}

        </div>
    )
}

/* -----> Export <----- */
export default VideosPage

/* -----> External Components <----- */
import VideoCard from '../Components/VideoCard.jsx';
import VideoCardShimmer from '../Components/VideoCardShimmer.jsx';

/* -----> Hard Code <----- */
import { mostPopularVideosHardCode } from './../Utils/hardCode.js';

/* -----> Component <----- */
const VideosPage = () => {
    console.log("VideosPage")

    // Rturn JSX
    return (
        <div className='flex flex-row flex-wrap'>
            <VideoCard data={mostPopularVideosHardCode} />
            <VideoCardShimmer />
        </div>
    )
}

/* -----> Export <----- */
export default VideosPage
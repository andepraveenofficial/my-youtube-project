/* -----> Third Party Packages <----- */
import { useEffect, useState } from "react";

/* -----> APIs <----- */
import { YOUTUBE_CHANNEL_API } from "../Services/YOUTUBEAPIs";
import { useNavigate } from "react-router-dom";

/* -----> Component <----- */
const VideoCard = (props) => {
    console.log("   VideoCard")

    // Local State
    const [channelThumbnail, setChannelThumbnail] = useState("")

    // Routing
    const navigate = useNavigate()

    // props object destructuring
    const { data } = props
    const { snippet, statistics, contentDetails, } = data;
    const { thumbnails, title, channelTitle, channelId } = snippet;
    const { viewCount } = statistics;
    const { duration } = contentDetails;

    const cardObject = {
        thumbnailUrl: thumbnails.medium.url,
        title,
        channelName: channelTitle,
        views: viewCount,
        duration,
    };

    const minutes = cardObject.duration.slice(2, -1).split('M')[0];
    const seconds = cardObject.duration.slice(5, -1).split('S')[0];

    // Methods 
    const getChannelData = async () => {
        const url = YOUTUBE_CHANNEL_API + channelId
        const response = await fetch(url)
        const data = await response.json()
        console.log(data?.items[0]?.snippet?.thumbnails?.default?.url)
        const thumbnail = data?.items[0]?.snippet?.thumbnails?.default?.url
        setChannelThumbnail(thumbnail)
    }

    useEffect(() => {
        getChannelData()
    }, [])


    // Return JSX
    return (

        <div className="w-60 m-3 ">

            <div>
                <img className="rounded-lg" src={cardObject.thumbnailUrl} alt="video thumbnail" />
            </div>

            <div className="mt-3 flex flex-row justify-start">
                <div className="w-[88px] h-[88px]">
                    <img className="w-9 rounded-full relative" alt="Channel Image" src={channelThumbnail} />
                </div>

                <div className="ml-3">
                    <b className="relative text-[12px] font-roboto text-white">
                        <p className="m-0">{cardObject.title}</p>
                    </b>
                    <p className="text-[12px] font-roboto text-white">{cardObject.channelName}</p>

                    <div className="flex flex-row items-start gap-2 justify-start mt-1 text-[12px] font-roboto text-gray-500">
                        <p>{cardObject.views} Views</p>
                        <p>{`${minutes}min ${seconds}sec`} </p>
                    </div>
                </div>
            </div>

        </div >


    );

}

/* -----> Export <----- */
export default VideoCard
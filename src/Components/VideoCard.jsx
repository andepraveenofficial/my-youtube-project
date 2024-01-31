

/* -----> Component <----- */
const VideoCard = (props) => {
    console.log("   VideoCard")

    // props object destructuring
    const { data } = props
    const { snippet, statistics, contentDetails } = data;
    const { thumbnails, title, channelTitle } = snippet;
    const { viewCount } = statistics;
    const { duration } = contentDetails;

    const cardObject = {
        thumbnailUrl: thumbnails.medium.url,
        title,
        channelName: channelTitle,
        views: viewCount,
        duration,
    };


    // Return JSX
    return (
        <div className="w-60 m-3 ">

            <div>
                <img className="rounded-lg" src={cardObject.thumbnailUrl} alt="video thumbnail" />
            </div>

            <div className="mt-3 flex flex-row justify-start">
                <div>
                    <img className=" w-24 rounded-full relative" alt="Channel Image" src="https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s68-c-k-c0x00ffffff-no-rj" />
                </div>

                <div className="ml-3">
                    <b className="relative text-[12px] font-roboto text-white-color">
                        <p className="m-0">{cardObject.title}</p>
                    </b>
                    <p className="text-[12px] font-roboto text-gray-500">{cardObject.channelName}</p>

                    <div className="flex flex-row items-start gap-2 justify-start mt-1 text-[12px] font-roboto text-gray-500">
                        <p>{cardObject.views} Views</p>
                        <p>{cardObject.duration} </p>
                    </div>
                </div>
            </div>

        </div>
    );

}

/* -----> Export <----- */
export default VideoCard
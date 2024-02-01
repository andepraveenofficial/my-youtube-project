import { CgProfile } from "react-icons/cg";
/* -----> Third Party Packages <----- */
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player'

/* -----> Component <----- */
const WatchPage = () => {
    console.log("WatchPage")

    const params = useParams()
    console.log(params)
    const { videoId } = params

    // Rturn JSX
    return (
        <div className="m-2 flex flex-row gap-3">
            {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"></iframe> */}
            <div>     <ReactPlayer url={'https://www.youtube.com/watch?v=' + videoId} controls width='1280px'
                height='720px' /></div>
            <div className="bg-blue-500 w-80 h-[640px] rounded-md p-3 text-white flex flex-col">
                <h1 className="text-white">Live Chat</h1>
                <div className="pt-5">
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                    <div className="flex flex-row items-center gap-3"><CgProfile /> Hello 🌭🥙</div>
                </div>
                <div>
                    <input type="text" className="rounded-md" /> <button className="bg-slate-500 px-4 rounded-md cursor-default">Chat</button>
                </div>
            </div>
        </div>
    )
}

/* -----> Export <----- */
export default WatchPage
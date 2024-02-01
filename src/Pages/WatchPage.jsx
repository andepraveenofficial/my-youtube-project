/* -----> Third Party Packages <----- */
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player'
import { useRef } from "react";

/* -----> External Components <----- */
import LiveChat from './../Components/LiveChat.jsx';

/* -----> Global Store <----- */
import { addLiveChatMessage } from "../Store/liveChatSlice.js";
import { useDispatch } from "react-redux";


/* -----> Component <----- */
const WatchPage = () => {
    console.log("WatchPage")

    const params = useParams()
    console.log(params)
    const { videoId } = params

    // Reference
    const chatText = useRef(null)

    //Global Store 
    const dispatch = useDispatch()

    // Rturn JSX
    return (
        <div className="m-2 flex flex-row gap-3">
            {/* <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"></iframe> */}
            <div> <ReactPlayer url={'https://www.youtube.com/watch?v=' + videoId} controls width='1280px'
                height='720px' /></div>
            <div className="bg-gray-400 w-96 h-[640px] rounded-md p-3 text-white flex flex-col">
                <h1 className="text-white">Live Chat</h1>
                <div className="pt-5 flex-grow overflow-scroll flex flex-col-reverse">
                    <LiveChat />
                </div>
                <form className="mt-3" onSubmit={(event) => {
                    event.preventDefault()
                    const chatObject = {
                        color: "green",
                        name: "Ande Praveen",
                        message: chatText.current.value,
                        emoji: "👨‍🎓"
                    }

                    dispatch(addLiveChatMessage(chatObject))
                }}>
                    <input ref={chatText} type="text" className="rounded-md text-black p-1 w-72" />
                    <button className="bg-slate-500 px-4 p-2 rounded-md cursor-pointer ml-1" type="submit">Chat</button>
                </form>
            </div>
        </div>
    )
}

/* -----> Export <----- */
export default WatchPage
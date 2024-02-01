/* -----> Third Party Packages <----- */
import { useEffect } from "react";

/* -----> Helpers <----- */
import { randomColor, randomEmoji, randomMessage, randomName } from "../Helpers/randomDataGenerate";

/* -----> Assets <----- */
import { CgProfile } from "react-icons/cg";


/* -----> Gobal Store <----- */
import { addLiveChatMessage } from "../Store/liveChatSlice";
import { useSelector, useDispatch } from "react-redux";

/* -----> Component <----- */
const LiveChat = () => {

    // Global Store
    const liveChatMessages = useSelector((store) => store.livechat)
    console.log(liveChatMessages)
    const dispatch = useDispatch()


    useEffect(() => {
        const timerId = setInterval(() => {
            const chatObject = {
                color: randomColor(),
                name: randomName(),
                message: randomMessage(),
                emoji: randomEmoji()
            }

            dispatch(addLiveChatMessage(chatObject))

        }, 300);

        return () => {
            clearInterval(timerId);
        };
    }, []);


    // Return JSX
    return (
        <div>
            {/* className="pt-5 flex-grow overflow-scroll flex flex-col" */}
            {liveChatMessages.map((each, index) =>
                <div key={index} className="flex flex-row items-end justify-start gap-3 mt-2 self-end">
                    <CgProfile size={20} color={each.color} />
                    <div className="flex flex-row">
                        <b className="mr-2">{each.name}</b>
                        <p>{each.message}</p>
                        <p>{each.emoji}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

/* -----> Export <----- */
export default LiveChat
/* -----> Third Party Packages <----- */
import { Outlet } from "react-router-dom"


/* -----> Component <----- */
const Body = () => {
    console.log("Body Page")

    // Return JSX
    return (
        <div className="flex-grow bg-green-300 h-[1000px] -z-10">
            <Outlet />
        </div>
    )
}

/* -----> Export <----- */
export default Body
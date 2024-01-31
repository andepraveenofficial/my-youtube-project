/* -----> Third Party Packages <----- */
import { Outlet } from "react-router-dom"


/* -----> Component <----- */
const Body = () => {
    console.log("Body Page")

    // Return JSX
    return (
        <div className="flex-grow bg-[#000000] -z-10">
            <Outlet />
        </div>
    )
}

/* -----> Export <----- */
export default Body
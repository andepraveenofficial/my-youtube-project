/* -----> External Components <----- */
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./Layouts/Header"
import Sidebar from "./Layouts/Sidebar"
import Body from "./Pages/Body"
import VideosPage from "./Pages/VideosPage"
import WatchPage from "./Pages/WatchPage"

/* -----> Global State <----- */
import { useSelector } from "react-redux"

/* -----> Component <----- */
const AppLayout = () => {
  console.log("AppLayout")

  // Global State 
  const sidebarToggle = useSelector((state) => state.sidebar.isOpen)
  console.log(sidebarToggle)

  // Return JSX
  return (

    <div className="">
      <Header />
      <div className="absolute flex flex-row w-screen mt-16 bg-black -z-10">
        {sidebarToggle && <Sidebar />}
        <Body />
      </div>
    </div>
  )

}


/* -----> Routing Setup <----- */
const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    { path: "/", element: <VideosPage /> },
    { path: "/watch/:videoId", element: <WatchPage /> },
  ]
}],)


const App = () => {
  return <RouterProvider router={appRouter} />
}



/* -----> Export <----- */
export default App



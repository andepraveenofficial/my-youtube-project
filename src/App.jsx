/* -----> External Components <----- */
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./Layouts/Header"
import Sidebar from "./Layouts/Sidebar"
import Body from "./Pages/Body"
import VideosPage from "./Pages/VideosPage"
import WatchPage from "./Pages/WatchPage"


/* -----> Component <----- */
const AppLayout = () => {
  console.log("AppLayout")

  // Return JSX
  return (
    <div>
      <Header />
      <div className="absolute flex flex-row w-screen mt-16">
        <Sidebar />
        <Body />
      </div>
    </div>
  )

}


/* -----> Routing Setup <----- */
const appRouter = createBrowserRouter([{
  basename: "https://my-youtube-website.netlify.app",
  path: "/",
  element: <AppLayout />,
  children: [
    { path: "", element: <VideosPage /> },
    { path: "watch", element: <WatchPage /> },
  ]
}])


const App = () => {
  return <RouterProvider router={appRouter} />
}



/* -----> Export <----- */
export default App



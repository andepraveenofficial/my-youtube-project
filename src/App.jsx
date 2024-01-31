/* -----> External Components <----- */
import Header from "./Layouts/Header"
import Sidebar from "./Layouts/Sidebar"
import Body from "./Pages/Body"

/* -----> Component <----- */
const App = () => {
  console.log("App")

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

/* -----> Export <----- */
export default App



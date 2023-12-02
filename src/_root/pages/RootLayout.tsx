import { Outlet } from "react-router-dom"
import Topbar from "@/components/shared/Topbar"
import LeftSideBar from "@/components/shared/LeftSideBar"
const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar/>
      {/* <Nav/> */}
      <LeftSideBar/>
      <section className="flex flex-1 h-full">
        <Outlet/>
      </section>
      <div className="">Bottom Bar</div>
    </div>
  )
}

export default RootLayout
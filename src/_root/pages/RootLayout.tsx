import { Outlet } from "react-router-dom"
import Topbar from "@/components/shared/Topbar"
import LeftSideBar from "@/components/shared/LeftSideBar"
import View_Post from "@/components/PostScreen/View_Post"
import PostScreen from "@/components/PostScreen/PostScreen"
const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar/>
      {/* <Nav/> */}
      <LeftSideBar/>
      <section className=" w-full  items-center justify-center flex flex-1 h-full">
        <Outlet/>
      </section>
      <div className="">Bottom Bar</div>
    </div>
  )
}

export default RootLayout
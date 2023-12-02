import { Outlet } from "react-router-dom"
import {Nav} from "../../nav"
import Topbar from "@/components/shared/Topbar"
const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar/>
      <Nav/>
      <section className="flex flex-1 h-full">
        <Outlet/>
      </section>
      <div className="">Bottom Bar</div>
    </div>
  )
}

export default RootLayout
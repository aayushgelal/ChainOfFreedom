import { Link, NavLink, useLocation } from "react-router-dom"
import { Button } from "../ui/button";

type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/people.svg",
    route: "/all-users",
    label: "People",
  },
  {
    imgURL: "/assets/icons/bookmark.svg",
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create Post",
  },
];
const LeftSideBar = () => {
    const user:{id: number , email: string, imageUrl: string, name: string, username: string} = {
        id: 1,
        email: "johndoe@gmail.com",
        imageUrl: "",
        name: "John Doe",
        username: "johndoe"
    };
    const pathname = useLocation();
  return (
    <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
            <Link to="/">
                <svg  className="w-7" fill="#fff" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M860.392 383.803v138.148c0 220.601-178.834 399.432-399.432 399.432-220.69 0-399.524-178.831-399.524-399.432V313.874c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v208.077c0 243.223 197.172 440.392 440.392 440.392 243.312 0 440.484-197.169 440.484-440.392V383.803c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-360.39-77.417c0-101.35 82.161-183.511 183.511-183.511 88.404 0 163.792 62.986 180.221 148.769 2.128 11.109 12.858 18.39 23.967 16.262s18.39-12.858 16.262-23.967C883.854 158.944 791.658 81.915 683.513 81.915c-123.971 0-224.471 100.5-224.471 224.471 0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"></path><path d="M61.494 472.985c0 107.944 87.507 195.451 195.451 195.451h42.813c88.498 0 160.246-71.747 160.246-160.246v-42.813c0-107.944-87.507-195.451-195.451-195.451H61.494v203.059zm238.265 236.41h-42.813c-130.566 0-236.411-105.845-236.411-236.411V267.518c0-21.295 17.259-38.554 38.554-38.554h205.466c130.566 0 236.411 105.845 236.411 236.411v42.813c0 111.12-90.086 201.206-201.206 201.206z"></path><path d="M500.151 447.386V304.2c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v143.186c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48zM783.59 291.995c0 23.501-19.046 42.547-42.547 42.547s-42.547-19.046-42.547-42.547c0-23.501 19.046-42.547 42.547-42.547s42.547 19.046 42.547 42.547zm103.787 110.23c25.328-8.62 55.127-6.208 77.434 6.444 9.838 5.58 22.338 2.128 27.918-7.71s2.128-22.338-7.71-27.918c-32.658-18.523-74.617-21.918-110.838-9.592-10.708 3.644-16.434 15.278-12.79 25.986s15.278 16.434 25.986 12.79z"></path><path d="M883.488 291.468c40.695 3.635 74.884 50.961 70.788 96.819-1.006 11.266 7.311 21.215 18.577 22.221s21.215-7.311 22.221-18.577c6.003-67.205-43.326-135.489-107.941-141.261-11.266-1.006-21.215 7.311-22.221 18.577s7.311 21.215 18.577 22.221z"></path></g></svg>
            </Link>
      
          <Link to={`/profile/${user?.id}`} className="flex gap-3 items-center">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col">
              <p className="body-bold">{user.name}</p>
              <p className="text-[14px] font-normal leading-[140%] text-light-3">@{user.username}</p>
            </div>
          </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;

            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}>
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4">
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={()=> console.log("clicked")}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
        
    </nav>
  )
}

export default LeftSideBar
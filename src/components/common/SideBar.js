import { RxDashboard } from "react-icons/rx";
import { Link, matchPath, useLocation } from "react-router-dom"

import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useSelector } from "react-redux";


const SideBar=()=>{

    const sideData=[
        {
            id:1,
            title:"Dashboard",
            path:"/dashboard",
            icon:<RxDashboard></RxDashboard>
        },
        {
            id:2,
            title:"Profile",
            path:"/profile",
            icon:<CgProfile></CgProfile>
        },
        {
            id:1,
            title:"Order",
            path:"/order",
            icon:<CiShoppingCart></CiShoppingCart>
        },
        {
            id:1,
            title:"Logout",
            path:"/",
            icon:<RiLogoutCircleRLine></RiLogoutCircleRLine>
        },
    ]
     const location=useLocation();
     const {userId}=useSelector((state)=>state.auth)
    const matchRoute = (route) => {

        return matchPath({ path: route }, location.pathname)
      }
    return (
        <div className="h-[560px] w-[200px] border-r-2  ">
             {
                sideData.map((index,id)=>{
                    return (
                       <div className=" flex flex-col gap-3  " key={id}>
                        <Link to={index.path} className={`${
                        matchRoute(index?.path)
                          ? " font-semibold bg-white text-black h-9 rounded-lg flex gap-2 mx-auto w-[190px] mt-3"
                          : "text-white font-semibold hover:bg-white-100 hover:text-black h-9 rounded-lg flex gap-2 mx-auto w-[190px] mt-3 "
                      }`} >
                        <div className="my-auto mx-2">{index.icon}</div>
                        <div className="my-auto">{index.title}</div>
                        </Link>
                        
                        </div>
                    )
                })
             }
        </div>
    )
}

export default SideBar;
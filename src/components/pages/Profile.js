import SideBar from "../common/SideBar";
  import Navbar from "../common/Navbar";
import { useSelector } from "react-redux";

const Profile=()=>{

    const {displayPicture}=useSelector((state)=>state.auth)
    const {email}=useSelector((state)=>state.auth)
    const {name}=useSelector((state)=>state.auth)
    return (
        <div className="flex flex-col min-h-screen w-full relative">
        <Navbar></Navbar>
    <div className="flex "><SideBar></SideBar>
   <div className="flex flex-col"><p className="font-bold text-3xl text-white m-5 mt-8">Your Profile </p>
   <div className="bg-[#FAFAFA] w-[1100px] m-5 h-[40px] ">
       <p className="m-2 font-semibold">Profile  Information</p>
          </div>
          <div className="bg-[#FAFAFA] w-[1100px] flex ml-5 mt-[-18px] h-[200px]">
                 <img src={displayPicture} className="rounded-full w-[80px] h-[80px] m-3 mt-7"></img>
                  <div className="flex flex-col ml-4  gap-3 mt-4">
                    <p className="font-bold text-2xl text-black">{name}</p>
                    <p>Email: {email}</p>
                  </div>
          </div>
          <div className="m-5 flex flex-col ">
            <p className=" text-white text-2xl font-semibold">About</p>
            <p className="text-xl mt-4 text-white">Data Tracking And Billing</p>
            <p className="text-white mt-2">Efficiently track user activities, including total duration, logins, and device information. Utilize powerful analytics to gain insights into user behavior and optimize your services.</p>
          </div>
   </div> 
    
    </div>    

  </div>
    )
}
export default Profile
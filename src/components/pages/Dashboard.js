
import Navbar from "../common/Navbar"
import SideBar from "../common/SideBar"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getAllProduct } from "../../services/operations/productAPI"
import { useNavigate } from "react-router-dom"
import { getAllData } from "../../services/operations/dataAPI"
import { LuClock4 } from "react-icons/lu";
import { IoMdLogIn } from "react-icons/io";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";


const Dashboard=()=>{
          
    const {userId}=useSelector((state)=>state.auth)
    const {name}=useSelector((state)=>state.auth)
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [data, setData] = useState([]);
    const [location,setLocation]=useState("");
    const [deviceInfo,setDeviceInfo]=useState("");
    const [logins,setLogins]=useState();
    const [totalDuration,setTotalDuration]=useState("");
    const [totalTransactions,setTotalTransactions]=useState("");
    


  useEffect(() => {
    const fetchData = async () => {
        console.log(userId)
      const result = await getAllData(userId);
      setData(result.data);
      setLocation(result.data.location)
      setDeviceInfo(result.data.deviceInfo);
      setTotalTransactions(result.data.totalTransactions);
      setTotalDuration(result.data.totalDuration);
      //console.log(result.data.features);


    };

    if (userId) {
      fetchData();
    }
  }, [userId]);
   
    const dashboardDetails=[

        {
            id:1,
            icon:<LuClock4></LuClock4>,
            title:"Total Duration (hr)",
            details:`${totalDuration}`
        },
        {
            id:2,
            icon:<AiOutlineTransaction></AiOutlineTransaction>,
            title:"Total Transaction",
            details:`${totalTransactions}`
        },
        {
            id:3,
            icon:<IoMdLogIn></IoMdLogIn>,
            title:"Logins",
            details:`${totalDuration}`
        },
        {
            id:4,
            icon:<MdOutlineDashboardCustomize></MdOutlineDashboardCustomize>,
            title:"Device Info",
            details:`${deviceInfo}`
        },
        {
            id:5,
            icon:<IoIosGlobe></IoIosGlobe>,
            title:"Location",
            details:`${location}`
        },
    ]

      
    return (
        <div className="flex flex-col min-h-screen w-full relative">
            
              <Navbar></Navbar>
             <div className="flex">
                <SideBar></SideBar>
               <div className="flex flex-col"><p className="font-bold text-3xl text-white m-5 mt-8">Welcome {name}</p>
               <div className="flex flex-wrap gap-6 mt-6 m-5 ">
                    {
                        dashboardDetails.map((index,id)=>{
                            return(
                                <div className="felx flex-wrap gap-11" key={id} >
                                 <div className="w-[250px] flex  rounded-lg h-[150px] bg-white">
                                       <div className="text-3xl text-[#8C8C8C] ml-4 mt-10">
                                        {index.icon}
                                        </div>

                                        <div className="mt-4 flex flex-col text-xl font-semibold text-[#8C8C8C] ">
                                           <p>{index.title}</p> 
                                           <p className="ml-6 text-2xl  text-black">{index.details}</p>
                                        </div>
                                    </div>
                                     
                                </div>
                            )
                        })
                    }
                </div>
               </div> 

             </div>
              
         </div>
    )
}

export default Dashboard
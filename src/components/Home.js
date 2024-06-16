import { FcGoogle } from "react-icons/fc";
import { auth, googleAuthProvider } from "../utils/firebase"
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from "react-redux";
import { setEmail,setUserId } from "../slices/authSlice";
import { createUser } from "../services/operations/authAPI";
import { setName } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { setdisplayPicture } from "../slices/authSlice";

const Home=()=>{

    const dispatch=useDispatch();
     const navigate=useNavigate();
    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result.user);
            console.log(result.user.displayName);
            console.log(result.user.email);
            console.log(result.user.uid);
            console.log(result.user.photoURL)
            dispatch(setName(result.user.displayName))
            dispatch(setEmail(result.user.email));

            dispatch(setdisplayPicture(result.user.photoURL))
            dispatch(createUser(result.user.email,navigate))
            
            localStorage.setItem("name", JSON.stringify(result.user.displayName))
            localStorage.setItem("email", JSON.stringify(result.user.email))
            localStorage.setItem("displayPicture", JSON.stringify(result.user.photoURL))
          // Handle successful login, e.g., update state or redirect

        } catch (error) {
          console.error(error);
        }
      };

    return  (
        <div className="flex flex-col mt-6">
         
         <div className="flex text-4xl text-white text-bold  font-serif mt-4 mx-auto ">
         USER BILLING AND INVOICE GENERATOR
     </div>
     <div className="flex  text-3xl font-semibold mt-12 mx-auto text-white">
      Welcome To Our SAAS Platform
     </div>
     <div className="text-white font-semibold text-sm mt-12 mx-auto  ">
      <p>Transform your billinng process with seamless automation and innovative 
      </p>
      <span className="ml-[200px]">solutions</span>
     </div>

     <div className="flex  ml-[230px] mt-8 gap-11 ">
        <div className="w-[300px] flex flex-col h-[150px] bg-[#D0DBF0] rounded-lg mt-6 ">
          <div className="text-[#333333] font-semibold text-3xl ml-[25px] mt-2">Billing Automation</div>
          <p className="text-[#333333] w-[300px] mt-5 ml-3 mx-auto">Automate your billing process based on usage data, saving time and reducing </p>
          <span className="mx-auto">errors.</span>
        </div>
        <div className="mt-[80px] flex cursor-pointer bg-black h-9 w-[220px] rounded-lg " onClick={handleSignIn}>
           <FcGoogle size={30} className="m-auto"></FcGoogle> 
           <p className="text-white font-semibold m-auto">Continue with Google</p>
        </div>
        <div className="w-[300px] flex flex-col h-[150px] bg-[#D0DBF0] rounded-lg mt-6  ">
          <div className="text-[#333333] font-semibold text-3xl ml-[40px] mt-2">User Interface</div>
          <p className="text-[#333333] w-[300px] mt-5">Enjoy a user-friendly interface designed to </p>
          <span className="mx-auto">enhance your overall experience</span>
        </div>
     </div>

        </div>
    )
}

export default Home
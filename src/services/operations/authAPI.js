import { apiConnector } from "../apiConnector"
import toast from "react-hot-toast"
import { setUserId } from "../../slices/authSlice"
import { useDispatch } from "react-redux"



export function createUser(email,  navigate) {
    return async (dispatch) => {
     
      try {
        const response = await apiConnector("POST", "http://localhost:8000/api/v1/auth/createUser", {
          email,
         
        })
  
        console.log("LOGIN API RESPONSE............", response)
        console.log(response.data.user)
        const user=response.data.user;
        const userId=user._id;
        dispatch((setUserId(userId)))
        
       localStorage.setItem('userId', JSON.stringify(userId));

        const users= localStorage.getItem("userId")
        console.log(users)
                
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
      
        toast.success("Login Successful");

        navigate("/dashboard")
      
       
        
        
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
     
    }
  }
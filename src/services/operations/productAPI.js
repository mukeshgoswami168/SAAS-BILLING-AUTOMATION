import { apiConnector } from "../apiConnector"
import { toast } from "react-hot-toast"


export const getAllProduct = async (userId) => {
    //const toastId = toast.loading("Loading...")
    let result = [];
    console.log(userId);
    try {
     const response = await apiConnector("GET",`http://localhost:8000/api/v1/product/userProduct/${userId}`)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Course Categories")
      }
      console.log(response)
      result = response?.data?.data
      console.log(result)
      return response.data.data;
    } catch (error) {
      console.log("GET_ALL_PRODUCT_API API ERROR............", error)
      
     
    }
    //toast.dismiss(toastId)
    return result
  }
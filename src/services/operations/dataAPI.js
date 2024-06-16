import { apiConnector } from "../apiConnector"
import { toast } from "react-hot-toast"


export const getAllData = async (userId) => {
    let result = [];
    console.log(userId);
    try {
     const response = await apiConnector("GET",`http://localhost:8000/api/v1/data/userData/${userId}`)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Course Categories")
      }
      console.log(response)
      result = response?.data?.data
      console.log(result)
    } catch (error) {
      console.log("GET_ALL_DATA_API API ERROR............", error)
    }
    return result
  }
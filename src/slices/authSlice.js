import {createSlice} from "@reduxjs/toolkit"

const initialState={
   userId:localStorage.getItem("userId") ? JSON.parse(localStorage.getItem("userId")) : null,
   name:localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")) : null,
   email:localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : null,
   displayPicture:localStorage.getItem("displayPicture") ? JSON.parse(localStorage.getItem("displayPicture")) : null,
}


const authSlice=createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        setEmail(state, value) {
            state.email = value.payload;
           
          },
          setName(state, value) {
            state.name = value.payload;
           
          },
          setUserId(state, value) {
            state.userId = value.payload;
            console.log(state.userId);
           
            },
            setdisplayPicture(state, value) {
              state.displayPicture = value.payload;
             
            },
            
    }
})

export const {setEmail, setUserId,setName,setdisplayPicture} = authSlice.actions;

export default authSlice.reducer;
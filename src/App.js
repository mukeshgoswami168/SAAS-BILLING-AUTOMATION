import "./App.css";
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/common/Navbar";
import SideBar from "./components/common/SideBar";
import Dashboard from "./components/pages/Dashboard";
import Order from "./components/pages/Order";
import Profile from "./components/pages/Profile";
import { useSelector } from "react-redux";
function App() {

  const {userId} =useSelector((state)=>state.auth)
  return (
    <div className=" flex text-black flex-col min-h-screen w-full bg-[#0c2046]  ">
    
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
          {
          userId && (<>
             <Route path="/dashboard"  element={<Dashboard></Dashboard>}></Route>
        <Route path="/order"  element={<Order></Order>}></Route>
        <Route path="/profile"  element={<Profile></Profile>}></Route>
          </>)
        }
      </Routes>
      </div>
  );
}

export default App;

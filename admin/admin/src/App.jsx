import { Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/Dashboard";
import SideNav from "./components/layouts/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/UserSlice";


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=>state.admin.isAuthenticated);
  useEffect(()=>{
    dispatch(loadUser())
  })
  return (
    <>
    <div className="flex">
      {
        isAuth &&
      <SideNav/>
      }
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
         
      </Routes>
      <Toaster />

    </div>

    </>
  )
}

export default App

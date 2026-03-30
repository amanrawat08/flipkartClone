import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/auth/Login"
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/Dashboard";
import SideNav from "./components/layouts/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/UserSlice";
import CreateCategory from "./components/cateogies/CreateCategory";
import Header from "./components/layouts/Header";


function App() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const isAuth = useSelector((state) => state.admin.isAuthenticated);
  useEffect(() => {
    dispatch(loadUser());
    if (isAuth) {
      toast.success("Welcome back!");
      Navigate("/dashboard");
    }
  },[isAuth]);
  return (
    <section className="flex flex-wrap">

      <div className="flex">
        {
          isAuth &&
          <SideNav />
        }
      </div>
      <div className="flex-1 ">
        {
          isAuth &&
          <Header />
        }
      
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createCategories" element={<CreateCategory />} />

          </Routes>
       </div> 
      <Toaster />



    </section>
  )
}

export default App

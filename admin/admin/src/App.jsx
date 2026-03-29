import {Routes, Route} from "react-router-dom"
import Login from "./pages/auth/Login"
// import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/Dashboard";


function App() { 

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
        <Toaster/>
    
    </>
  )
}

export default App

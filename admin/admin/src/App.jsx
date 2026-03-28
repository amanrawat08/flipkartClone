import {Routes, Route} from "react-router-dom"
import Login from "./pages/auth/Login"
// import './App.css'
import toast, { Toaster } from 'react-hot-toast';


function App() { 

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
        <Toaster/>
    
    </>
  )
}

export default App

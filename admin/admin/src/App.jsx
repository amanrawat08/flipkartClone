import {Routes, Route} from "react-router-dom"
import Login from "./pages/auth/Login"
// import './App.css'

function App() { 

  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Login/>} />
    </Routes>
  )
}

export default App

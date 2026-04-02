import { useEffect } from 'react'
import './App.css'
import Header from './components/Layouts/Header/Header'
import Home from './pages/Home' 
import { getCategoies } from './redux/categories'
import { useDispatch } from 'react-redux'

function App() { 
  const dispatch = useDispatch();
  useEffect(()=>{
    document.title = "E-commerce",
    dispatch(getCategoies())
  },[])
  return (
    <div>
        <Header/>
        <Home/> 
    </div>
  )
}

export default App

import React from 'react'
import { logout } from '../../../redux/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_FRONT } from '../../utils/comman';
import toast from 'react-hot-toast';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    // Implement logout functionality here
    try {
      const res = await axios.get(`${API_FRONT}/logout`,{
        withCredentials:true
      });
      console.log(res.data);
      dispatch(logout());
      navigate("/login"); // Redirect to login page after logout
      toast.success("Logged out successfully"); // Show success message after logout
      navi
    } catch (error) {
      console.error('Error occurred while logging out:', error);  
    }
  }

  return (
    <div className=' py-4  flex items-center justify-between px-9 rounded-sm border-b border-b-gray-200 w-full'>
        <div className='text-lg font-semibold text-gray-700 ' >
            Hey Admin...!!!
        </div>

        <div>
          <button className='px-4 py-2 rounded-full bg-amber-300 cursor-pointer text-sm font-semibold shadow-md hover:opacity-90 transition' onClick={logoutHandler}>
            Logout
          </button>
        </div>
    </div>
  )
}

export default Header

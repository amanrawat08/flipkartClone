import React from 'react'
import Header from '../components/layouts/Header';
import SideNav from '../components/layouts/SideNav';
import MainContent from '../components/MainContent';

const Dashboard = () => {
  return (
    <div>
        <div className='flex'>
            <SideNav/>
            <MainContent/>
        </div>
         
    </div>
  )
}

export default Dashboard;
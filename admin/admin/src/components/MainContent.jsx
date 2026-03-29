import React from 'react'
import Header from './layouts/Header'

const MainContent = () => {
  return (
    <div className='flex-1/2 px-12'>
        <Header/>
        <div className='m-4 flex gap-3 mt-11'>
            <div className='border px-6 py-5 border-gray-200 flex-1'>
                <img src="team.png" alt="" />
                <div>
                    100
                </div>
                <span>
                    Total Users
                </span>
            </div>
            <div className='border px-6 py-5 border-gray-200 flex-1'>
                <img src="best-seller.png" alt="" />
                <div>
                    100
                </div>
                <span>
                    Total seller
                </span>
            </div>
            <div className='border px-6 py-5 border-gray-200 flex-1'>
                <img src="products.png" alt="" />
                <div>
                    100
                </div>
                <span>
                    Total Products
                </span>
            </div>
            <div className='border px-6 py-5 border-gray-200 flex-1'>
                <img src="market-segment.png" alt="" />
                <div>
                    100
                </div>
                <span>
                    Total Users
                </span>
            </div>
            
        </div>
    </div>
  )
}

export default MainContent

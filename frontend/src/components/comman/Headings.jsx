import React from 'react'

const Headings = () => {
  return (
    <div className='p-2 h-[300px] flex-col  items-center justify-center m-2 relative text-center w-[212px] '>
        <h5 className='mx-3'>Best Of Electronics</h5>
        <button className='font-medium bg-[#2874f0] mb-4 px-3 mt-2 text-white text-xs py-1 mx-3'>View All</button>
        <img src="electronic/viewAll.webp" className='absolute bottom-0'   alt="" />
    </div>
  )
}

export default Headings

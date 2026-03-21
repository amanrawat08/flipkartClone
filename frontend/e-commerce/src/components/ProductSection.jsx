import React from 'react'
import Headings from './comman/Headings'
import ProductsList from './comman/ProductsList'

const ProductSection = () => {
  return (
    <div className=' mx-2    shadow-sm shadow-gray-700  rounded-sm mt-3 border border-gray-50'>
      <div className='flex items-end justify-end'>
        <Headings/>
        <ProductsList/>
      </div>
    </div>
  )
}

export default ProductSection

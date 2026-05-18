import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Products</h1>
        <div className='flex justify-start gap-10 bg-amber-600 py-2 px-10'>
          <a className="text-medium font-bold" href="/products/men">
          Men's Collection
        </a>
        <a className="text-medium font-bold" href="/products/women">
          Women's Collection
        </a>
        </div>
        
    </div>
  )
}

export default Contact
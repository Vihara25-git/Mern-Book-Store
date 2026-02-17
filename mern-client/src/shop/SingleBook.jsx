import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { Banner } from 'flowbite-react';
import { FaCartShopping } from 'react-icons/fa6';

const SingleBook = () => {
  const { _id, bookTitle, imageURL, authorName, category, bookDescription, bookPDFUrl } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
        {/* Image Section */}
        <div className='md:w-1/3 w-full'>
          <img src={imageURL} alt={bookTitle} className='h-96 rounded w-full object-cover shadow-lg' />
        </div>

        {/* Details Section */}
        <div className='md:w-2/3 w-full space-y-6'>
          <h2 className='text-4xl font-bold leading-snug'>{bookTitle}</h2>

          <div className='flex items-center gap-4'>
            <p className='text-lg font-semibold text-gray-700'>By: <span className='text-blue-700'>{authorName}</span></p>
            <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded'>
              {category}
            </span>
          </div>

          <div className='text-yellow-500 flex gap-1 items-center'>
            {/* Placeholder stars */}
            <span>⭐⭐⭐⭐⭐</span>
            <span className='text-gray-500 text-sm ml-2'>(5.0)</span>
          </div>

          <p className='text-gray-600'>
            {bookDescription}
          </p>

          <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold text-gray-900'>Rs. 999 <span className='text-sm text-gray-500 font-normal line-through ml-2'>Rs. 1999</span></p>
            <p className='text-green-600 text-sm font-semibold'>Free Delivery</p>
          </div>

          <Link to={`/payment/${_id}`}>
            <button className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded flex items-center gap-2 transition-all duration-300'>
              <FaCartShopping className='w-5 h-5' />
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SingleBook;
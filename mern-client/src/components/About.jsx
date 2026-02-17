import React from 'react';
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';

const About = () => {
  return (
    <div className='mt-20'>
      {/* Banner */}
      <div className='bg-teal-100 py-20 text-center px-4'>
        <h2 className='text-5xl font-bold text-teal-900 mb-6 leading-tight'>About Our Book Store</h2>
        <p className='mt-4 max-w-2xl mx-auto text-lg text-gray-700'>
          We are passionate about connecting readers with their next favorite story.
          Our platform is designed to make book discovery seamless, enjoyable, and accessible for everyone.
        </p>
      </div>

      {/* Content Section */}
      <div className='max-w-7xl mx-auto px-4 lg:px-8 my-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='bg-gray-100 rounded-lg p-8 shadow-lg'>
            <h3 className='text-3xl font-bold text-gray-800 mb-4'>Who We Are</h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              Founded by book lovers for book lovers, our MERN Book Store is more than just a place to buy books.
              It's a community hub for literary exploration. Whether you're a casual reader or a dedicated bibliophile,
              we provide a curated selection of titles across all genres.
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Our mission is to empower readers and support authors by creating a modern, user-friendly platform that celebrates the written word.
            </p>
          </div>

          {/* Stats or Features */}
          <div className='grid sm:grid-cols-2 gap-6'>

            <div className='bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600'>
                <HiUserGroup className='w-6 h-6' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-2'>Community First</h4>
              <p className='text-gray-600 text-sm'>
                Building a vibrant community of readers to share reviews and recommendations.
              </p>
            </div>

            <div className='bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600'>
                <IoIosSearch className='w-6 h-6' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-2'>Easy Discovery</h4>
              <p className='text-gray-600 text-sm'>
                Advanced search and filtering tools to help you find exactly what you're looking for.
              </p>
            </div>

            <div className='bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600'>
                <BsCloudArrowUp className='w-6 h-6' />
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-2'>Digital & Print</h4>
              <p className='text-gray-600 text-sm'>
                Seamlessly browse physical books or access digital PDFs instantly.
              </p>
            </div>

            <div className='bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
              <div className='h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-red-600'>
                <span className='text-2xl font-bold'>24/7</span>
              </div>
              <h4 className='text-xl font-bold text-gray-900 mb-2'>Always Open</h4>
              <p className='text-gray-600 text-sm'>
                Shop anytime, anywhere. Our digital doors are always open for you.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='bg-gray-900 text-white py-16 text-center px-4'>
        <h2 className='text-3xl font-bold mb-4'>Ready to start reading?</h2>
        <p className='mb-8 text-gray-400 max-w-lg mx-auto'>Explore our vast collection of books and find your next adventure today.</p>
        <a href="/shop" className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-colors'>
          Browse Books
        </a>
      </div>
    </div>
  )
}

export default About
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        if (searchQuery) {
          const filtered = data.filter(book =>
            book.bookTitle.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFilteredBooks(filtered);
        } else {
          setFilteredBooks(data);
        }
      });
  }, [searchQuery]); // Re-run when searchQuery changes

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>
        {searchQuery ? `Search Results for "${searchQuery}"` : "All Books are here"}
      </h2>

      {filteredBooks.length === 0 ? (
        <div className="text-center mt-12">
          <p className="text-3xl text-gray-500 font-semibold text-red-600">No books found!</p>
          <p className="text-gray-400 mt-2">Try searching for something else.</p>
        </div>
      ) : (
        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {
            filteredBooks.map(book => <Card
              key={book._id}
              className="max-w-sm">
              <img src={book.imageURL} alt="" className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>
                  {book.bookTitle}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.bookDescription ? book.bookDescription.slice(0, 80) + "..." : "No description available."}
              </p>

              <button className='bg-blue-700 font-semibold text-white py-2 rounded'>
                <Link to={`/payment/${book._id}`}>Buy Now</Link>
              </button>
            </Card>)
          }
        </div>
      )}
    </div>
  )
}

export default Shop
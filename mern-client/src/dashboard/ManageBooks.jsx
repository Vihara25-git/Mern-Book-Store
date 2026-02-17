import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from 'react-router-dom';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, [])

  //delete a books
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/book/${id}`, {
        method: "DELETE",
      }).then(res => res.json()).then(data => {
        alert("Book is Deleted Successfully!");
        // Refresh list or remove item from state
        setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
      });
    }
  }

  return (
    <div className='px-4 my-12 w-full'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-bold text-gray-800'>Manage Your Inventory</h2>
        <Link to="/admin/dashboard/upload">
          <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-md'>
            + Add New Book
          </button>
        </Link>
      </div>


      {/* table for book data */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <Table hoverable className='w-full'>
          <TableHead>
            <TableHeadCell className="bg-gray-50">No.</TableHeadCell>
            <TableHeadCell className="bg-gray-50">Book Name</TableHeadCell>
            <TableHeadCell className="bg-gray-50">Author Name</TableHeadCell>
            <TableHeadCell className="bg-gray-50">Category</TableHeadCell>
            <TableHeadCell className="bg-gray-50">Unit Price</TableHeadCell>
            <TableHeadCell className="bg-gray-50">Stock</TableHeadCell>
            <TableHeadCell className="bg-gray-50">Actions</TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {
              allBooks.map((book, index) => (
                <TableRow key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </TableCell>
                  <TableCell>{book.authorName}</TableCell>
                  <TableCell>
                    <span className='bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded border border-blue-200'>
                      {book.category}
                    </span>
                  </TableCell>
                  <TableCell>Rs. 999.00</TableCell>
                  <TableCell>
                    <span className='text-green-600 font-semibold'>In Stock</span>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-4'>
                      <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:text-cyan-800 transition-colors tooltip" title="Edit">
                        <HiPencilAlt className='w-5 h-5' />
                      </Link>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className='font-medium text-red-600 hover:text-red-800 transition-colors tooltip'
                        title="Delete"
                      >
                        <HiTrash className='w-5 h-5' />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ManageBooks
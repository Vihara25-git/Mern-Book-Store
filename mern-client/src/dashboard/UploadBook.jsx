import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput, FileInput } from "flowbite-react";
import { HiCloudUpload } from 'react-icons/hi';

const UploadBook = () => {
  const bookCategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Bibliography", "Autobiography", "History",
    "Self-Help", "Memoir", "Business", "Children Book", "Travel",
    "Religion", "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const [dragging, setDragging] = useState(false);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleBookSubmission = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFUrl
    }

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book uploaded successfully!!!")
      form.reset();
      setSelectedBookCategory(bookCategories[0]);
    })
  }

  return (
    <div className='px-4 my-8 w-full min-h-screen bg-gray-50 flex justify-center py-10'>
      <div className='w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden'>

        {/* Header */}
        <div className='bg-gradient-to-r from-purple-700 to-indigo-800 p-8 text-white'>
          <h2 className='text-3xl font-bold mb-2 flex items-center gap-3'>
            <HiCloudUpload className='text-4xl' />
            Upload New Book
          </h2>
          <p className='opacity-90'>Add a new book to your inventory. Update metadata, images, and description.</p>
        </div>

        {/* Form Section */}
        <div className='p-8 md:p-12'>
          <form onSubmit={handleBookSubmission} className="space-y-8">

            {/* 1. Basic Information */}
            <div>
              <h3 className='text-lg font-semibold text-gray-700 border-b pb-2 mb-4'>Basic Information</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="bookTitle" value="Book Title" className='font-medium text-gray-700' />
                  </div>
                  <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Enter book title" required shadow color="gray" sizing="md" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="authorName" value="Author Name" className='font-medium text-gray-700' />
                  </div>
                  <TextInput id="authorName" name="authorName" type="text" placeholder="Enter author name" required shadow color="gray" sizing="md" />
                </div>
              </div>
            </div>

            {/* 2. Content Details */}
            <div>
              <h3 className='text-lg font-semibold text-gray-700 border-b pb-2 mb-4'>Content Details</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="imageURL" value="Cover Image URL" className='font-medium text-gray-700' />
                  </div>
                  <TextInput id="imageURL" name="imageURL" type="text" placeholder="Paste image URL here" required shadow color="gray" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="inputState" value="Category" className='font-medium text-gray-700' />
                  </div>
                  <Select id='inputState' name='categoryName' className='w-full' value={selectedBookCategory} onChange={handleChangeSelectedValue} required shadow>
                    {
                      bookCategories.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))
                    }
                  </Select>
                </div>
              </div>
            </div>


            {/* 3. Description & PDF */}
            <div>
              <h3 className='text-lg font-semibold text-gray-700 border-b pb-2 mb-4'>Description & Assets</h3>
              <div className='grid grid-cols-1 gap-6'>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="bookDescription" value="Book Description" className='font-medium text-gray-700' />
                  </div>
                  <Textarea id="bookDescription" placeholder="Write a summary of the book..." className='w-full focus:ring-purple-500' required rows={6} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="bookPDF" value="Upload Book PDF" className='font-medium text-gray-700' />
                  </div>
                  <FileInput id="bookPDF" helperText="PDF format only (Max 10MB)" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="bookPDFUrl" value="Book PDF URL" className='font-medium text-gray-700' />
                  </div>
                  <TextInput id="bookPDFUrl" name="bookPDFUrl" type="text" placeholder="Paste PDF URL here" required shadow icon={HiCloudUpload} />
                </div>
              </div>
            </div>


            {/* Action Buttons */}
            <div className='flex justify-end gap-4 pt-4 border-t'>

              <Button type="submit" gradientDuoTone="purpleToBlue" className='px-6 font-bold text-lg'>
                Upload Book
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadBook
import React, { useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Label, Textarea, TextInput, Select } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFUrl } = useLoaderData();
  const navigate = useNavigate();

  const bookCategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Bibliography", "Autobiography", "History",
    "Self-Help", "Memoir", "Business", "Children Book", "Travel",
    "Religion", "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }

  //handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFUrl
    }

    fetch(`http://localhost:5000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book updated successfully!");
      navigate('/admin/dashboard/manage'); // Redirect back to manage page
    })
  }

  return (
    <div className='px-4 my-12 w-full bg-white rounded-lg shadow-sm p-8'>
      <h2 className='mb-8 text-3xl font-bold text-gray-800 border-b pb-4'>Update Book Details</h2>

      <form onSubmit={handleUpdate} className="flex flex-col flex-wrap gap-6 max-w-4xl">
        {/* first row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" className='font-semibold' />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required defaultValue={bookTitle} shadow />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" className='font-semibold' />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required defaultValue={authorName} shadow />
          </div>
        </div>

        {/* second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" className='font-semibold' />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book image URL" required defaultValue={imageURL} shadow />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" className='font-semibold' />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue} shadow>
              {
                bookCategories.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))
              }
            </Select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" className='font-semibold' />
          </div>
          <Textarea id="bookDescription" placeholder="Write your book description..." className='w-full' required rows={6} defaultValue={bookDescription} shadow />
        </div>

        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" value="Book PDF URL" className='font-semibold' />
          </div>
          <TextInput id="bookPDFUrl" name="bookPDFUrl" type="text" placeholder="book pdf url" required defaultValue={bookPDFUrl} shadow />
        </div>

        <div className='flex gap-4'>
          <Button type="submit" gradientDuoTone="purpleToBlue" className='px-8'>
            Update Book
          </Button>
          <Button color="gray" onClick={() => navigate('/admin/dashboard/manage')}>
            Cancel
          </Button>
        </div>

      </form>
    </div>
  )
}

export default EditBooks
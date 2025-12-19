import React, { useState } from 'react'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibiography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Book",
    "Travel",
    "Religion",
    "Art and Design"

    ]

    const[selectedBookCategory, setselectedBookCategory] = useState(bookCategories[0]);
    
    const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setselectedBookCategory(event.target.value);
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

      console.log(bookObj);

      //send data to db

      fetch("http://localhost:5000/upload-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Book uploaded successfully!!!")
        form.reset();
      })

    }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>
      
      <form onSubmit={handleBookSubmission} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
         {/* first row */}
         <div className='flex gap-8'>
               <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle">Book Title</Label>
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
      </div>

      {/* author name */}
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName">Author Name</Label>
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
      </div>
        </div>
        
        {/* second row */}
        <div className='flex gap-8'>
               <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL">Book image URL</Label>
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book image URL" required />
      </div>

      {/* category */}
          <div className='lg:w-1/2'>
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState">Book Category</Label>
        </div>
        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))
            }
        </select>
        </div>
          </div>
        </div>

        {/* bookDescription */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription">Book Description</Label>
        </div>
        <Textarea id="bookDescription" placeholder="Write your book description..." className='w-full' required rows={6} />
      </div>

      {/* book pdf link */}

      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFUrl">Book PDF URL</Label>
        </div>
        <TextInput id="bookPDFUrl" name="bookPDFUrl" type="text" placeholder="book pdf url" required />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-950 hover:bg-purple-950 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
      >
        Upload Book 
      </button>
    </form>
    </div>
  )
}

export default UploadBook
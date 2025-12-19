import React from 'react'


const About = () => {
  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-purple-800">About Our Book Store System</h1>
      <p className="mb-4 text-gray-700">
        Welcome to the MERN Book Store System! This platform is designed to provide a seamless experience for book lovers and administrators alike. Users can browse, search, and view a wide variety of books, while administrators can easily manage the book inventory and user data.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-700">Key Features</h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>User registration, login, and secure authentication</li>
        <li>Browse and search books by category, author, or title</li>
        <li>Admin dashboard for managing books and users</li>
        <li>Upload books with images and PDF links</li>
        <li>Responsive and modern user interface</li>
        <li>Downloadable reports and analytics</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-700">Our Mission</h2>
      <p className="text-gray-700">
        Our mission is to make book management and discovery easy, efficient, and enjoyable for everyone. We are committed to continuous improvement and welcome your feedback for future enhancements.
      </p>
    </div>
  );
}

export default About
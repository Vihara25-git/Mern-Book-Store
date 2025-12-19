import React from 'react'


const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">Book Store Blog</h1>
      <div className="space-y-8">
        <article>
          <h2 className="text-xl font-semibold mb-2 text-purple-700">Why Digital Bookstores Are the Future</h2>
          <p className="text-gray-700 mb-1">Digital bookstores offer instant access to thousands of titles, making reading more convenient than ever. With features like search, recommendations, and user reviews, finding your next favorite book is just a click away.</p>
          <span className="text-xs text-gray-400">Posted on August 12, 2025</span>
        </article>
        <article>
          <h2 className="text-xl font-semibold mb-2 text-purple-700">Top 5 Benefits of Using Our Book Store System</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-1">
            <li>Easy book discovery and search</li>
            <li>Secure and fast user authentication</li>
            <li>Admin dashboard for efficient management</li>
            <li>Responsive design for all devices</li>
            <li>Downloadable reports and analytics</li>
          </ul>
          <span className="text-xs text-gray-400">Posted on August 10, 2025</span>
        </article>
        <article>
          <h2 className="text-xl font-semibold mb-2 text-purple-700">How to Get the Most Out of Your Reading</h2>
          <p className="text-gray-700 mb-1">Set reading goals, explore new genres, and use our platform’s features to track your progress and discover new books tailored to your interests.</p>
          <span className="text-xs text-gray-400">Posted on August 5, 2025</span>
        </article>
      </div>
    </div>
  );
}

export default Blog
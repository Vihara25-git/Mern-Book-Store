import React from 'react';
import { Spinner } from 'flowbite-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Must-Read Books for Summer 2025",
      excerpt: "Looking for the perfect beach read? Check out our curated list of this summer's hottest bestsellers, from gripping thrillers to heartwarming romances.",
      author: "Sarah Jenkins",
      date: "August 15, 2025",
      category: "Recommendations",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Future of Digital Publishing",
      excerpt: "Explore how technology is reshaping the publishing industry, from AI-generated content to interactive e-books and the rise of audio storytelling.",
      author: "Michael Chen",
      date: "August 10, 2025",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Interview with Author of the Year",
      excerpt: "We sat down with the award-winning author to discuss their latest masterpiece, writing process, and advice for aspiring writers everywhere.",
      author: "Editorial Team",
      date: "August 05, 2025",
      category: "Interviews",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className='mt-20 px-4 lg:px-24'>
      {/* Header Section */}
      <div className='text-center py-10'>
        <h2 className='text-5xl font-bold text-gray-900 mb-4'>Our Blog</h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Latest news, literary insights, and updates from the world of books.
        </p>
      </div>

      {/* Blog Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10'>
        {posts.map(post => (
          <div key={post.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'>
            <div className='h-48 overflow-hidden'>
              <img
                src={post.image}
                alt={post.title}
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
              />
            </div>

            <div className='p-6'>
              <div className='flex justify-between items-center mb-3'>
                <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded'>
                  {post.category}
                </span>
                <span className='text-xs text-gray-500'>{post.date}</span>
              </div>

              <h3 className='text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer'>
                {post.title}
              </h3>

              <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                {post.excerpt}
              </p>

              <div className='flex items-center justify-between border-t pt-4'>
                <div className='flex items-center gap-2'>
                  <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600'>
                    {post.author.charAt(0)}
                  </div>
                  <span className='text-sm font-medium text-gray-700'>{post.author}</span>
                </div>
                <button className='text-blue-600 text-sm font-semibold hover:underline'>
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup (Optional Polish) */}
      <div className='bg-blue-50 rounded-xl p-8 my-16 text-center'>
        <h3 className='text-2xl font-bold text-gray-900 mb-3'>Subscribe to our Newsletter</h3>
        <p className='text-gray-600 mb-6'>Get the latest posts and book recommendations delivered right to your inbox.</p>
        <div className='flex max-w-md mx-auto gap-2'>
          <input
            type="email"
            placeholder="Enter your email"
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog
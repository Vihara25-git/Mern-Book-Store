import React from 'react';
import { HiCurrencyDollar, HiOutlineBookOpen, HiShoppingCart, HiUsers } from 'react-icons/hi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Dummy Data for Charts
  const salesData = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 },
  ];

  const categoryData = [
    { name: 'Fiction', value: 400 },
    { name: 'Non-Fiction', value: 300 },
    { name: 'Sci-Fi', value: 300 },
    { name: 'Mystery', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold text-gray-800 mb-8'>Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4'>
          <div className='p-3 bg-purple-100 rounded-full text-purple-600'>
            <HiCurrencyDollar className='w-8 h-8' />
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Total Revenue</p>
            <h3 className='text-2xl font-bold text-gray-800'>Rs.12,450</h3>
            <span className='text-green-500 text-xs font-semibold'>+5.2% from last month</span>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4'>
          <div className='p-3 bg-blue-100 rounded-full text-blue-600'>
            <HiUsers className='w-8 h-8' />
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Total Users</p>
            <h3 className='text-2xl font-bold text-gray-800'>1,250</h3>
            <span className='text-green-500 text-xs font-semibold'>+12% new users</span>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4'>
          <div className='p-3 bg-red-100 rounded-full text-red-600'>
            <HiOutlineBookOpen className='w-8 h-8' />
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Total Books</p>
            <h3 className='text-2xl font-bold text-gray-800'>450</h3>
            <span className='text-gray-400 text-xs font-semibold'>Updated just now</span>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center gap-4'>
          <div className='p-3 bg-yellow-100 rounded-full text-yellow-600'>
            <HiShoppingCart className='w-8 h-8' />
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Pending Orders</p>
            <h3 className='text-2xl font-bold text-gray-800'>45</h3>
            <span className='text-red-500 text-xs font-semibold'>Action needed</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className='grid lg:grid-cols-2 gap-8 mb-8'>
        {/* Sales Chart */}
        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
          <h3 className='text-lg font-bold text-gray-800 mb-4'>Revenue Report (Monthly)</h3>
          <div className='h-80'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Pie Chart */}
        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
          <h3 className='text-lg font-bold text-gray-800 mb-4'>Books by Category</h3>
          <div className='h-80'>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-bold text-gray-800'>Recent Orders</h3>
          <button className='text-blue-600 hover:text-blue-800 text-sm font-semibold'>View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Order ID</th>
                <th scope="col" className="px-6 py-3">Customer</th>
                <th scope="col" className="px-6 py-3">Book</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">#ORD-001</td>
                <td className="px-6 py-4">John Doe</td>
                <td className="px-6 py-4">The Great Gatsby</td>
                <td className="px-6 py-4">2023-08-15</td>
                <td className="px-6 py-4"><span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded'>Completed</span></td>
                <td className="px-6 py-4">Rs.15.99</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">#ORD-002</td>
                <td className="px-6 py-4">Jane Smith</td>
                <td className="px-6 py-4">To Kill a Mockingbird</td>
                <td className="px-6 py-4">2023-08-14</td>
                <td className="px-6 py-4"><span className='bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded'>Pending</span></td>
                <td className="px-6 py-4">Rs.12.50</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">#ORD-003</td>
                <td className="px-6 py-4">Michael Brown</td>
                <td className="px-6 py-4">1984</td>
                <td className="px-6 py-4">2023-08-14</td>
                <td className="px-6 py-4"><span className='bg-red-100 text-red-800 text-xs px-2 py-1 rounded'>Cancelled</span></td>
                <td className="px-6 py-4">Rs.10.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
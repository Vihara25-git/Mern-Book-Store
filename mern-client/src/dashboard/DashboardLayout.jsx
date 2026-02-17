import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Navbar from '../components/Navbar'
import MyFooter from '../components/MyFooter'

function DashboardLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden bg-gray-100 pt-20'> {/* Added pt-20 for fixed navbar */}
        <div className="md:w-64 flex-shrink-0 relative h-full">
          <SideBar />
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </div>
      </div>
      <MyFooter />
    </div>
  )
}

export default DashboardLayout
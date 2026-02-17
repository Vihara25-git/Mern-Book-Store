import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';
import { HiOutlineLogout } from 'react-icons/hi';

const Logout = () => {
  const { logOut, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logOut().then(() => {
      // Sign-out successful.
      alert("Sign-out successful!");
      navigate(from, { replace: true });
    }).catch((error) => {
      // An error happened.
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    });
  }

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  }

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4'>
      <Card className="max-w-md w-full shadow-xl border-none">
        <div className="flex flex-col items-center pb-10">
          <div className="mb-6 p-4 bg-red-100 rounded-full text-red-600">
            <HiOutlineLogout className='w-12 h-12' />
          </div>
          <h5 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">Sign Out</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
            {user ? `Signing out as ${user.displayName || user.email}` : "Are you sure you want to sign out?"}
          </span>
          <p className="text-center text-gray-600 mb-8">
            You will be returned to the home screen.
          </p>
          <div className="flex gap-4 w-full">
            <Button color="gray" className="flex-1" onClick={handleCancel}>
              Cancel
            </Button>
            <Button color="failure" className="flex-1" onClick={handleLogout}>
              Yes, Sign Out
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Logout;
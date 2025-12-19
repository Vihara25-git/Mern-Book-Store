import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
     const location = useLocation();
        const navigate = useNavigate();
    
        const from = location.state?.from?.pathname || "/";
    const handleLogout = () => {
        logOut().then(() => {
  // Sign-out successful.
    alert("Sign-out successfull!");
    navigate(from, {replace: true})
}).catch((error) => {
  // An error happened.
});
    }
  return (
    <div className='h-screen bg-white flex items-center justify-center' onClick={handleLogout}><button className='bg-purple-900 px-8 py-2 text-white rounded'>Click here to Logout</button></div>
  )
}

export default Logout
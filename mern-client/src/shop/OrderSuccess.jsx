import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center px-4'>
            <div className='bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full'>
                <div className='mb-6'>
                    <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto'>
                        <span className='text-6xl'>✅</span>
                    </div>
                </div>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>Order Placed Successfully!</h2>
                <p className='text-gray-600 mb-8'>
                    Thank you for your purchase. Your order has been received and is being processed.
                </p>
                <Link to="/shop">
                    <button className='bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default OrderSuccess

import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Payment = () => {
    // Assuming we might fetch book data if using a loader, or we can use location state.
    // For now, let's use useLoaderData if we set up the route with a loader.
    // If no loader, we might need to handle it differently.
    // Let's assume we pass the book data via loader equivalent to SingleBook.

    const data = useLoaderData();
    const { bookTitle, imageURL, price } = data || {};

    // Hardcoded values to match the image for now where data might be missing
    const displayPrice = price || "999";
    const displayTitle = bookTitle || "Constructing a Nervous System";

    const [quantity, setQuantity] = useState(1);
    const [shippingAddress, setShippingAddress] = useState("");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        // Placeholder for order placement logic
        console.log("Order placed", { quantity, shippingAddress, selectedPaymentMethod });
        // Navigate to the order success page
        navigate('/order-success');
    };

    return (
        <div className="min-h-screen bg-white p-8 mt-28 px-4 lg:px-24">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Column */}
                <div className="space-y-8">
                    {/* Shipping Address */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                        />
                    </div>

                    {/* Book Details */}
                    <div className="flex gap-4 items-start">
                        <img
                            src={imageURL}
                            alt={displayTitle}
                            className="w-32 h-48 object-cover shadow-md"
                        />
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">{displayTitle}</h3>
                            <p className="text-sm font-semibold">Rs. {displayPrice}</p>

                            <div className="flex items-center gap-2 border border-gray-300 rounded px-2 w-max">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className='px-2'>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className='px-2'>+</button>
                            </div>

                            <p className="text-sm"> <span className="font-bold">Shipping:</span> Free Shipping</p>
                            <p className="text-sm text-gray-600">Delivery: June 10 - 15</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">

                    {/* Payment Method */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 border-b pb-2">Payment Method</h2>
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={selectedPaymentMethod === "card"}
                                    onChange={() => setSelectedPaymentMethod("card")}
                                    className="w-4 h-4 text-purple-600"
                                />
                                <span className="flex items-center gap-2">
                                    <span className='text-2xl'>💳</span>
                                    25236*******522
                                </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="new-card"
                                    checked={selectedPaymentMethod === "new-card"}
                                    onChange={() => setSelectedPaymentMethod("new-card")}
                                    className="w-4 h-4 text-purple-600"
                                />
                                <span className="flex items-center gap-2">
                                    <span className='text-2xl'>💳</span>
                                    Add a new card
                                </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="google-pay"
                                    checked={selectedPaymentMethod === "google-pay"}
                                    onChange={() => setSelectedPaymentMethod("google-pay")}
                                    className="w-4 h-4 text-purple-600"
                                />
                                <span className="flex items-center gap-2">
                                    <span className='text-xl text-blue-500 font-bold'>G</span> Google pay
                                </span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="apple-pay"
                                    checked={selectedPaymentMethod === "apple-pay"}
                                    onChange={() => setSelectedPaymentMethod("apple-pay")}
                                    className="w-4 h-4 text-purple-600"
                                />
                                <span className="flex items-center gap-2">
                                    <span className='text-xl'>🍎</span> Apple pay
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Summary */}
                    <div>
                        <h2 className="text-xl font-bold mb-4 border-b pb-2">Summary</h2>
                        <div className="space-y-2 text-lg">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-bold">Rs. {displayPrice * quantity}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span className="font-bold">Free</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-8 pt-4 border-t">
                            <span className="text-xl font-bold">Total: LKR Rs.{displayPrice * quantity}</span>
                            <button
                                onClick={handlePlaceOrder}
                                className="bg-purple-800 text-white px-8 py-3 rounded hover:bg-purple-900 transition-colors"
                            >
                                Place Order
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment

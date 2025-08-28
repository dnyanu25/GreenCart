import React, { useEffect } from 'react'
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { dummyOrders } from '../assets/assets';

const myOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const {currency} = useAppContext();

    const fetchMyOrders = async () => {
        setMyOrders(dummyOrders)
    }

    useEffect(() => {
        fetchMyOrders();
    }, [])

    return (
        <div className='mt-16 pb-16'>
            <div className='text-2xl font-medium uppercase'>
                <p>My Orders</p>
            </div>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>

            {myOrders.map((order, index) => (
                <div 
                    key={index} 
                    className='border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl'
                >
                    <p className='flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col'>
                        <span>orderId: {order._id}</span>
                        <span>Payment: {order.paymentType}</span>
                        <span>Total Amount: {currency}{order.amount}</span>
                    </p>
                    {order.items.map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className={`relative bg-white text-gray-500/70
                            ${order.items.length !== itemIndex + 1 && "border-b"}
                            border-gray-300 flex flex-col
                            md:flex-row md:items-center justify-between p-4 py-5
                            md:gap-16 w-full max-w-4xl`}
                        >
                            {/* display image and category 1st col */}
                            <div className='flex items-center mb-4 md:mb-0'>
                                <div className='bg-primary/10 p-4 rounded-lg'>
                                    <img 
                                        src={item.product.image[0]} 
                                        alt=""
                                        className='w-16 h-16'
                                    />
                                </div>
                                <div className='ml-4'>
                                    <h2 className='text-xl font-medium text-gray-800'> {item.product.name} </h2>
                                    <p>Category: {item.product.category}</p>
                                </div>
                            </div>
                            
                            {/* Middle Column Details */}
                            <div className='flex flex-col justify-center md:ml-8 mb-4 md:mb-0'>
                                <p> Quantity: {item.quantity || '1'}</p> 
                                <p> Status: {item.Status}</p> 
                                <p> Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            
                            {/* Amount */}
                            <p className='text-primary text-lg font-medium'>
                                Amount:{currency}{item.product.offerPrice * item.quantity}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default myOrders;
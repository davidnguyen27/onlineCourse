import React from 'react'
import CheckOutDetail from '../components/CheckOutDetail';

const CheckOut: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="bg-white">
            <div className="max-w-7x1 mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Check Out</h1>
            </div>
        </div>
        <div className='flex-grow'>
            <div className='max-w-7xl mx-auto p-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='md:col-span-2 bg-white rounded-lg shadow-md p-4'>
                        <CheckOutDetail/>
                    </div>
                    <div className='bg-white rounded-lg shadow-md p-4 h-72'>
                        Order Summary
                    </div>
                    <div className='mt-4 bg-white md:col-span-2 rounded-lg shadow-md p-4'>
                        Select Payment Method
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut;
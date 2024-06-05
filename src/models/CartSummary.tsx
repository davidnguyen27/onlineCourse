import React from 'react';

interface CartSummaryProps {
  total: number;
  originalPrice: number;
  discountPrice: number;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total, originalPrice, discountPrice, onCheckout }) => {
  return (
    <div className="p-4 bg-gray-100 border rounded-lg shadow-sm">
      <div className="relative mb-4">
        <h2 className="font-bold text-lg inline-block">Total</h2>
        <span className="block h-1 bg-red-500 mt-2" style={{ width: 'calc(20% + 4px)', marginLeft: '-2px', marginBottom: '2px' }}></span>
      </div>
      <div className="font-semibold flex justify-between mt-2">
        <span>Original Price</span>
        <span className="text-black">${originalPrice}</span>
      </div>
      <hr className='mt-4'/>
      <div className="flex justify-between mt-2">
        <span>Discount Price</span>
        <span className="font-semibold text-gray-500">${discountPrice}</span>
      </div>
      <hr className='mt-4'/>
      <div className="font-bold flex justify-between mt-2">
        <span>Total</span>
        <span className="text-black">${total}</span>
      </div>
      <hr className='mt-4'/>
      <button
        className="mt-4 bg-red-500 text-white py-2 px-14 rounded transition hover:bg-black hover:text-white block mx-auto"
        onClick={onCheckout}
      >
        Check Out Now
      </button>
    </div>
  );
};

export default CartSummary;

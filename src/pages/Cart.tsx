import React, { useState } from "react";
import CartItem from "../models/ICartItem";
import CartSummary from "../models/CartSummary";

const initialCartItems = [
  {
    id: 1,
    name: "The Web Developer Bootcamp",
    price: 50.0,
    quantity: 1,
    discount: 10.0,
    title: "Web Development | Python",
    author: "Ko Bin Hung",
    image:
      "https://miro.medium.com/v2/resize:fit:2560/1*DbUarpd2cmH9fLFXEQ5oeg.jpeg",
  },
  {
    id: 2,
    name: "React For Beginners",
    price: 20.0,
    quantity: 1,
    discount: 10.0,
    title: "Web Development | React",
    author: "Leonardo Mana",
    image:
      "https://wesbos.com/static/2c1ec59aaf97caa738566a34f5cea0ea/faec4/Screen-Shot-2018-02-28-at-10.13.05-AM.png",
  },
];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // const handleQuantityChange = (id: number, quantity: number) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity } : item
  //     )
  //   );
  // };

  const handleRemove = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const originalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountPrice = cartItems.reduce((acc, item) => acc + item.discount, 0);
  const total = originalPrice - discountPrice;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto p-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        </div>
      </div>
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} onRemove={handleRemove} />
              ))}
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <CartSummary
                originalPrice={originalPrice}
                discountPrice={discountPrice}
                total={total}
                onCheckout={() => alert("Check Out Now")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

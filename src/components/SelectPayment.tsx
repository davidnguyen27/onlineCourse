import React, { useState } from "react";
import PaymentButton from "./PaymentButton";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import "../styles/index.css";

interface OrderSummaryProps {
  total: number;
  originalPrice: number;
  discountPrice: number;
}

const SelectPayment: React.FC<OrderSummaryProps> = ({
  total,
  originalPrice,
  discountPrice,
}) => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const handlePaymentSelect = (paymentMethod: string) => {
    setSelectedPayment(
      paymentMethod === selectedPayment ? null : paymentMethod
    );
  };

  return (
    <div className="p-4">
      <div className="relative mb-4">
        <h2 className="font-semibold text-lg inline-block">
          Select Payment Method
        </h2>
        <span
          className="block h-1 bg-red-500 mt-2"
          style={{
            width: "50px",
            height: "1.5px",
            marginLeft: "-2px",
            marginBottom: "2px",
          }}
        ></span>
      </div>
      <PaymentButton
        selectedPayment={selectedPayment}
        handlePaymentSelect={handlePaymentSelect}
      />
      {selectedPayment && <PaymentForm selectedPayment={selectedPayment} />}
      <OrderSummary
        total={total}
        originalPrice={originalPrice}
        discountPrice={discountPrice}
      />
      <div className="flex justify-end mt-4">
        <button className="bg-red-500 text-white py-3 px-14 rounded transition hover:bg-black hover:text-white">
          Confirm Checkout
        </button>
      </div>
    </div>
  );
};

export default SelectPayment;

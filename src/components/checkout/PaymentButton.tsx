import React from "react";
import { CreditCardOutlined, BankOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

interface PaymentButtonProps {
  selectedPayment: string | null;
  handlePaymentSelect: (paymentMethod: string) => void;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  selectedPayment,
  handlePaymentSelect,
}) => {
  return (
    <div className="flex mt-12 justify-center font-semibold">
      <div className="w-1/3 flex items-center justify-center">
        <button
          className={`relative border border-gray-300 bg-gray-200 p-4 w-full ${
            selectedPayment === "creditCard" ? "bg-gray-300" : ""
          }`}
          onClick={() => handlePaymentSelect("creditCard")}
        >
          <span className="mr-2">
            <CreditCardOutlined />
          </span>
          <span className={selectedPayment === "creditCard" ? "hover-red" : ""}>
            Credit Card
          </span>
          {selectedPayment === "creditCard" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <button
          className={`relative border border-gray-300 bg-gray-200 p-4 w-full ${
            selectedPayment === "paypal" ? "bg-gray-300" : ""
          }`}
          onClick={() => handlePaymentSelect("paypal")}
        >
          <span className="mr-2">
            <FontAwesomeIcon icon={faPaypal} />
          </span>
          <span className={selectedPayment === "paypal" ? "hover-red" : ""}>
            Paypal
          </span>
          {selectedPayment === "paypal" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <button
          className={`relative border border-gray-300 bg-gray-200 p-4 w-full ${
            selectedPayment === "bankTransfer" ? "bg-gray-300" : ""
          }`}
          onClick={() => handlePaymentSelect("bankTransfer")}
        >
          <span className="mr-2">
            <BankOutlined />
          </span>
          <span
            className={selectedPayment === "bankTransfer" ? "hover-red" : ""}
          >
            Bank Transfer
          </span>
          {selectedPayment === "bankTransfer" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentButton;

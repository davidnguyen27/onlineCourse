import React, { useState } from "react";
import { Form } from "antd";

const CheckOutDetail: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="p-4">
      <div className="relative mb-4">
        <h2 className="font-semibold text-lg inline-block">Billing Details</h2>
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
      <div
        onClick={toggleForm}
        className="font-semibold flex mt-6 justify-between text-lg"
      >
        <span>Edit Information</span>
        <button className="ml-2">{isFormOpen ? "-" : "+"}</button>
      </div>
      {isFormOpen && (
        <div className="mt-4">
          <form>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            {/* Thêm các trường khác nếu cần */}
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="mt-6">
        Joginder Singh <br />
        #1234 Street No. 45, Ward No. 60, Phase 3, Shahid <br />
        Karnail Singh Nagar, Near Pakhowal Road. <br />
        Ludhiana, Punjab, 141013 <br />
        India
      </div>
    </div>
  );
};

export default CheckOutDetail;

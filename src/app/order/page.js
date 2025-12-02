"use client";
import { useEffect, useState } from "react";
import { useCount } from "@/context/CountContext";

const Order = () => {
  const { count, removeItem } = useCount();

  const [storedMeal, setStoredMeal] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("meal")) || [];
    setStoredMeal(saved);
  }, [count]);

  
  const handleRemove = () => {
    removeItem();
    
    localStorage.removeItem("meal");
    setStoredMeal([]);

  }
const handleClick = () => {
  if(storedMeal.length === 0) {
    alert('No items in order to submit!')
    return;
  }
  alert('Order Submitted!')
  removeItem();

  localStorage.removeItem("meal");
  setStoredMeal([]);
}


  return (
    <div>
      <div
        className="card bg-black/50 backdrop-blur-lg md:max-w-1/2 font-stretch-condensed
"
      >
        <div className="card-body">
          <h1 className="font-bold text-2xl text-white ">Review Your Order</h1>
          <ul className="text-2xl capitalize text-white font-bold ">
            {storedMeal.length > 0
              ? storedMeal.map((item, index) => (
                  <li key={index}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </li>
                ))
              : " No Items Selected"}
          </ul>
          <p className="text-white text-2xl font-extrabold">
            ----------------------------
          </p>
          <p className="text-white text-2xl font-bold">
            Total Price : $
            {storedMeal
              .reduce((total, item) => total + item.price, 0)
              .toFixed(2)}
          </p>
          <div className="card-actions justify-end">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClick}
            >
              Submit Order
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={handleRemove}
            >
              Restart Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

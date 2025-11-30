"use client";
import { useEffect, useState } from "react";
import { useCount } from "@/context/CountContext";

const Order = () => {
  const { count, handleRemove } = useCount();

  const [storedMeal, setStoredMeal] = useState([]);
  const [newCount, setNewCount] = useState(count);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("meal")) || [];
    setStoredMeal(saved);
    console.log(newCount);
  }, [newCount]);

  const handleClick = () => {
    handleRemove();
    setStoredMeal([]);
    setNewCount(0);
  }




  return (
    <div>
      <div className="card bg-amber-800/30 backdrop-blur-xs md:max-w-1/2">
        <div className="card-body">
          <h1 className="font-bold text-2xl text-white">Review Your Order</h1>
          <ul className="text-2xl capitalize text-white font-bold">
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
            <button type="button" className="btn btn-success">
              Submit Order
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={handleClick}
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

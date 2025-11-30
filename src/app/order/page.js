"use client"
import { useEffect, useState } from 'react';
import { useCount } from "@/context/CountContext";



const Order = () => {

  const { count } = useCount();

  const [storedMeal, setStoredMeal] = useState([]);
  const [newCount, setNewCount ] = useState(count);

  useEffect(() => {

    const saved = JSON.parse(localStorage.getItem('meal')) || [];
    setStoredMeal(saved);
    console.log(newCount);
  }, [newCount]);

  const handleRemove = () => {
    localStorage.removeItem('meal');
   
    setNewCount(0)
    console.log(count)
  }
  return (
    <div>
      <div className="card bg-amber-800/30 backdrop-blur-xs md:max-w-1/2">
        <div className="card-body">
          <h1 className="font-bold text-2xl text-white">Review Your Order</h1>
          <ul className="text-2xl capitalize text-white font-bold">
            {storedMeal.length > 0 ? (
              storedMeal.map((item, index) => (
                <li key={index}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              ))
            ) : (
              " No Items Selected"
            )}
          </ul>
          <div className="card-actions justify-end">
            <button type="button" className="btn btn-success">
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
}

export default Order;
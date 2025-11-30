"use client"
import { useEffect, useState } from 'react';



const Order = () => {

  const [storedLunch, setStoredLunch] = useState([]);

  useEffect(() => {

    const saved = JSON.parse(localStorage.getItem('lunch')) || [];
    setStoredLunch(saved);
  }, []);

  const handleRemove = () => {
    localStorage.removeItem('lunch');
    localStorage.removeItem('dessert');
  }
  return (
    <div>
      <div className="card bg-amber-800/30 backdrop-blur-xs md:max-w-1/2">
        <div className="card-body">
          <h1 className="font-bold text-2xl text-white">Review Your Order</h1>
          <ul className="text-2xl capitalize text-white font-bold">
            {storedLunch.length > 0 ? (
              storedLunch.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
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
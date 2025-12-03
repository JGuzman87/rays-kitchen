"use client";
import { useEffect, useState } from "react";
import { useCount } from "@/context/CountContext";
import Toast from "@/components/Toast";
import Link from "next/link";

const Order = () => {
  const { count, removeItem, isLoading,setIsLoading } = useCount();

  const [storedMeal, setStoredMeal] = useState([]);
 
  const [orderName, setOrderName] = useState("");
  const [visible, setVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastStyle, setToastStyle] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("meal")) || [];
    setStoredMeal(saved);
  }, [count]);

  const handleClick = () => {
    if (storedMeal.length === 0 || orderName.trim() === "") {
      setToastMessage(
        "Cannot submit order. Please add items and provide your name."
      );
      setToastStyle("alert alert-error font-bold");
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
       
      }, 2000);
      return;
    }
    setToastMessage(`Thank you, ${orderName}! Your order has been submitted.`);
    setToastStyle("alert alert-success font-bold");
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
  
    }, 2000);

    removeItem();

    localStorage.removeItem("meal");
    setStoredMeal([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="skeleton h-50 md:w-1/2  bg-black/30"></div>
      ) : (
        <div
          className="card bg-black/50 backdrop-blur-lg md:max-w-1/2 font-stretch-condensed
"
        >
          {visible && <Toast message={toastMessage} styling={toastStyle} />}
          <div className="card-body">
            <h1 className="font-bold text-2xl text-white ">
              Review Your Order
            </h1>

            <ul className="text-2xl capitalize text-white font-bold ">
              {storedMeal.length > 0
                ? storedMeal.map((item, index) => (
                    <li key={index}>
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                    </li>
                  ))
                : <p className="font-thin">No items selected. <br />Checkout our menus below!</p>}
            </ul>
            {storedMeal.length === 0 && (
              <div className="flex gap-4 text-white">
                <Link href={"/lunch"} className=" hover:text-blue-400">
                  Lunch
                </Link>
                <Link href={"/dessert"} className=" hover:text-blue-400">
                  Dessert
                </Link>
              </div>
            )}

            <p className="text-white text-2xl">----------------------------</p>

            <p className="text-white text-2xl font-extrabold">
              Total Price : $
              {storedMeal
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </p>
            <div className="card-actions justify-end">
              {storedMeal.length > 0 && (
                <input
                  type="text"
                  placeholder="Name for your order"
                  className="input input-bordered w-full max-w-xs"
                  value={orderName}
                  onChange={(e) => setOrderName(e.target.value)}
                  required
                />
              )}
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
                onClick={() => removeItem()}
              >
                Restart Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;

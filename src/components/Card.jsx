"use client";
import { useCount } from "@/context/CountContext";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Toast from "./Toast";

const Card = ({ mealName, imgUrl, price, imgAlt }) => {

  const { addCount, count } = useCount();

  const imageRef = useRef(null);

  const [showAlert, setShowAlert] = useState(false);

  const addLocalStorage = (item) => {

  const existingItems =  JSON.parse(localStorage.getItem("meal")) || [];
  const itemWithPrice = [...existingItems, {name: item, price: price}];
   const newItem = [...itemWithPrice];
   if(newItem.length <= 5) {

     localStorage.setItem('meal', JSON.stringify(newItem))
   }
  

  }

  const handleClick = () => {

    if(count >=5 ) {
      alert("You can only add up to 5 items to your order.");
      return;
    }
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  
    addLocalStorage(imageRef.current.alt);
    addCount();
  };

  return (
    <>
      <div className="card shadow-2xl bg-white/50 backdrop-blur-xs gap-2">
        {showAlert && (
          <Toast
            message={`${mealName} added to order!`}
            styling={"alert alert-success font-bold"}
          />
        )}
        <figure>
          <Image
            ref={imageRef}
            className="w-full h-48 object-cover rounded-t-2xl p-1"
            alt={imgAlt}
            src={imgUrl}
            width={400}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h1 className="text-lg font-bold">{mealName}</h1>
          <p className="font-bold">${price}</p>
          <div className="card-actions justify-end">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleClick(imageRef)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

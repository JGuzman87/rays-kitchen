"use client";
import { useCount } from "@/context/CountContext";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Card = ({ mealName, imgUrl, price, imgAlt }) => {

  const { addCount } = useCount();



  const imageRef = useRef(null);

  const addLocalStorage = (item) => {

  const existingItems =  JSON.parse(localStorage.getItem("meal")) || [];
  const itemWithPrice = [...existingItems, {name: item, price: price}];
   const newItem = [...itemWithPrice];
   if(newItem.length <= 5) {

     localStorage.setItem('meal', JSON.stringify(newItem))
   }
  

  }

  const handleClick = () => {
 

    addLocalStorage(imageRef.current.alt);
    addCount();
  };

  return (
    <div className="card shadow-2xl bg-white gap-2">
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
        <p>{price}</p>
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
  );
};

export default Card;

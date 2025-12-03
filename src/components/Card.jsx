"use client";
import { useCount } from "@/context/CountContext";
import { useToast } from "@/context/ToastContext";
import { useState, useRef } from "react";
import Image from "next/image";
import Toast from "./Toast";

const Card = ({ mealName, imgUrl, price, imgAlt }) => {
  const { addCount, count } = useCount();
  const { setVisible, visible } = useToast();

  const imageRef = useRef(null);

  const addLocalStorage = (item) => {
    const existingItems = JSON.parse(localStorage.getItem("meal")) || [];
    const itemWithPrice = [...existingItems, { name: item, price: price }];
    const newItem = [...itemWithPrice];
    if (newItem.length <= 5) {
      localStorage.setItem("meal", JSON.stringify(newItem));
    }
  };

  const handleClick = () => {
    if (count >= 5) {
      setVisible(true);
    const timer = setTimeout(() => {
        setVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);

    addLocalStorage(imageRef.current.alt);
    addCount();
  };

  return (
    <>
      {visible && (
        <Toast
          message={`${mealName} added to order!`}
          styling={"alert alert-success font-bold"}
        />
      )}
      {count >= 5 && visible && (
        <Toast
          message={"5 items added to order. Cannot add more."}
          styling="alert alert-warning font-bold"
        />
      )}
      <div className="card shadow-2xl bg-white/50 backdrop-blur-xs gap-2">
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

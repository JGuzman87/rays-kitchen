"use client"
import {useCount} from "@/context/CountContext";
import { useState } from 'react';
import Image from "next/image";




const Card = ({ mealName, imgUrl, price }) => {

  const [lunchItem, setLunchItem ] = useState([])
  const { addCount } = useCount();

  const handleClick = () => {
  
    const storedLunch = localStorage.setItem('lunch', JSON.stringify(lunchItem));
    
    addCount();

   
  }
  return (
    <div className="card shadow-2xl bg-white gap-2">
      <figure>
        <Image
          className="w-full h-48 object-cover rounded-t-2xl p-1"
          alt="image of food items"
          src={imgUrl}
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h1 className="text-lg font-bold">{mealName}</h1>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button type="button" className="btn btn-success" onClick={handleClick}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

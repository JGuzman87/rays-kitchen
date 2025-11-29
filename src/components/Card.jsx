"use client"
import {useState} from "react";
import Image from "next/image";

const Card = ({ mealName, imgUrl, price }) => {

  const [count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(num => num + 1);
  }
  return (
    <div className="card shadow-2xl bg-white gap-2">
      <figure>
        <Image
          className="w-full h-48 object-cover p-1"
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

import React from "react";
import Image from "next/image";

const Card = ({ mealName, imgUrl, price }) => {
  return (
    <div className="card w-sm  shadow-2xl bg-white">
      <div className="card-body">
        <p className="font-bold text-center">{mealName}</p>
        <Image className="items-center" alt="image of food items"src={imgUrl} width={500} height={500} />
        <p>{price}</p>
        <button type="button" className="btn btn-success">add to cart</button>
      </div>
    </div>
  );
};

export default Card;

import React from 'react'
import Image from 'next/image';

const Carousel = () => {
  return (
    <div className="carousel carousel-center bg-neutral/80 backdrop-blur-xs rounded-box  space-x-1 p-4">
      <div className="carousel-item">
        <Image
          width={500}
          height={500}
          alt="image of food"
          src="/jibarito.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={500}
          height={500}
          alt="image of food"
          src="/tembleque.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={500}
          height={500}
          alt="image of food"
          src="/pernil2.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={500}
          height={500}
          alt="image of food"
          src="/mofongo1.png"
          className=" w-cover h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={500}
          height={500}
          alt="image of food"
          src="/treslechescake.png"
          className="w-cover h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={500}
          height={500}
          alt="image of food"
          src="/arrozcondulce.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <Image
          width={500}
          height={500}
          alt="image of food"
          src="/arroz-guandules.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
    </div>
  );
}

export default Carousel
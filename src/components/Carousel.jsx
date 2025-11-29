import React from 'react'

const Carousel = () => {
  return (
    <div className="carousel md:carousel-center bg-neutral rounded-box  space-x-2 p-4">
      <div className="carousel-item">
        <img
          src="/jibarito.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/tembleque.png"
          className="w-fit h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="tresleches.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/pernil.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/mofongo.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="/arroz-guandules.png"
          className="w-full h-100 object-cover p-1 rounded-box"
        />
      </div>
      <div className="carousel-item">
        <img
          src="puertorican-flan.png"
          className="w-full h-100  object-cover p-1 rounded-box"
        />
      </div>
    </div>
  );
}

export default Carousel
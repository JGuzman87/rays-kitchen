"use client"
import React from 'react'
import Card from '@/components/Card';
import MotionWrapper from '@/components/MotionWrapper';


const DessertMenuPage = () => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <h1 className="font-bold text-center text-5xl  bg-white/40 rounded-lg p-1 font-stretch-50%  backdrop:blur-2xl w-fit self-center">
        Dessert Menu
      </h1>
      <MotionWrapper>
        <div className="grid md:grid-cols-4 gap-2">
          <Card
            mealName="Flan"
            imgUrl="/puertorican-flan.png"
            imgAlt="flan"
            price={3.45}
          />
          <Card
            mealName="Tres Leches Whole Cake"
            imgUrl="/treslechescake.png"
            imgAlt="tresleches"
            price={32.99}
          />
          <Card
            mealName="Tembleque"
            imgUrl="/tembleque.png"
            imgAlt="tembleque"
            price={5.99}
          />
          <Card
            mealName="Arroz Con Dulce"
            imgUrl="/arrozcondulce.png"
            imgAlt="arrozcondulce"
            price={5.99}
          />
        </div>
      </MotionWrapper>
    </div>
  );
}

export default DessertMenuPage;
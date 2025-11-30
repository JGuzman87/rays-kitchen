import React from 'react'
import Card from '@/components/Card';
const DessertMenuPage = () => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <h1 className="font-bold text-center text-5xl font-mono bg-white w-fit self-center">
        Dessert Menu
      </h1>
      <div className="grid md:grid-cols-4 gap-2">
        <Card
          mealName="Flan"
          imgUrl="/puertorican-flan.png"
          imgAlt="flan"
          price={5.99}
        />
        <Card
          mealName="Tres Leches Cake"
          imgUrl="/tresleches.png"
          imgAlt="tresleches"
          price={5.99}
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
    </div>
  );
}

export default DessertMenuPage;
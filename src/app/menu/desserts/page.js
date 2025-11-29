import React from 'react'
import Card from '@/components/Card';
const DessertMenuPage = () => {
  return (
    <div className='flex flex-col p-4 gap-2'>
      <h1 className="font-bold text-center text-5xl font-mono bg-white w-fit self-center">Dessert Menu</h1>
      <div className="grid md:grid-cols-4 gap-2">
        <Card mealName="Flan" imgUrl="/puertorican-flan.png" price={"$5.99"} />
        <Card mealName="Tres Leches Cake" imgUrl="/" price={"$5.99"} />
        <Card mealName="Tembleque" imgUrl="/" price={"$5.99"} />
        <Card mealName="Dulce de Coco" imgUrl="/" price={"$5.99"} />
      </div>
    </div>
  );
}

export default DessertMenuPage;
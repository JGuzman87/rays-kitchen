import React from 'react'
import Card from '@/components/Card';

const LunchMenuPage = () => {
  return (
    <div className='flex flex-col p-4 gap-2'>
      <h1 className="font-bold text-center text-5xl font-mono bg-white w-fit self-center">
        Lunch Menu
      </h1>
      <div className="grid md:grid-cols-3 gap-2">
        <Card
          mealName="Arroz Con Guandules"
          imgUrl="/arroz-guandules.png"
          price={"$5.99"}
        />
        <Card mealName="Pernil" imgUrl="/" price={"$5.99"} />
        <Card mealName="Potato Salad" imgUrl="/" price={"$5.99"} />
        <Card mealName="Mofongo" imgUrl="/" price={"$5.99"} />
      </div>
    </div>
  );
}

export default LunchMenuPage;
import React from 'react'
import Card from '@/components/Card';

const LunchMenuPage = () => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <h1 className="font-bold text-center text-5xl font-mono bg-white w-fit self-center">
        Lunch Menu
      </h1>
      <div className="grid md:grid-cols-4 gap-2 p-1">
        <Card
          mealName="Arroz Con Guandules"
          imgUrl="/arroz-guandules.png"
          imgAlt="arroz"
          price={5.99}
        />
        <Card
          mealName="Pernil"
          imgUrl="/pernil.png"
          imgAlt="pernil"
          price={5.99}
        />
        <Card
          mealName="Jibarito"
          imgUrl="/jibarito.png"
          imgAlt="jibarito"
          price={5.99}
        />
        <Card
          mealName="Mofongo"
          imgUrl="/mofongo.png"
          imgAlt="mofongo"
          price={5.99}
        />
      </div>
    </div>
  );
}

export default LunchMenuPage;
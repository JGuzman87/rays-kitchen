import React from 'react'
import Card from '@/components/Card';

const LunchMenuPage = () => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <h1 className="font-bold text-center text-5xl font-stretch-50% bg-black/10 backdrop:blur-2xl w-fit self-center">
        Lunch Menu
      </h1>
      <div className="grid md:grid-cols-4 gap-2 p-1">
        <Card
          mealName="Arroz Con Guandules"
          imgUrl="/arroz-guandules.png"
          imgAlt="Arroz Con Guandules"
          price={4.99}
        />
     
        <Card
          mealName="Pernil"
          imgUrl="/pernil2.png"
          imgAlt="pernil"
          price={7.99}
        />
        <Card
          mealName="Jibarito"
          imgUrl="/jibarito.png"
          imgAlt="jibarito"
          price={6.55}
        />
        <Card
          mealName="Mofongo"
          imgUrl="/mofongo1.png"
          imgAlt="mofongo"
          price={9.99}
        />
      </div>
    </div>
  );
}

export default LunchMenuPage;
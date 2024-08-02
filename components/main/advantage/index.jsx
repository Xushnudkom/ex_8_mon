import React from 'react';
import Image from 'next/image';
import Car from '@/public/proucts/u_truck.svg'
import Order from '@/public/proucts/u_shield-check.svg'
import Foiz from '@/public/proucts/u_percentage.svg'
import List from '@/public/proucts/u_file-check-alt.svg'

const advantages = [
  {
    icon: Car,
    text: 'Доставка по всему Узбекистану',
  },
  {
    icon: Order,
    text: 'Доставка по всему Узбекистану',
  },
  {
    icon: Foiz,
    text: 'Скидки и акции',
  },
  {
    icon: List,
    text: 'Широкий ассортимент товаров',
  },
];


const Advantages = () => {
  return (
    <div className="py-6 bg-gray-100 justify-start w-full items-center container mx-auto px-10">
      <h2 className="text-2xl font-bold mb-6 ">Преимущества</h2>
      <div className="flex text-[20px]  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {advantages.map((advantage, index) => (
          <div className="bg-white w-[292px] h-[289px] items-center hover:scale-105    rounded-lg shadow-md p-6 text-center" key={index}>
            <Image className="text-4xl ml-20 mt-10 mb-4" src={advantage.icon}></Image>
            <p className="text-lg text-gray-700">{advantage.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;

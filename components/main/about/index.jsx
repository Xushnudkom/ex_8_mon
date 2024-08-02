import Next from '@/public/proucts/next_page.svg'
import React from 'react';
import Image from 'next/image';
import Puma from '@/public/proucts/puma.svg'
import Linder from '@/public/proucts/linder.svg'
import Nike from '@/public/proucts/nike.svg'
import Adidas from '@/public/proucts/adidas.svg'
import Reebook from '@/public/proucts/reebook.svg'

const Index = () => {
  return (
    <div className="py-8 bg-gray-100 justify-start w-full items-center container pb-[80px] mx-auto px-10">
      <h2 className="text-2xl font-bold mb-6">O нас</h2>
      <div className="bg-black w-[1160px] h-[367px] gap-1 text-white p-8 rounded-lg mb-6">
        <p className="mb-4  w-[719px] opacity-80 mt-10 ml-10 text-white text-xl font-normal font-['SF Pro Display'] leading-7">
          Интернет магазин спортивных товаров 
          <a href="https://www.sportmarket.com/" className="underline hover:text-[#FBD029] transition-all">7MARKETSPORT.UZ</a> 
          предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. 
          Ведется работа как с розничными покупателями, так и с оптовыми клиентами. 
          Разнообразие форм оплаты заметно упрощает процесс приобретения товара. 
          Действует гибкая система скидок. 
        </p>
        <div className="flex  justify-end">
          <Image className="cursor-pointer text-4xl hover:opacity-80 w-[112px] h-9 relative" src={Next}></Image>
        </div>
      </div>
      <div className="flex gap-24 justify-center bg-white pl-[46px] pr-[46px] pt-[46px] pb-[46px] rounded-xl">
       <Image src={Puma} alt='...'/>
       <Image src={Linder} alt='...'/>
       <Image src={Nike} alt='...'/>
       <Image src={Adidas} alt='...'/>
       <Image src={Reebook} alt='...'/>
       <Image src={Puma} alt='...'/>
       <Image src={Linder} alt='...'/>
      </div>
    </div>
  );
};

export default Index;

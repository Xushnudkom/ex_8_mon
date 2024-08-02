import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import YellowIcon from '@/public/Aboutus/yellow_icon.svg'
import CaruselProduct from "@/components/main/carusel-prodoct";

const Index = () => {
  return (
    <>
         <div className='justify-center container mx-auto px-10 py-7'>
         <div className='flex gap-3 items-center'>
             <Image src={Home} alt='...'/>
             <Link href="/">
             <p className='text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
             </Link>
             <Image src={Arrow} alt='...'/>
             <Link href="/product">
             <p className='text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Продукты</p>
             </Link>
             <Image src={Arrow} alt='...'/>
             <p className='text-[#1F1D14]'>Оплата и Доставка</p>
           </div>
          <div className='flex gap-7'>
          <div className='mt-[35px] pt-[18px] h-[256px] pl-[9px] pb-[184px] rounded-md pr-[1px] bg-white w-[187px]'>
            <div className='flex gap-2'>
            <Image src={YellowIcon} alt='...'/>
            <p>Оплата и Доставка</p>
            </div>
            
           </div>
           <div className='pt-[40px] pl-[50px] pr-[66px] pb-[70px] mt-[35px] rounded-md bg-white'>
            <h1 className='text-[24px] font-semibold mb-[17px]'>Способы оплаты</h1>
            <p className='w-[560px] mb-[29px]'>Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.</p>
            <p className='w-[550px] mb-[35px]'>После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ».В  окне, появится «Контактная информация» и «Способы доставки», которые Вам не обходимо заполнить. </p>
            <p className='w-[598px]'>Вы можете выбрать более подходящий для Вас способ оплаты:</p>
            <p className='w-[598px]'>-Оплата на месте;</p>
            <p className='w-[598px]'>-Оплата по терминалу;</p>
            <p className='w-[598px] mb-[30px]'>-Оплата через платёжные системы, такие как CLICK, Payme.</p>
            <p className='w-[598px] mb-[40px]'>Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.</p>

            <h1 className='text-[24px] font-semibold mb-[17px]'>Доставка</h1>
            <p className='w-[560px] mb-[29px]'>Тарифы на доставку товаров по Ташкенту: </p>
            <p className='w-[598px]'>-20.000 сум для товаров до 150.000 сум</p>
            <p className='w-[598px]'>-Бесплатная доставка для всех товаров от 150.000 сум</p>
            <p className='w-[598px] mt-[30px]'>Тарифы на доставку товаров по всех регионов:</p>
            <p className='w-[598px]'>-Платная доставка для всех товаров по согласованной цене</p>
            <p className='w-[598px]'>-Бесплатная установка для всех тренажеров</p>
            

           </div>
          </div>
          <div className="pt-[76px]">
            <h1 className="text-[32px] ml-[30px] mb-[20px]">Акция</h1>
              <CaruselProduct text="Акция" bg="#FF1C1C"/>         
          </div>
         </div>
    </>
  )
}

export default Index
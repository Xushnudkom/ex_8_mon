"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import productImage from "@/public/proucts/krasovka.svg";
import avatar from "@/public/proucts/avatar.png";
import cart from "@/public/mainimg/icon_shopping.svg";
import sliders from "@/public/proucts/sliders.png";
import share from "@/public/Aboutus/u_share-alt.svg";
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import Image from "next/image";
import Link from "next/link";
import CaruselProduct from "@/components/main/carusel-prodoct";

const Index = () => {
  const imgList = [productImage, productImage, productImage, productImage];

  return (
    <div className="justify-center container mx-auto px-10 py-7">
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
             <p className='text-[#1F1D14]'>Гантель виниловая, 2 x 3 кг</p>
           </div>
           <div className="p-4 md:p-8 bg-gray-100">
         <div className="flex flex-col md:flex-row gap-8 p-6 rounded-lg bg-white">
           <div className="md:w-1/2 ">
             <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full rounded-xl overflow-hidden"
              modules={[Navigation, Pagination]}
            >
              {imgList.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={item}
                    alt={`Product image ${index + 1}`}
                    width={370}
                    height={370}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex gap-2 mt-4">
              {imgList.map((item, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-white p-2 border-2 border-[#FBD029] ml-[40px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={item}
                    alt={`Thumbnail image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-8 bg-white mb-[40px] ">
            <h1 className="text-2xl font-bold">Гантель виниловая, 2 x 3 кг</h1>
            <p className="mt-2 text-gray-700">
              В составе томатов в большом количестве содержатся сахары, ликопин,
              пектин, бетакаротин, витамины.
            </p>
            <p className="mt-2 text-gray-700">В наличии: 2 шт.</p>
            <p className="mt-2 text-gray-700">Страна производитель: Китай</p>
            <p className="mt-4 text-2xl font-bold">220 000 UZS / 1 шт.</p>
            <div className="flex gap-4 mt-4">
              <button className=" flex items-center gap-[4px] px-4 py-2 bg-[#FBD029] text-black rounded-md">
                <Image src={cart} alt="cart" />
                Корзина
              </button>
              <button className="flex items-center gap-[4px] px-4 py-2 border-2 border-[#FBD029] text-[#FBD029] rounded-md">
                <Image src={sliders} alt="slider" />
                Сравнить
              </button>
            </div>
            <div className="mt-[30px]">
              <button className=" flex items-center gap-[4px] px-4 py-2 border-2 border-gray-300 rounded-md">
                <Image src={share} alt="share" />
                Поделиться
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 container">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Описание</h2>
              <h4 className="text-xl font-semibold">
                Гантель виниловая, 2 х 3 кг
              </h4>
              <p className="mt-4 text-gray-700">
                В составе томатов в большом количестве содержатся сахары,
                клетчатка, пектины, бета-каротин, витамины.
              </p>
              <ul className="mt-4 flex flex-wrap gap-4">
                <li className="w-1/2">
                  <h3 className="text-lg">Вес гантела:</h3>
                  <p className="text-gray-700">5кг</p>
                </li>
                <li className="w-1/2">
                  <h3 className="text-lg">Цвета:</h3>
                  <p className="text-gray-700">Синий, Красный</p>
                </li>
                <li className="w-1/2">
                  <h3 className="text-lg">Вес гантела:</h3>
                  <p className="text-gray-700">5кг</p>
                </li>
                <li className="w-1/2">
                  <h3 className="text-lg">Цвета:</h3>
                  <p className="text-gray-700">Синий, Красный</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Отзывы</h2>
              <div className="mt-4 flex gap-4">
                <div>
                  <Image
                    src={avatar}
                    alt="User avatar"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">Шахзод Анаров</p>
                  <p className="text-gray-700">Клиент</p>
                  <p className="text-gray-700">
                    В составе томатов в большом количестве содержатся сахары,
                    ликопин, пектин, бетакаротин, витамины.
                  </p>
                  <div className="flex">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <div>
                  <Image
                    src={avatar}
                    alt="User avatar"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">Шахзод Анаров</p>
                  <p className="text-gray-700">Клиент</p>
                  <p className="text-gray-700">
                    В составе томатов в большом количестве содержатся сахары,
                    ликопин, пектин, бетакаротин, витамины.
                  </p>
                  <div className="flex">
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                </div>
              </div>
              <a href="#" className="mt-4 text-yellow-400 block">
                Все отзывы
              </a>
            </div>
          </div>
        </div>
    
    </div>
    <div className="pt-[76px]">
            <h1 className="text-[32px] ml-[30px] mb-[20px]">Акция</h1>
              <CaruselProduct text="Акция" bg="#FF1C1C"/>         
          </div>

    </div>
)   
}
export default Index;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Krasovka from "@/public/proucts/krasovka.svg";
import click from "@/public/proucts/click.png";
import payme from "@/public/proucts/payme.png";
import Link from 'next/link'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import Modal from "@/app/choosepayment/page";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const productData = [
  {
    id: 1,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 300000,
    image: Krasovka,
  },
  {
    id: 2,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 150000,
    image: Krasovka,
  },
  {
    id: 3,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 300000,
    image: Krasovka,
  },
  {
    id: 4,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 150000,
    image: Krasovka,
  },
];

const ProductCard = () => {
  const [products, setProducts] = useState(
    productData.map((product) => ({ ...product, count: 0 }))
  );

  const incrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const deleteCard = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const totalQuantity = products.reduce(
    (total, product) => total + product.count,
    0
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.count * product.pricePerUnit,
    0
  );

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
   <Modal
        open={open}
        handleClose={handleClose}
        handleOpen={() => handleOpen(false)}
      />
       <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <AiOutlineClose className="text-white text-2xl" />
              ) : (
                <AiOutlineMenu className="text-white text-2xl" />
              )}
            </button>
          </div>
    <div className="bg-custom-gray pt-[10px] pb-[100px]">
      <div className="justify-between container mx-auto px-10 py-3">
      <div className='flex gap-3 pb-[10px] items-center'>
             <Image src={Home} alt='...'/>
             <Link href="/">
             <p className='text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
             </Link>
             <Image src={Arrow} alt='...'/>
             <Link href="/shopping">
             <p className='text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Корзина</p>
             </Link>
             
           </div>
        <div className="flex flex-col gap-[40px] items-center sm:flex-col lg:flex-row">
          <div className="w-full max-w-[600px] h-auto rounded-lg bg-white p-4">
            <div className="flex justify-between items-center pt-[20px] pb-[15px]">
              <h1 className="text-xl font-bold mb-4">Ваша корзина</h1>
              <button onClick={() => setProducts([])} className="text-red-500">
                Очистить все
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="font-Fira-sans max-w-[655px] h-[140px] flex border rounded-lg overflow-hidden p-4 bg-custom-gray relative mb-4"
                >
                  <button
                    onClick={() => deleteCard(product.id)}
                    className="absolute flex justify-center text-red-500 items-center top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-white"
                  >
                    <DeleteOutlineOutlinedIcon />
                  </button>
                  <div className=" flex flex-col sm:flex-col lg:flex-row">
                    <div className="w-[145px] h-[120px] flex-shrink-0 mr-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={145}
                        height={120}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="font-bold text-xl mb-2">
                        <h1 className=" w-[200px] sm:w-[250px] lg:w-[292px] text-[22px] font-normal leading-normal">
                          {product.name}
                        </h1>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <button
                          onClick={() => decrementCount(product.id)}
                          className="flex justify-center bg-white items-center border w-[32px] h-[32px] font-bold rounded-[50%]"
                        >
                          -
                        </button>
                        <span>{product.count}</span>
                        <button
                          onClick={() => incrementCount(product.id)}
                          className="flex justify-center bg-white items-center border w-[32px] h-[32px] font-bold rounded-[50%]"
                        >
                          +
                        </button>
                        <span className="pl-[20px] text-[22px] font-bold">
                          {(
                            product.count * product.pricePerUnit
                          ).toLocaleString()}{" "}
                          uzs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="pt-[15px] pb-[15px] text-[#06F]">Все информация о доставке</h3>
            <p className="max-w-[384px]">
              Если у вас имеется вопросы позвоните по номеру: <span className="text-[#06F]">+998 (99) 995 55
              65</span>{" "}
            </p>
          </div>
          <div className="w-full max-w-[600px] mt-[-85px] h-[800px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="text-lg font-semibold mb-2">Итого</div>
             <div className="flex justify-between">
             <div className="justify-between mb-1">
                <p>Кол-во товаров:</p>
                <p className="font-semibold">{totalQuantity}</p>
              </div>
              <div className="justify-between mb-1">
                <p>Сумма:</p>
                <p className="font-semibold">
                  {totalPrice.toLocaleString()} UZS
                </p>
              </div>
             </div>
              <div className="text-lg font-semibold mb-2">Ваши данные</div>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Имя / Фамилия
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Имя / Фамилия"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Ваш номер
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+998 _ _ _ _ _ _ _"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="address"
                  >
                    Адрес доставки
                  </label>
                  <div className="relative">
                    <input
                      id="address"
                      type="text"
                      placeholder="Область/город/улица/дом"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 mt-2 mr-2 text-yellow-500"
                    >
                      <svg
                        className="w-6 h-6 bg-[#FBD029]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-lg font-semibold mb-2">Тип оплаты</div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={handleOpen}
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    <Image src={click} alt="click" />
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center px-[25px] py-[17px] text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    <Image
                      src={payme}
                      alt="payme"
                      className="w-[80px] h-[38px]"
                    />
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    Через карту
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    Банковский счёт
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full px-[40px] py-[20px] mt-[50px] hover:opacity-65 bg-[#FBD029] text-black rounded-lg font-semibold"
                >
                  Купить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default ProductCard;

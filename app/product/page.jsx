"use client"
import Link from 'next/link'
import Image from 'next/image'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import CardIcon from '@/public/ProductsSection/board.svg'
import PrHambur from '@/public/ProductsSection/pr_gambur.svg'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ProdCard from '@/app/product/prcard'

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 67]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <div className='justify-center container mx-auto px-10 py-7'>
         <div className='flex gap-3'>
             <Image src={Home} alt='...'/>
             <Link href="/">
             <p className='text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
             </Link>
             <Image src={Arrow} alt='...'/>
             <p className='text-[#1F1D14]'>Продукты</p>
           </div>
           <div className='flex gap-4'>
           <div className='left'>
           <div className='bg-white w-[292px] mt-[20px] pl-[18px] pr-[18px] pt-[20px] pb-[38px] rounded-t-lg'>
             <h2 className='text-[16px] mb-[20px]'>Филтрь</h2>
             <p className='mb-[10px] text-[12px]'>Цена</p>
          <div className='bg-[#F2F2F2] w-[255px] pt-[27px] pb-[27px] pl-[27px] pr-[27px] rounded-xl'>
          <Box sx={{ width: 200 }}>
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  sx={{color:'#ffc107'}}
                />
                <div className='flex justify-between'>
                <p className='font-medium'>{value[0]}uzs</p>
                <p className='font-medium'>{value[1]}uzs</p>
                </div>
              </Box>
          </div>
          <div className='mt-[16px]'>
          <p className='mb-[10px] text-[12px]'>Артикул:</p>
          <input type="text" placeholder='аф566' className='w-[256px] rounded-md border-none bg-[#F2F2F2] pt-[10px] pb-[10px] hover:border-[#FBD029] focus:border-[#FBD029] focus:outline-none' />
          </div>
          <div className='mt-[16px]'>
          <label htmlFor="products" className='block text-[12px] mb-[10px] font-normal'>Выберите категорию:</label>
          <select name="pr" id="products" className='w-[256px] text-opacity-65 border-none rounded-md bg-[#F2F2F2]'>
            <option value="Все">Все</option>
            <option value="...">...</option>
          </select>          
          </div>
          <div className='mt-[16px]'>
          <label htmlFor="products" className='block text-[12px] mb-[10px]'>Новинки:</label>
          <select name="pr" id="products" className='w-[256px] text-opacity-65 border-none rounded-md bg-[#F2F2F2]'>
            <option value="Все">Все</option>
            <option value="...">...</option>
          </select>          
          </div>
          <div className='mt-[16px]'>
          <label htmlFor="products" className='block text-[12px] mb-[10px]'>Акция:</label>
          <select name="pr" id="products" className='w-[256px] text-opacity-65 border-none rounded-md bg-[#F2F2F2]'>
            <option value="Все">Все</option>
            <option value="...">...</option>
          </select>          
          </div>
           </div>
          <button className='bg-[#E4E4E4] text-[15px] pt-[21px] pb-[21px] pl-[79px] pr-[80px] rounded-b-lg hover:bg-[#FBD029] hover:transition-all'>Показать результат</button>
           </div>
           <div className='flex mt-[20px] gap-8'>
              <select name="sort" className='border-none h-min rounded-md pl-[15px] pr-[15px]'>
                <option value="Сортировать">Сортировать</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
              <select name="sort" className='border-none h-min rounded-md pl-[15px] pr-[15px]'>
                <option value="Все продукты">Все продукты</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
           </div>
           <div className='flex h-min gap-2 ml-[320px]'>
            <div className='flex items-center gap-2 pl-[15px] pr-[30px] bg-white pt-[7px] pb-[7px] rounded-md mt-[20px]'>
              <button className=''>Кард</button>
              <Image src={CardIcon} alt='...'/>
            </div>
            <div className='flex items-center gap-2 pl-[15px] pr-[30px] opacity-40 bg-[#e1e0e0] pt-[7px] pb-[7px] rounded-md mt-[20px]'>
              <button className=''>Лист</button>
              <Image src={PrHambur} alt='...'/>
            </div>
           </div>
           <div>
           <div className='ml-[-870px]'>
           <div className='flex gap-6 mt-[80px]'>
           <ProdCard />
           <ProdCard />
           <ProdCard />
           </div>
           
           <div className='flex gap-6'>
           <ProdCard />
           <ProdCard />
           <ProdCard />        
           </div>
           <div className='flex gap-6'>
           <ProdCard />
           <ProdCard />
           <ProdCard />        
           </div>
           <div className='flex gap-6'>
           <ProdCard />
           <ProdCard />
           <ProdCard />        
           </div>
           <button className='text-[20px] w-[845px]  pt-[15px] pb-[15px] bg-white'>Показать ещё</button>
           </div>
           </div>
          

           </div>
          <p className='text-[32px] font-medium mt-[100px] mb-[60px]'>Рекомендуемые продукты</p>
          <div className='flex gap-7 '>
           <ProdCard />
           <ProdCard />
           <ProdCard />  
           <ProdCard />        
           </div>
         </div>
     </>
  );
}


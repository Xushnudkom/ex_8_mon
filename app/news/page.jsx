import React from 'react'
import Useful from './index'
import Image from 'next/image'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import CaruselProduct from "@/components/main/carusel-prodoct";
import Link from 'next/link'
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
            <p className='text-[#1F1D14]'>Полезные информации</p>
          </div>
        <div className='flex gap-5 pt-[30px] justify-center container mx-auto px-10'>
        <Useful />
        <Useful />
        </div>
        <div className='flex gap-5  justify-center container mx-auto px-10'>
        <Useful />
        <Useful />
        </div>
        <div className='flex gap-5 justify-center container mx-auto px-10'>
        <Useful />
        <Useful />
        </div>
        <div className='flex gap-5 justify-center container mx-auto px-10'>
        <Useful />
        <Useful />
        </div>
        <button className="mt-6 pt-[15px] pb-[15px] pr-[45px] pl-[45px] text-[20px] rounded-md border-2 border-[#FBD029] hover:bg-[#FBD029] hover:transition-all hover:text-white">Показать ещё</button>  

        <div className="pt-[76px]">
            <h1 className="text-[32px] ml-[30px] mb-[20px]">Акция</h1>
              <CaruselProduct text="Акция" bg="#FF1C1C"/>         
          </div>

        </div>

        
        
    </>
  )
}

export default Index
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import YellowIcon from '@/public/Aboutus/yellow_icon.svg'
import Share from '@/public/Aboutus/u_share-alt.svg'
import Print from '@/public/Aboutus/fi_printer.svg'
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
             <p className='text-[#1F1D14]'>О нас</p>
           </div>
          <div className='flex gap-7'>
          <div className='mt-[35px] pt-[18px] h-[256px] pl-[9px] pb-[184px] pr-[77px] rounded-md bg-white w-[187px]'>
            <div className='flex gap-2'>
            <Image src={YellowIcon} alt='...'/>
            <p>О нас</p>
            </div>
            <div>
              <p className='text-center mt-5 pl-6'>Вканация</p>
            </div>
           </div>
           <div className='pt-[40px] pl-[50px] pr-[66px] pb-[70px] mt-[35px] rounded-md bg-white'>
            <h1 className='text-[24px] font-semibold mb-[17px]'>7 SPORT MARKET</h1>
            <p className='w-[598px] mb-[29px]'>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>
            <p className='w-[598px] mb-[35px]'>Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>
            <p className='w-[598px] mb-[29px]'>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>
            <p className='w-[598px] mb-[62px]'>Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>
           <div className='flex gap-7 justify-end'>
           <button className='gap-2 flex items-center'>
            <p className='text-[12px]'>Поделиться:</p>
            <Image src={Share} alt='share'/>
            </button>
            <button className='gap-2 flex items-center'>
            <p className='text-[12px]'>Распечатать:</p>
            <Image src={Print} alt='print'/>
            </button>
           </div>
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
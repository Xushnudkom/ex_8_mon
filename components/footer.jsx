import LogoIcon from '@/public/headerimg/logo.svg'
import LogoTitle from '@/public/headerimg/logo_title.svg'
import IconPhone from '@/public/headerimg/u_phone-alt.svg'
import IconEmail from '@/public/headerimg/fi_mail.svg'
import IconLocation from '@/public/headerimg/Location_icon.svg'
import IconInsta from '@/public/footerimg/ic_insta.svg'
import IconFacebook from '@/public/footerimg/ic_facebook.svg'
import IconTelegram from '@/public/footerimg/ic_telegram.svg'
import Link from 'next/link'
import Image from 'next/image'



const Index = () => {
  const links =[
    {path: "/", title: "Privacy Policy"},
    {path: "/", title: "Terms of Use"},
    {path: "/", title: "Sales and Refunds"},
    {path: "/", title: "Legal"},
    {path: "/", title: "Site Map"},

  ]
    
  
  return (
    <>
    <div className='bg-[#FBD029] w-full h-4'>

    </div>
    <div className='justify-start gap-4 pt-20 pb-4  bg-[#1F1D14] text-[#FFF]'>
    <div  className='justify-start flex w-full items-center container mx-auto px-10 max-w-1240'>
   <div className='-mt-64'>
   <Link href='/' className='flex gap-2 justify-start hover:opacity-80 w-32 '>
              <Image src={LogoIcon} alt='logo'/>
              <Image src={LogoTitle} alt='logo_title'/>
            </Link>
   </div>
            <div className='w-full justify-start '>   
              <div className='justify-end  ml-[100px]'>
              <p className='font-semibold mb-5  text-[18px]'>Контакты</p>         
              <div className='flex gap-2 items-center mt-4  font-normal hover:text-[#FBD029] w-[164px]'>
              <Image src={IconPhone} alt='iconPhone' className='w-5'/>
              <p className='text-[16px] font-normal font-sans items-center'>
                <span className='text-[13px] mr-1 items-center opacity-90'>+998 (90)</span>
                565-85-85
              </p>
            </div>
            <div className='flex gap-2 items-center font-normal mt-5 hover:text-[#FBD029] w-[145px]'>
              <Image src={IconEmail} alt='iconPhone' className='w-5'/>
              <p className='text-[16px] font-normal font-sans'>
                info@gmail.com
              </p>
            </div>
            <div className='flex gap-2 items-center font-normal -mt-[70px] ml-[250px] w-64 hover:text-[#FBD029]'>
              <Image src={IconLocation} alt='iconPhone' className='w-5'/>
              <p className='text-[16px] font-normal font-sans'>
                Tashkent Sh. Chilonzor 9 kvartal 12-uy
              </p>
            </div>
              </div>
              <div className='ml-[775px] -mt-[85px]'>
                <p className='text-[18px] font-semibold'>Подписаться</p>
                <input type="text" placeholder='support@figma.com' className='pr-5 pl-5 w-64 pt-3 pb-3 rounded-xl mt-4 hover:border-0 text-black focus:outline-[#FBD029] transition-all'/>
                <button className='block bg-[#FBD029] text-[#1F1D14] text-[16px] font-normal pr-5 pl-5 pt-3 pb-3 rounded-xl w-64 mt-4 hover:bg-black hover:text-[#FBD029] transition-all'>Отправить</button>
              </div>

              <div className='flex gap-3 ml-[780px] mt-[49px]'>
                <Link href='https://www.instagram.com/' target='_blank' >
                  <Image src={IconInsta} alt='iconinstagram'/>
                </Link>
                <Link href='https://www.facebook.com/' target='_blank'>
                  <Image src={IconFacebook} alt='icondfacebook'/>
                </Link>
                <Link href='https://web.telegram.org/a/' target='_blank'>
                  <Image src={IconTelegram} alt='icontelegram'/>
                </Link>
                
              </div>
              
              <hr className='w-[1595px] -ml-96 mt-10 opacity-45 '/>
              
             
             <div className='items-center'>
             <p className='font-light text-[12px] -ml-32 mt-4 opacity-85'>
              © 2022 All Rights Reserved
              </p>

              <div className='flex gap-9 ml-[510px] -mt-5 opacity-70'>
              {
              links.map((item, index)=>{
                return <Link href={item.path} key={index} className='text-[14px] font-normal hover:text-[#FBD029] transition-all '>
                {item.title}
                </Link>
              })
            }
              </div>
             </div>
             
            
    </div>
    </div>
    
        </div>
    </>
  )
}

export default Index
import Image from "next/image"
import  Sumka   from "@/public/proucts/krasovka.svg"
import Heart from '@/public/mainimg/icon_like.svg'
import Karzina from '@/public/mainimg/icon_shopping.svg'
import Link from "next/link"

function Index({text, bg}){
  return <>
  <div className="flex">
<div className="group w-[270px] h-[400px] rounded-md relative overflow-hidden ">
<div className="bg-white">
    {
        bg && <div style={{background:bg}}  className="absolute top-1 left-[-50px]  py-2.5  items-center justify-center w-[200px] z-20 r] rotate-[-41deg] ">
        <p className="text-[20px] font-bold text-white text-center ml-[-20px]">{text}</p>
    </div>
    }
    <button className=" absolute top-3 right-3 cursor-pointer ">
    <Image src={Heart} alt="..." className="text-[18px] font-bold cursor-pointer" />

    </button>
    <div className="mx-auto flex items-center justify-center overflow-hidden ">
        <Link href="/singlepage">
        <Image src={Sumka} width={202} height={174} alt="Sumka"  className="group-hover:scale-95 duration-300"/>
        </Link>
    </div>
    <div className="flex flex-col items-start px-5 "> 
        <h2 className="text-[20px] text-start mt-5 mb-4">Бутса Nike Mercurial Superfly 8 FG</h2>
        <p className="text-[20px] font-bold text-start mb-6 ">500 000 uzs</p>

    </div>
    <button className="flex w-full items-center justify-center gap-3 py-[15px] bg-[#FBD029] rounded-br-md rounded-bl-md">
    <Image src={Karzina} alt="..."/>
       Корзина
    </button>
  </div> 
</div>
  </div>
  </>
}

export default Index
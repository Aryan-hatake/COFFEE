import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
 <>
 <div className="parent h-auto ">

 <div className="text-white h-[40vh] gap-14 flex justify-center items-center flex-col mt-[100px] mb-[100px]">
  <div className="flex justify-center items-center md:gap-8 flex-col md:flex-row">

  <h1 className="text-5xl md:text-7xl bg-gradient-to-bl leading-relaxed  from-gray-100 to-gray-600 font-semibold bg-clip-text text-transparent">
    Buy me a coffee.
  </h1>
      <img src="angry.gif" alt="" className="h-30 z-1000 pb-2" />
  </div>
  
  <p className="text-gray-600 px-5">
    A crowdfunding platform for creators like aryan. Get funded by your fans and followers. Start now!
  </p>
  <div className="buttons flex gap-2">
<Link href={"/login"} >    
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-gray-700 group-hover:from-purple-600 group-hover:to-red-500 hover:text-red-700 dark:text-white focus:ring-2 focus:outline-none focus:ring-gray-700 dark:focus:ring-blue-800 cursor-pointer">

<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 text-gray-300 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Coffee 🍵
</span>
</button>
</Link>
<Link href={"#about"}>
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-gray-700 group-hover:from-purple-600 group-hover:to-red-500 hover:text-red-700 dark:text-white focus:ring-2 focus:outline-none focus:ring-gray-700 dark:focus:ring-blue-800">
      
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 text-gray-300 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Look more
</span>
</button>
</Link>
  </div>
 </div>
  <div className="bg-gray-700 h-1 w-full">
  </div>
  <div className="flex  justify-center items-center h-[7vh]">
    <h1 className="leading-relaxed text-2xl md:text-4xl font-extrabold pt-20 bg-gradient-to-bl from-gray-100 to-gray-600 bg-clip-text text-transparent z-100">
      Why Aryan needs a coffee 🍵?
    </h1>

  </div>
<div className="flex justify-center items-center flex-col gap-23">
  <div className="w-[80vw] mt-12 flex flex-col md:flex-row justify-evenly items-center ">
     
     <div className="flex justify-center flex-col">
       <img src="comp.gif" alt="comp" className="h-50" />
       <p className="text-gray-400 font-extrabold text-xl">
        Every Coder needs a coffee
       </p>
     </div>
     
     <div className="flex justify-center flex-col items-center">
       <img src="coin.gif" alt="money" className="h-50" />
       <p className="text-gray-400 font-extrabold text-xl">
        Coffee cost my hard earned money :3
       </p>
     </div>
     
     <div className="flex justify-center flex-col items-center pb-10">
       <img src="team3.gif" alt="heh" className="h-60" />
  <p className="text-gray-400 font-extrabold text-xl ">
   Thank you  for sponsoring me a coffee &gt;&qout;&lt;
    </p>
     </div>
      

  </div>
      <div className="video pb-23  text-gray-500 md:text-5xl text-2xl flex flex-col gap-8 justify-center items-center font-light" id="about">
        <h1 className="pl-5" >Coffee gives adrenaline rush like him</h1>
        <iframe  className="w-[360px] h-[315px] md:w-[560px] md:h-[315px]" src="https://www.youtube.com/embed/S0Ty4T5vXz4?si=4OIOqz6tMvTMunbS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

  </div>
 </div>

 </>
  );
}

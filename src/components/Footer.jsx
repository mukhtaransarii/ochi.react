import React from 'react'

export default function Footer() {
  return (
    <div className="px-8 py-16">
      <div class="flex flex-col w-full">
       {["BBS", "AND OWNER","ANIMATEDWEB"]
       .map((item, index) => {
         return  <h1 className="font-semibold GroteskFont text-[14vw] leading-[11vw] md:text-[9vw] md:leading-[7vw]">{item}</h1>
       })}
       </div>
       <div class="logo font-semibold  text-[10vw] md:text-[6vw]  mt-8">LOGO</div>
       <div class="text-zinc-400 md:text-[3vw]">Mukhtar Alam © 2024</div>
       <div class="text-zinc-400 md:text-[3vw] underline leading-none">mukhtaralam.458546@gmail.com</div>
    </div>
  )
}
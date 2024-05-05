import React from 'react'

export default function About() {
  return (
    <div className="bg-[#CDEA68] rounded-t-[2vw] mt-[-2vw]">
      <h1 className="text-[8vw] leading-[7vw] md:text-[5vw] md:leading-[5vw] p-8">
       Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full border-t-[0.5px] border-[#88984d]"></div>
      <div class="about2 p-8 grid md:grid-cols-3 gap-5">
        <p class="">What you can expect:</p>
        <p class="">We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>  
        <p class="">We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p> 
      </div>
      <div className="w-full border-t-[0.5px] border-[#88984d]"></div>
      <div class="p-8 flex flex-col gap-10 md:flex-row justify-between">
         <div>
           <h1 className="text-[8vw] md:text-[5vw]">Our Approach :</h1>
           <button className="bg-black py-2 px-3 md:py-4 md:px-6 text-white rounded-[100px]">READ MORE</button>
         </div>
         <div class="card bg-center bg-no-repeat bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1100.jpg)] w-full h-[30vh] md:w-[40vw] md:h-[30vw] bg-zinc-500 rounded-xl my-[4vw]  md:my-[2vw]"></div>
       </div>

      
    </div>
  )
}
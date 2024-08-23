import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-zinc-900 '>
       <div className=' max-w-screen-xl mx-auto  py-10 flex gap-32'>
           <div className='basis-1/2 '>
             <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight '>refokus.</h1>
           </div> 
           <div className='basis-1/2 flex gap-4 mt-10 '>
             <div className='basis-1/3 '>
                 <h4 className='mb-10 text-[20px] text-zinc-500 capitalize'>Socials</h4>
                 {["Instagram","Twitter (x?)" , "LinkedIn"].map((item,index) => <a key={index} href='#' className='block text-zinc-500 mt-2 text-sm capitalize '>{item}</a>)}
             </div>
             
             <div className='basis-1/2 flex flex-col items-end'>
                 <p className='text-right text-md '><i>Refokus is pioneering digital agency driven by design and empowered by technology</i></p>
                 <img className='w-38 mt-8  items-end' src='https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg'></img>
              </div>

           </div>
       </div>
      <div className='w-full px-24'> 
       <div className='  flex  justify-start gap-6 capitalize text-sm p-6 text-left '>
           {["Privacy Policy","Cookies","Impressum","Term","Webflow Agency" ].map((items,index)=><a key={index} href= "#"className=' text-zinc-500'>{items}</a>)}
       </div>
       </div>
    </div>
  )
}

export default Footer

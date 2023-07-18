import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let testimonial = props.testimonial;
  return (
    <div className='flex flex-col md:relative border-2 rounded-lg shadow-lg' style={{backgroundColor:"rgb(203 223 203)"}}>

      <div className=' top-[-7rem] z-[10] mx-auto mt-4'>
        <img 
        className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        src={testimonial.image}/>
      </div>

      <div>

      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{testimonial.name}</p>
      </div>


      <div className='text-emerald-900 mx-auto mt-5 flex justify-center items-center'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
      {testimonial.description}
      </div>

      <div  className='text-emerald-900 mx-auto mt-5 flex justify-center items-center mb-2'>
        <FaQuoteRight/>
      </div>

      </div>
      
     
    </div>
  )
}

export default Card

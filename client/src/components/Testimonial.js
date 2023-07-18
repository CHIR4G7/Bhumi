import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonials = (props) => {
    let testimonials = props.testimonials;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(testimonials.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=testimonials.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

  return (
    <div className='w-[100vw]bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md' style={{backgroundColor:"rgb(228 235 228)"}}>

        <Card testimonial = {testimonials[index]}></Card>
     

      <div className='flex text-3xl mt-10 gap-3 text-emerald-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-emerald-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-emerald-500 '>
            <FiChevronRight/>
        </button>
      </div>

      <div className='mt-6'>
        <button
         className='bg-emerald-900 hover:bg-emerald-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                Read More
        </button>
      </div>
    </div>
  )
}

export default Testimonials

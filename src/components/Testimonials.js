import React from 'react'
import Card from './Card';
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import { useState } from 'react';

const Testimonials = (props) => {
    let reviews =props.reviews;
    const[index,setIndex]=useState(0);
    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex (reviews.length -1)
        }
        else{
            setIndex(index-1)
        }
    }
    function rightShiftHandler(){
        if (index +1 >=reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
    }
    function supriseHandler (){
      let randomIndex=Math.floor( Math.random () * reviews.length);
    }


  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center item-center mt-10 p-10 transition-all duration-700 hover::shadow-md'>
        <Card review ={reviews[index]} ></Card>
        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500 '>
                <FiChevronLeft/>
            </button>
            <button onClick ={rightShiftHandler}className='cursor-pointer hover:text-violet-500'>
            <FiChevronRight/> 
            </button>
            
        </div>

        <div>
            <button onClick={supriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-all duration-200 curser-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>

                suprise me
            </button>
            </div>
    </div>
  )
}

export default Testimonials
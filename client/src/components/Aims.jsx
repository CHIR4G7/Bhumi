import React from 'react'
import aims_data from '../data/Aims-data'

const Aims = () => {
  return (
    <div className=' cssaims max-w-[1440px] mx-auto sm:hidden lg:block' id='aims'>
      <div className='flex justify-between gap-20 '>
          <div className=' flex flex-col gap-[14px] max-w-[366px]'>
            <p className=' font-NoeStandard text-[36px] leading-[49px] text-[#171717] mb-0'>Our Aims & Values, We Are Proud Of</p>
            <p className=' font-PlusJakartaSans text-[15px] leading-[26px]'>Dedicated to fostering positive change, Vrixam stands for equality, empowerment, and compassion, as we tirelessly work towards building a brighter future for all.</p>
          </div>

          <div className='flex flex-wrap sidesection gap-7'>
            {
              aims_data.map((item, index) => {
                return (
                  <div className='flex flex-col gap-[6px] max-w-[231px] mb-2'>
                    <img src={item.url} alt='' className=' h-[42px] w-[42px]'/>
                    <h2 className=' font-NoeStandard text-[22px] mb-0 leading-9'>{item.title}</h2>
                    <p className=' font-PlusJakartaSans text-[15px] mb-0 leading-[23px]'>{item.subtitle}</p>
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Aims
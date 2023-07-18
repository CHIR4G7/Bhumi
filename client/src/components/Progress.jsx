import React from 'react'

const Progress = () => {
  return (
    <div className=' max-w-[1440px] justify-between mx-auto cssprogress flex sm:flex-col md:flex-col lg:flex-row gap-[100px]' id='progress'>
        <div className=' flex flex-col sm:items-center md:items-center lg:ml-[6.75rem] lg:items-start md:max-w-[672px] md:mx-auto '>
            <p className=' font-NoeStandard sm:text-center md:text-left text-[36px] md:max-w-[400px] leading-[49px]'>Stepping up progress in <span className='sm:hidden md:inline-block md:ml-[15px] lg:hidden'><br /></span> this defining decade</p>
            <p className=' font-PlusJakartaSans sm:text-center md:text-left text-[15px] mb-0 md:ml-[60px] lg:ml-0 leading-[26px] text-[#2D2D2D] tracking-normal'>Our restoration projects aim to revitalize degraded lands, promote afforestation, <span className=' md:inline-block md:ml-[40px] lg:hidden'><br /></span> reforestation, and rehabilitate ecosystems affected by human activities.</p>
        </div>
        <div className=' flex sm:flex-col md:flex-row gap-9 max-w-[691px] md:mx-auto md:justify-center lg:mr-[6.75rem]'>
            <div className=' flex flex-col  gap-8'>
                <div className=' flex flex-col sm:items-center md:items-start gap-1'>
                    <p className=' font-AnekMalayalam uppercase font-bold text-[20px] leading-7 text-[#006C2C] mb-0'>Who We Are</p>
                    <p className=' mb-0 text-[15px] leading-6 sm:text-center md:text-left text-[#2D2D2D]'>A dedicated environmental non-profit organization working tirelessly to protect & preserve our planet, committed to making a positive impact on the environment</p>
                </div>
                <div className=' flex flex-col gap-1 sm:items-center md:items-start'>
                    <p className=' font-AnekMalayalam font-bold uppercase text-[20px] leading-7 text-[#006C2C] mb-0'>How To Help</p>
                    <p className=' mb-0 text-[15px] leading-6 sm:text-center md:text-left text-[#2D2D2D]'>There are many ways to contribute to us: Volunteer with us, help spread awareness or donate to our projects. <a href="#donate"> <span className=' text-[#006C2C] underline hover:cursor-pointer'>See how</span></a> </p>
                </div>
            </div>
            <div className=' flex flex-col gap-8'>
                <div className=' flex flex-col gap-1 sm:items-center md:items-start'>
                    <p className=' font-AnekMalayalam font-bold uppercase text-[20px] leading-7 text-[#006C2C] mb-0'>What We Do</p>
                    <p className=' mb-0 text-[15px] leading-6 sm:text-center md:text-left text-[#2D2D2D]'>Create a sustainable future,  protect and restore the environment through community engagement, campaigns, projects, events striving for a greener & brighter future for all.</p>
                </div>
                <div className=' flex flex-col gap-1 sm:items-center md:items-start'>
                    <p className=' font-AnekMalayalam font-bold uppercase text-[20px] leading-7 text-[#006C2C] mb-0'>Where We Work</p>
                    <p className=' mb-0 text-[15px] leading-6 sm:text-center md:text-left text-[#2D2D2D]'>We are based in Udaipur, Rajasthan. Yet we can provide our services and social work in the state, outside and even on global scale.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Progress
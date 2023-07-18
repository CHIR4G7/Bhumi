import React from 'react'

const Utilize = () => {
  return (
    <div className=' w-full  cssutilize'>
        <div className=' flex sm:flex-col lg:flex-row mx-auto py-[70px] gap-9 max-w-[1440px]'>
            <div className=' max-w-[561px] flex flex-col md:items-center lg:items-stretch gap-[14px] md:mx-auto  lg:mr-0 lg:ml-[180px] mt-[21px]'>
                <p className=' font-NoeStandard mb-0 sm:text-center lg:text-left sm:text-[28px] md:text-[36px] sm:leading-9  md:leading-[49px] text-[#04461F]'>How we utilize your <br /> donations and <span className=' sm:inline md:hidden'><br /></span> where it goes</p>
                <p className=' font-PlusJakartaSans sm:text-center sm:text-[13px] lg:text-left md:text-[16px] leading-[27px] text-[#2D2D2D] mb-0'>We understand that when you make a donation, you <br /> want to know exactly where your money is going and we <br /> pledge to be transparent.</p>

                <div className='lg:hidden md:mt-[72px] sm:scale-y-75 sm:scale-x-90 md:scale-100 sm:ml-3 md:ml-0'>
                    <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687248186/utilize_qgswhh.png" className=' w-[512px] h-[313px]' alt="" />
                </div>

                <div className=' flex flex-wrap sm:ml-7 sm:pl-6  md:pl-0 md:ml-[50px] lg:ml-0 sm:max-w-[412px] md:max-w-[672px] md:pt-4 gap-6 mt-3'>
                    <div className=' flex justify-center gap-[6px]'>
                        <div className=' sm:h-[10px] sm:w-[10px] mt-1 md:h-[14px] md:w-[14px] bg-[#006C2C]'></div>
                        <p className=' mb-0 sm:text-[13px] md:text-[16px]'>Plantation Projects</p>
                    </div>
                    <div className=' flex ml-5 justify-center gap-[6px]'>
                        <div className='h-[14px] mt-1 w-[14px] sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] bg-[#F2994A]'></div>
                        <p className=' mb-0 sm:text-[13px] md:text-[16px]'>Education Programmes</p>
                    </div>
                    <div className=' flex justify-center gap-[6px]'>
                        <div className='h-[14px] mt-1 w-[14px] sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] bg-[#54C1F0]'></div>
                        <p className=' mb-0 sm:text-[13px] md:text-[16px]'>Literacy Programmes</p>
                    </div>
                    <div className=' flex justify-center gap-[6px]'>
                        <div className='h-[14px] mt-1 w-[14px] sm:h-[10px] sm:w-[10px] md:h-[14px] md:w-[14px] bg-[#F2C94C]'></div>
                        <p className=' mb-0 sm:text-[13px] md:text-[16px]'>Social Welfare Programmes</p>
                    </div>
                </div>
            </div>

            <div className=' ml-5  sm:hidden lg:flex'>
                <img src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687248186/utilize_qgswhh.png" className=' w-[512px] h-[313px]' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Utilize
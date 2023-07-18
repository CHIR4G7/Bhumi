import React from "react";
import { BiDonateHeart, BiLinkExternal } from "react-icons/bi";
import {BsBank} from 'react-icons/bs'

const Donation = () => {
  return (
    <div className=" cssdonation w-full flex flex-col items-center pb-4" id="donate">
      <div className=" flex max-w-[1440px] mx-auto sm:hidden lg:flex border-b-[1px] border-gray-100">
        <div className="flex flex-col ml-[6.75rem] mt-[3.875rem] ">
          <div className=" flex items-center">
            <img
              src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1689445641/logo_white_tnvauu.png"
              alt=""
              className=" h-[87px] w-[127px] mr-[19.44px]"
            />
            <div className="">
              <p className=" text-[35px] text-white leading-[32px] font-NoeStandard mb-0">
                
              </p>
              <p className=" text-[35px] leading-[32px] text-white font-NoeStandard mb-0">
                
              </p>
              <p className=" text-[19px] leading-[26px] uppercase mb-0 text-white">
                
              </p>
            </div>
          </div>

          <div className=" mt-[46px] mb-0 text-white text-[42px] font-NoeStandard max-w-[483px] leading-[57px]">
            <p>
              We're a nonprofit with the vision of building a better future.
            </p>
          </div>
        </div>

        <div className=" ml-[6.375rem] mb-[5.375rem] mt-[4.688rem]">
          <img
            src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687266701/upiqr_kuxznp.png"
            alt=""
          />
        </div>

        <div className="flex flex-col ml-[4rem] mt-[6.375rem] max-w-[325px]">
          <div className="flex flex-col gap-[1.467rem]">
            <div>
              <p className=" mb-0 font-AnekMalayalam  text-[20px] text-white leading-[28px] opacity-80">
                MERCHANT NAME
              </p>
              <p className=" mb-0 font-PlusJakartaSans text-white text-[24px] leading-[33px]">
                BHUMI NGO
              </p>
            </div>

            <div className=" flex flex-col">
              <p className=" mb-0 font-AnekMalayalam text-[20px] text-white leading-[28px] uppercase opacity-80">
                upi id
              </p>
              <p className=" mb-0 font-PlusJakartaSans text-white text-[24px] leading-[33px]">
                BHUMIATCARE@SBI
              </p>
            </div>
          </div>

          <div className=" mt-[3.667rem] flex flex-col gap-[1rem]">
            <p className=" text-white font-AnekMalayalam text-[18px] leading-[25px] opacity-80 mb-0">
              We support secure transactions through
            </p>
            <div className="flex items-center gap-[1rem]">
              <img
                src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/UPI-Logo-vector_1_upr5je.png"
                className=" w-[69px] h-[24px]"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/Paytm_Logo__standalone_1_fttc5r.png"
                alt=" "
                className="w=[79px] h-[24px]"
              />
              <img
                src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/google-pay-icon_1_bujlpn.png"
                alt=""
                className=" w-[33px] h-[28px]"
              />
              <img
                src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/phonepe-1_1_yduhcu.png"
                alt=""
                className=" w-[35px] h-[35px]"
              />
            </div>
          </div>
        </div>

        
      </div>

      <button className='flex lg:h-[38px] sm:h-[34px] mt-3 px-1 sm:w-[100px] md:w-[220px] justify-center items-center mb-0 gap-2 rounded-full bg-white'>
        <p className=' mb-0 sm:mt-[2px] md:mt-[2px] uppercase special-click'>
          Pay Through Bank
        </p>
        <BsBank className='special-click' />
      </button>

      <div className="max-w-[768px] mx-auto sm:hidden md:flex lg:hidden">
        <div className="w-192 h-[679.40px] px-12 py-16 flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch p-[0px] justify-start items-start gap-6 inline-flex">
            <div className="self-stretch p-[0px] flex-col justify-between items-start gap-12 inline-flex">
              <div className="p-[0px] flex-col justify-start items-start gap-12 flex">
                <div className="relative">
                  <div className=" flex items-center">
                    <img
                      src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687167490/logo_m3yaf9.png"
                      alt=""
                      className=" h-[87px] w-[87px] mr-[19.44px]"
                    />
                    <div className="">
                      <p className=" text-[35px] text-white leading-[32px] font-NoeStandard mb-0">
                        Vrixam
                      </p>
                      <p className=" text-[35px] leading-[32px] text-white font-NoeStandard mb-0">
                        Amritam
                      </p>
                      <p className=" text-[19px] leading-[26px] uppercase mb-0 text-white">
                        Seva Sansthan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[362px] font-NoeStandard  text-white text-[36px] font-bold leading-10">
                  We're a nonprofit with the vision of building a better future.
                </div>
              </div>
              <div className=" mt-[3.667rem] flex flex-col gap-[1rem]">
                <p className=" text-white font-AnekMalayalam text-[18px] leading-[25px] opacity-80 mb-0">
                  We support secure transactions through
                </p>
                <div className="flex items-center gap-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/UPI-Logo-vector_1_upr5je.png"
                    className=" w-[69px] h-[24px]"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/Paytm_Logo__standalone_1_fttc5r.png"
                    alt=" "
                    className="w=[79px] h-[24px]"
                  />
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/google-pay-icon_1_bujlpn.png"
                    alt=""
                    className=" w-[33px] h-[28px]"
                  />
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/phonepe-1_1_yduhcu.png"
                    alt=""
                    className=" w-[35px] h-[35px]"
                  />
                </div>
              </div>
            </div>
            <div className="p-[0px] flex-col justify-start items-start gap-14 inline-flex">
              <div className="w-[247.22px] h-[329.22px]">
                <img
                  src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687266701/upiqr_kuxznp.png"
                  alt=""
                />
              </div>
              <div className="p-[0px] flex-col justify-start items-start gap-[12.33px] flex">
                <div className="p-[0px] flex-col justify-start items-start gap-[1.92px] flex">
                  <div className="opacity-80 text-center text-white text-[18px] font-medium uppercase">
                    Merchant Name
                  </div>
                  <div className="w-[325px] text-white text-[24px] font-bold">
                    VRIXAM AMRITAM SEVA SANSTHAN
                  </div>
                </div>
                <div className="p-[0px] flex-col justify-start items-start gap-[1.92px] flex">
                  <div className="opacity-80 text-center text-white text-[18px] font-medium uppercase">
                    upi id
                  </div>
                  <div className="w-[325px] text-white text-[24px] font-bold">
                    SANSTHANVRIXAM@SBI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:flex md:hidden max-w-[368px] mx-auto">
        <div className="w-[360px] h-[1066.60px] px-6 py-16 mb-4 flex-col justify-start items-start gap-14 inline-flex">
          <div className="self-stretch h-[938.60px] p-[0px] flex-col justify-start items-start gap-12 flex">
            <div className="self-stretch h-[212.75px] p-[0px] flex-col justify-start items-center gap-12 flex">
              <div className="relative">
                    <div className=" flex items-center">
                        <img
                        src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687167490/logo_m3yaf9.png"
                        alt=""
                        className=" h-[87px] w-[87px] mr-[19.44px]"
                        />
                        <div className="">
                        <p className=" text-[35px] text-white leading-[32px] font-NoeStandard mb-0">
                            Vrixam
                        </p>
                        <p className=" text-[35px] leading-[32px] text-white font-NoeStandard mb-0">
                            Amritam
                        </p>
                        <p className=" text-[19px] leading-[26px] uppercase mb-0 text-white">
                            Seva Sansthan
                        </p>
                        </div>
                    </div>
              </div>
              <div className="self-stretch text-center text-white text-[28px] font-bold font-NoeStandard leading-9">
                We're a nonprofit with the vision of building a better future.
              </div>
            </div>
            <div className="self-stretch h-[564.66px] p-[0px] flex-col justify-start items-start gap-12 flex">
              <div className=" pb-10 bg-white rounded-2xl ml-8 flex-col justify-start items-center gap-10 flex">
                <div className="w-[247.22px] h-[329.22px]">
                    <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687266701/upiqr_kuxznp.png"
                    alt=""
                    />
                </div>
              </div>
              <div className="self-stretch h-28 p-[0px] flex-col mr-4 justify-start items-start gap-[39.33px] flex">
                <div className="self-stretch h-[44.92px] p-[0px] flex-col justify-start items-start gap-[9.92px] flex">
                  <div className="self-stretch opacity-80 text-center text-white text-[15px] font-medium uppercase">
                    Merchant Name
                  </div>
                  <div className="self-stretch text-center text-white text-[18px] font-bold">
                    VRIXAM AMRITAM SEVA SANSTHAN
                  </div>
                </div>
                <div className="self-stretch mt-3 h-[44.92px] p-[0px] flex-col justify-start items-start gap-[9.92px] flex">
                  <div className="self-stretch opacity-80 text-center text-white text-[15px] font-medium uppercase">
                    upi id
                  </div>
                  <div className="self-stretch text-center text-white text-[18px] font-bold">
                    SANSTHANVRIXAM@SBI
                  </div>
                </div>
              </div>
            </div>
            
            <div className=" mt-[3.667rem] flex flex-col gap-[1rem]">
                <p className=" text-white font-AnekMalayalam text-center text-[18px] leading-[25px] opacity-80 mb-0">
                  We support secure transactions through
                </p>
                <div className="flex ml-3 items-center gap-[1rem]">
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/UPI-Logo-vector_1_upr5je.png"
                    className=" w-[69px] h-[24px]"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/Paytm_Logo__standalone_1_fttc5r.png"
                    alt=" "
                    className="w=[79px] h-[24px]"
                  />
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/google-pay-icon_1_bujlpn.png"
                    alt=""
                    className=" w-[33px] h-[28px]"
                  />
                  <img
                    src="https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687268676/phonepe-1_1_yduhcu.png"
                    alt=""
                    className=" w-[35px] h-[35px]"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;

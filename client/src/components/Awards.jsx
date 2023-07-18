import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1000 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const responsives = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1000 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1000, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const Awards = () => {
  return (
    <div className='all-awards'>
      <div className='awards-header'>
        <div className='main-heading'>
          <h3 className=' font-NoeStandard'>
            Nationally awarded and recognized for commendable work towards
            society
          </h3>
          <div className='sub-aw-heading'>
            <p>
              National Prestige Award proudly presented to Vrixam Amritam Seva
              Sansthan on 16th June, 2023 by Worthy Wellness Foundation to show
              respect and appreciation for the excellent and commendable work
              done towards society.
            </p>
          </div>
        </div>
      </div>
      <div className='awards-slider'>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          className='hide-car'
          containerClass='container-with-dots'
          customTransition='all 1s linear'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover={false}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
          <div className=' aw-card'>
            <div className='aw-card-img first'>
              <img src='../assets/awards-1.png' alt='' />
            </div>
            {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457500/image_25_zl5rsn.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457499/image_12_mdgab7.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457498/image_23_gjrnca.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457498/image_15_afokl6.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457498/image_24_bhmisi.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457497/image_20_eozcoe.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457497/image_16_evgxle.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_19_d0zxws.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_22_qc3vmw.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_13_leryat.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_17_o4kwi4.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457495/image_18_oa69lv.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457495/image_14_uvzprd.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>
        </Carousel>
      </div>
      <div className='show-carousel'>
        <Carousel
          className='show-car'
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={1}
          centerMode={false}
          containerClass='container-with-dots'
          customTransition='all 1s linear'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover={false}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={true}
          rewindWithAnimation={true}
          rtl={false}
          shouldResetAutoplay
          responsive={responsives}
          showDots={false}
          slidesToSlide={2}
          swipeable
          transitionDuration={1000}
        >
          <div className=' aw-card'>
            <div className='aw-card-img first'>
              <img src='../assets/awards-1.png' alt='' />
            </div>
            {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457500/image_25_zl5rsn.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
          <p>
            
          </p>
        </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457499/image_12_mdgab7.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457498/image_23_gjrnca.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457498/image_15_afokl6.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457498/image_24_bhmisi.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457497/image_20_eozcoe.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457497/image_16_evgxle.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_19_d0zxws.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_22_qc3vmw.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_13_leryat.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457496/image_17_o4kwi4.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457495/image_18_oa69lv.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>

          <div className='aw-cards'>
            <div className='aw-card-img second'>
              <img
                src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1687457495/image_14_uvzprd.png'
                alt=''
              />
            </div>
            {/* <div className='card-container'>
             <p>
            
            </p>
            </div> */}
          </div>
        </Carousel>
      </div>
      <div className='right-white'></div>
    </div>
  );
};

export default Awards;

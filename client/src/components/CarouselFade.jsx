import { Carousel } from "react-bootstrap";
import carasol_data from "../data/Carasol-data";
import { BiDonateHeart } from "react-icons/bi";
function CarouselFade() {
  return (
    <div className='hero-full' id='what-we-do'>
      <Carousel fade interval={13000}>
        {carasol_data.map((item, index) => {
          return (
            <Carousel.Item>
              <img
                className='d-block w-100 carousel-img'
                src={item.url}
                alt='First slide'
              />
              <Carousel.Caption className='captions-all'>
                <div className='captions-inner'>
                  <h3 className={`font-NoeDisplay` + ""} style={item.long}>
                    {item.title}
                  </h3>
                  <p className=' font-PlusJakartaSans' style={item.short}>
                    {item.subtitle}
                  </p>
                  <button className='support-btn hover:cursor-pointer items-center font-AnekMalayalam rounded-full'>
                    Support Now
                    <span>
                      <BiDonateHeart className=' mb-1'></BiDonateHeart>
                    </span>
                  </button>
                  <button className='donate-btn hover:cursor-pointer items-center font-AnekMalayalam rounded-full'>
                    Donate<BiDonateHeart className=' mb-1'></BiDonateHeart>
                  </button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselFade;

import React, { useEffect } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);


  const handleDropDown1 = () => {
    setDropdown1(!dropdown1);
  }

  const handleDropDown2 = () => {
    setDropdown2(!dropdown2);
  }

  const handleDropDown3 = () => {
    setDropdown3(!dropdown3);
  }

  const handleDropDown4 = () => {
    setDropdown4(!dropdown4);
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var navbar = document.getElementById("navbar");

      if (window.scrollY > 575) {
        navbar.style.backgroundColor = "#1A1A1A";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });

    const scrollLinks = document.querySelectorAll(".navlinks");
    console.log(scrollLinks);
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        let id = "";
        console.log(e.target);
        if (e.target.classList.contains("special-click")) {
          console.log(e.target.parentNode.parentNode);
          id = e.target.parentNode.parentNode.href.slice(-6);
        } else {
          console.log(e.target);

          id = e.target.parentNode.getAttribute("href");
          if (id) {
            id = id.slice(1);
          } else {
            id = e.target.getAttribute("href").slice(1);
          }
        }
        console.log(id);
        const element = document.getElementById(id);
        console.log(element);
        //
        let position = element.offsetTop - 62;
        window.scrollTo({
          left: 0,
          // top: element.offsetTop,
          top: position,
          behavior: "smooth",
        });
      });
    });
  }, []);

  function clickhandler() {
    const c = !toggle;
    setToggle(c);
  }

  //   if(toggle) {
  //     let navbar = document.getElementById("navbar");
  //     navbar.style.backgroundColor = "#1A1A1A";
  //   }

  useEffect(() => {
    if (toggle) {
      let navbar = document.getElementById("navbar");
      navbar.style.backgroundColor = "#1A1A1A";
    } else {
      let navbar = document.getElementById("navbar");
      navbar.style.backgroundColor = "transparent";
    }
  }, [toggle]);

  

  return (
    <>
    <div className='relative'>
      <nav className=' scroll-smooth ' id='navbar'>
        <div className=' lg:max-w-[1440px] mx-auto'>
          <div className='sm:ml-[1.5rem] sm:mr-[1.5rem]  md:ml-[2.188rem] md:mr-[2.188rem] lg:ml-[6.75rem] lg:mr-[6.75rem] flex justify-between h-20 items-center font-AnekMalayalam  text-white'>
            <div className=' flex -gap-[6px] text-[13px] leading-[18px] items-center'>
              <div className=' flex items-center gap-2 mr-3'>
                <img
                  src='https://res.cloudinary.com/dsnnvjuqz/image/upload/v1689445641/logo_white_tnvauu.png'
                  alt=''
                  className=' sm:h-[37px] md:h-[43px] '
                />
                <div className="flex flex-col">
                  <p className=' sm:text-[15px] md:text-[18px] leading-5 font-NoeStandard mb-0'>
                    Bhumi
                  </p>
                  <p className=' sm:text-[15px] md:text-[18px] leading-5 font-NoeStandard mb-0'>
                    
                  </p>
                  <p className=' sm:text-[8px] md:text-[10px] mb-0 uppercase'></p>
                </div>
              </div>
{/* 
              <a
                href='#progress'
                className='navlinks sm:hidden md:hidden lg:block' onClick={clickhandler}
              >
                <p className=" mb-0">WHAT WE DO</p>
              </a>

              <a href='#aims' className='navlinks sm:hidden md:hidden lg:block' onClick={clickhandler}>
                <p className=' mb-0'>ABOUT US</p>
              </a>
              <a href='#highlights' className='navlinks sm:hidden md:hidden lg:block' onClick={clickhandler}>
                <p className=' mb-0'>EVENTS</p>
              </a>
              <a href='#gallery' className='navlinks sm:hidden md:hidden lg:block' onClick={clickhandler}>
                <p className=' mb-0'>GALLERY</p>
              </a>
              <a href='#team' className='navlinks sm:hidden md:hidden lg:block' onClick={clickhandler}>
                <p className=' mb-0'>OUR TEAM</p>
              </a> */}
            

            <div className="relative inline-block text-left mx-2">
              <div>
                <button type="button" className="flex lg:h-[50px] sm:h-[34px] sm:w-[100px] md:w-[127px] justify-center items-center mb-0 gap-2 rounded-full" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleDropDown1}>
                <p className=' mb-0 sm:mt-[2px] text-[18px] md:mt-[2px] uppercase special-click'>
                    Where we are ?
                  </p>
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {
                dropdown1 && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">

                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-0" >About Us</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-1">Vision and Mission</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2" >70 years in India</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Where we work </button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Our Team</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Global Presence</button>


                  </div>
                </div>

              }


            </div>

            <div className="relative inline-block text-left mx-2">
              <div>
                <button type="button" className="flex lg:h-[50px] sm:h-[34px] sm:w-[100px] md:w-[127px] justify-center items-center mb-0 gap-2 rounded-full" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleDropDown2}>
                <p className=' mb-0 sm:mt-[2px] text-[18px] md:mt-[2px] uppercase special-click'>
                    Our Work
                  </p>
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {
                dropdown2 && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">

                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-0" >Our Approach</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-1">Health</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2" >Education</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Livelihood</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Disaster Relief</button>


                  </div>
                </div>

              }


            </div>

            <div className="relative inline-block text-left mx-2">
              <div>
                <button type="button" className="flex lg:h-[50px] sm:h-[34px] sm:w-[100px] md:w-[127px] justify-center items-center mb-0 gap-2 rounded-full" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleDropDown3}>
                <p className=' mb-0 text-[18px] sm:mt-[2px] md:mt-[2px] uppercase special-click'>
                    Achievements
                  </p>
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {
                dropdown3 && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">

                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-0" >Impact</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-1">Innovation</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2" >Touching Lives</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Our partners</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Testimonials</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Awards and Recognition</button>


                  </div>
                </div>

              }


            </div>

            <div className="relative inline-block text-left mx-2">
              <div>
                <button type="button" className="flex lg:h-[50px] sm:h-[34px] sm:w-[100px] md:w-[127px] justify-center items-center mb-0 gap-2 rounded-full" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={handleDropDown4}>
                <p className=' text-[18px] mb-0 sm:mt-[2px] md:mt-[2px] uppercase special-click'>
                    Make a Difference
                  </p>
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {
                dropdown4 && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                  <div className="py-1" role="none">

                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-0" >Individuals</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-1">Corporates</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2" >Institutional Partners</button>
                    <button className="text-gray-700 block px-4 py-2 text-sm w-full text-left hover:bg-gray-300" role="menuitem" tabIndex="-1" id="menu-item-2">Campaigns</button>


                  </div>
                </div>

              }


            </div>
            </div>

        




  {/* <div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Who We Are ?
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

 
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">

      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">About Us</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1"> Vision and Mission</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">70 years in India</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Where We Work</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Our Team</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Global Presence</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>


<div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

 
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">

      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>

<div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

 
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">

      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div>

<div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Options
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

 
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div className="py-1" role="none">

      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
      <form method="POST" action="#" role="none">
        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
      </form>
    </div>
  </div>
</div> */}



          <div className='sm:flex gap-2 md:flex md:gap-6'>

            <a href='#donate' className='navlinks'>
                <button className='flex lg:h-[38px] sm:h-[34px] sm:w-[100px] md:w-[127px] justify-center items-center mb-0 gap-2 rounded-full bgtransitiongreen'>
                  <p className=' mb-0 sm:mt-[2px] md:mt-[2px] uppercase special-click'>
                    Volunteer
                  </p>
                  <BiDonateHeart className='special-click' />
                </button>
              </a>

              <a href='#donate' className='navlinks'>
                <button className='flex lg:h-[38px] sm:h-[34px] sm:w-[100px] md:w-[127px] justify-center items-center mb-0 gap-2 rounded-full bgtransitiongreen'>
                  <p className=' mb-0 sm:mt-[2px] md:mt-[2px] uppercase special-click'>
                    Donate
                  </p>
                  <BiDonateHeart className='special-click' />
                </button>
              </a>

              

              <button onClick={clickhandler} className='lg:hidden text-white'>
                {/* condition to show this only when toggle is false */}
                <div className={`${toggle ? "hidden" : "block"}`}>
                  <RxHamburgerMenu className=' text-[30px]' />
                </div>
                {/* condition to show this only when toggle is true */}
                <div
                  className={`${
                    toggle ? "block" : "hidden"
                  } text-[#ffffff] stroke-white`}
                >
                  <GrClose className=' grclose text-[30px]'></GrClose>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* condition to show this only when toggle is true */}
      <div
        className={`${
          toggle ? "block" : "hidden"
        } lg:hidden fixed z-50 top-[76px] w-full`}
      >
        <div className='bg-[#1A1A1A] flex flex-col items-center text-white'>
          <a
            href='#progress'
            className='navlinks bordertop w-full h-[83px] flex flex-col items-center justify-center'
            onClick={clickhandler}
          >
            <p className=' mb-0'>WHAT WE DO</p>
          </a>

          <a
            href='#aims'
            className='navlinks bordertop w-full h-[83px] flex flex-col items-center justify-center'
            onClick={clickhandler}
          >
            <p className=' mb-0'>ABOUT US</p>
          </a>

          <a
            href='#highlights'
            className='navlinks bordertop w-full h-[83px] flex flex-col items-center justify-center'
            onClick={clickhandler}
          >
            <p className=' mb-0'>EVENTS</p>
          </a>

          <a
            href='#gallery'
            className='navlinks bordertop w-full h-[83px] flex flex-col items-center justify-center'
            onClick={clickhandler}
          >
            <p className=' mb-0'>GALLERY</p>
          </a>

          <a
            href='#team'
            className='navlinks bordertop w-full h-[83px] flex flex-col items-center justify-center'
            onClick={clickhandler}
          >
            <p className=' mb-0'>OUR TEAM</p>
          </a>
        </div>
      </div>
    </div>

     </>


  );
};

export default Navbar;

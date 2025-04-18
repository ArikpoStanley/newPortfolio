import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const footerItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/project' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <div className=' w-full overflow-hidden relative '>
      <div className='absolute left-1/2 -top-[30px] w-full max-w-[1070px] -translate-x-1/2 px-4 '>
        <div className='flex h-[310px] flex-row  items-center justify-between rounded-xl bg-[#E5F1FF]  p-6 pt-25  md:h-[400px] md:pl-[140px] lg:relative ' data-aos="fade-up-right" data-aos-duration="2000">
          <div className='text-left'>
            <h1 className='w-[15.9375rem] font-neueMontreal text-[1.5rem] font-medium leading-[120%] text-[#130A38] lg:w-full lg:text-[3rem]'>
              Lets Get Started
            </h1>
            <p className='mt-2  w-[15.9375rem] font-neueMontreal text-[0.875rem] leading-[160%] text-neutral-800 md:w-[26.875rem] lg:text-[1rem]'>
              Contact our team to learn more about what we can help you build –
              or create an account to get started right away.
            </p>
            <div className='mt-6 flex flex-col gap-6 font-sfPro sm:flex-row'>
              <Link
                href='#contact'
                className='flex w-[12.4375rem] items-center justify-center gap-[0.625rem] rounded-[2.5rem] bg-[#130A38] py-3 text-[14px] font-medium leading-[160%] text-white md:w-[13.4375rem]'
              >
                Book an Appointment{' '}
                <Image
                  src='/svg/simple-icons_startrek.svg'
                  alt=''
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href='#hero'
                className='flex items-center justify-start gap-2 pl-6 font-medium leading-[160%] text-blue-800 md:w-[8.8125rem] md:justify-center md:rounded-[2.5rem] md:border md:border-blue-800 xl:border-none mdscreen:pl-0'
              >
                Explore{' '}
                <Image
                  src='/svg/majesticons_arrow-right-line.svg'
                  alt=''
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className='absolute top-[1.7rem] right-[-80px]  md:right-[15%] ipadAir:right-[15%]' data-aos="fade-down-right" data-aos-duration="2000" >
            <Image src='/svg/rocket.svg' alt='' width={174} height={432} />
          </div>
        </div>
      </div>

      <div className='bg-[#130A38] md:px-20'>
        <footer className='mx-auto -mt-[1px] w-full px-4 text-white '>
          <div className='mx-auto grid w-full grid-cols-1 gap-x-[64px] pt-[370px] md:pt-[360px] xl:pt-[366px] md:grid-cols-[340px_1fr] xl:grid-cols-[420px_1fr] '>
            {/* Left Section */}
          

            {/* Right Section */}

              <div className='flex w-full flex-wrap items-center gap-x-[64px] gap-y-6 pt-2 xl:mt-[65px]'>
                {footerItems.map((item) => (
                  <div key={item.name} className=''>
                    <a
                      href={item.href}
                      className='flex items-center font-sfPro text-sm leading-[160%] text-white transition-colors hover:text-blue-300'
                      onClick={() => item.dropdown && toggleDropdown(item.name)}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}

              <div className='item-center mt-[60px] flex md:flex-row flex-col md:gap-[56px] font-sfPro xl:mt-[25px]'>
                <div className='flex items-center gap-[3px]'>
                  <Image
                    src='/svg/mail-box.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                  <p>arikpostanley123@gmail.com</p>
                </div>
                <div className='flex items-center gap-[3px]'>
                  <Image
                    src='/svg/globe-small.svg'
                    alt=''
                    width={16}
                    height={16}
                  />
                  <p>stanportfolio.vercel.app</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='mt-[12px] border-t border-t-blue-650 py-[2.5rem] font-sfPro text-[0.625rem] leading-[160%] text-white sm:text-sm xl:mt-10'>
            <div className='flex  items-center justify-between gap-4 '>
              <p>
                Copyright <span className='px-1'>&copy;</span> {new Date().getFullYear()}{' '}
                <span className='px-1'>•</span> Stanley Samuel
              </p>
              <div className='flex space-x-4'>
                <div className="social-icons flex flex-row justify-between space-x-2 mx-auto sm:ml-0 mb-5">
                    <a href="https://facebook.com/ExcellenceJnr" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-white p-2">
                      <FaFacebook className="text-white" />
                    </a>
                    <a href="https://github.com/stanley-samuel123" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-white p-2">
                      <FaGithub className="text-white" />
                    </a>
                    <a href="https://linkedin.com/in/stanley-samuel-8baa38277" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-white p-2">
                      <FaLinkedin className="text-white" />
                    </a>
                    <a href="https://instagram.com/stanleysamuel70" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 rounded-full hover:animate-bounce border-white p-2">
                      <FaInstagram className="text-white" />
                    </a>
                    <a href="https://wa.me/message/JFS322SF713HKI" className="hover:bg-gradient-to-t from-indigo-700 via-fuchsia-600 to-transparent border-2 hover:animate-bounce rounded-full border-white p-2">
                      <FaWhatsapp className="text-white" />
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

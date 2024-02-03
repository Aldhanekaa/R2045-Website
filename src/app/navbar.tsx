'use client';
import Image from 'next/image';
import PageContainer from '../components/PageContainer';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { inter } from '@/app/fonts';
import { usePathname } from 'next/navigation';
import MobileNav, { MobileNavChildren } from '@/components/Navbar/MobileNav';
import NavbarItemText from '@/components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa6';

const invalidUrlsRegex = [
  /^\/programs\/ftc\.*/,
  /^\/programs\/fgc\.*/,
  /^\/get-involved\/info-for-volunteers\.*/,
];

function validateUrl(pathName: string): boolean {
  for (const invalidRegex of invalidUrlsRegex) {
    let result = invalidRegex.test(pathName);
    if (result == true) {
      return result;
    }
  }
  return false;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const pathName = usePathname();
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

  useEffect(() => {
    // print('e');

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      console.log(isScrolled);
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      // shadow-xl backdrop-blur-xl
      className={`${validateUrl(pathName) ? '' : 'fixed'}  ${
        isScrolled
          ? 'bg-slate-50/75 text-slate-700 shadow-xl backdrop-blur-xl'
          : 'transparent text-slate-100 shadow-sm backdrop-blur-md'
      }  duration-200  w-full top-0 z-40 ${inter.className} `}
    >
      <MobileNav active={isOpen}>
        <>
          <a href="/">
            {' '}
            <h5 className="text-xl font-normal mb-10">Home</h5>
          </a>
          <a href="/members">
            {' '}
            <h5 className="text-xl font-normal mb-10">Members</h5>
          </a>

          <a href="/outreaches">
            {' '}
            <h5 className="text-xl font-normal mb-10">outreaches</h5>
          </a>
          <div className={` relative h-full font-medium`}>
            <a href="/TechnoNatura School_R2045 Indonesia Robotic Sponsorship Proposal_BAHASA.pdf">
              <div className="relative w-full px-6 py-4 font-semibold  h-full flex items-center cursor-pointer">
                <div
                  className="absolute -left-1 w-full -z-10 bg-yellow-500 h-full"
                  style={{
                    clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
                  }}
                ></div>
                <h6 className=" md:text-sm lg:text-lg text-end text-slate-50">
                  Sponsor us
                </h6>
              </div>
            </a>
          </div>
        </>
      </MobileNav>

      <PageContainer className="pt-3">
        <div
          style={{
            borderBottomWidth: '1px',
          }}
          className={`w-full grid grid-cols-9 py-4 relative ${
            isScrolled ? 'border-slate-900/50' : 'border-slate-200/30'
          }`}
        >
          <div className="col-span-2 md:col-span-1">
            <a href="/">
              <img
                src="/R2045_Logo_Transparent.png"
                className="w-20 "
                alt="IFR Logo"
              />
            </a>
          </div>
          <div className="hidden lg:block lg:col-span-2"></div>
          <div className="flex md:hidden col-span-7 justify-end items-center">
            <button
              className="flex flex-col h-full w-12 rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-3 opacity-100 group-hover:opacity-100'
                    : 'bg-slate-700 opacity-100 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'opacity-0'
                    : 'bg-slate-700 opacity-100 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100'
                    : 'bg-slate-700 opacity-100 group-hover:opacity-100'
                }`}
              />
            </button>
          </div>
          <div className="hidden md:flex md:col-span-8 lg:col-span-6  justify-end items-center">
            <NavbarItemText bigFont link="/">
              Home
            </NavbarItemText>
            <NavbarItemText bigFont link="/members">
              Members
            </NavbarItemText>
            <NavbarItemText bigFont link="/outreaches">
              Outreaches
            </NavbarItemText>
            <NavbarItemText
              bigFont
              link="https://www.ifrfoundation.org/about/first"
            >
              About FIRST
            </NavbarItemText>

            <div className={` relative h-full font-medium`}>
              <a href="/TechnoNatura School_R2045 Indonesia Robotic Sponsorship Proposal_BAHASA.pdf">
                <div className="relative w-full px-6 font-semibold  h-full flex items-center cursor-pointer">
                  <div
                    className={`absolute -left-1 w-full -z-10 ${
                      isScrolled ? 'bg-slate-200' : 'bg-slate-50'
                    } h-full`}
                    style={{
                      clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                    }}
                  ></div>
                  <h6 className=" md:text-sm lg:text-lg text-end text-slate-900">
                    Sponsor us
                  </h6>
                </div>
              </a>
            </div>

            {/* <div className="px-6 h-3/6 flex items-center border-l-2 ml-6 cursor-pointer">
              EN
            </div> */}
          </div>
        </div>
      </PageContainer>

      <div
        className={`w-full py-4 ${
          isScrolled
            ? ''
            : 'transparent text-slate-100 shadow-sm backdrop-blur-md'
        }`}
      >
        <PageContainer>
          <div className="flex items-center gap-3">
            <h6 className="inline-block">Follow us on</h6>
            <div className={`inline-flex gap-4 text-xl `}>
              <a
                href="https://www.instagram.com/r2045.id/"
                aria-label="R2045 Instagram Page"
                target="_blank"
                className={`${
                  isScrolled ? 'hover:text-slate-400' : 'hover:text-slate-400'
                }`}
              >
                {' '}
                <FaInstagram className="" />
              </a>

              <a
                href="https://www.youtube.com/@R2045_ID"
                aria-label="R2045 Instagram Page"
                target="_blank"
                className={`${
                  isScrolled ? 'hover:text-slate-400' : 'hover:text-slate-400'
                }`}
              >
                {' '}
                <FaYoutube className="" />
              </a>
            </div>
          </div>
        </PageContainer>
      </div>
    </nav>
  );
}

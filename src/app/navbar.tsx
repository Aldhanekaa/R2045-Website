'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { inter } from '@/app/fonts';
import { usePathname } from 'next/navigation';
import MobileNav, { MobileNavChildren } from '@/components/Navbar/MobileNav';
import NavbarItemText from '@/components/Navbar/Navbar';

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
  const pathName = usePathname();
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <nav
      // shadow-xl backdrop-blur-xl
      className={`${
        validateUrl(pathName) ? '' : 'fixed'
      }  transparent py-3  w-full top-0 z-40 ${inter.className}`}
    >
      <MobileNav active={isOpen}>
        <>
          <a href="/">
            {' '}
            <h5 className="text-xl font-normal mb-10">Home</h5>
          </a>
          <a href="/events">
            {' '}
            <h5 className="text-xl font-normal mb-10">Events</h5>
          </a>

          <h4 className="text-2xl font-semibold mb-4">About</h4>
          <MobileNavChildren
            childrens={[
              {
                text: 'About FIRST',
                link: '/about/first/',
              },
              {
                text: `About IFR`,
                link: '/#about-ifr',
              },
              {
                text: `Contact IFR`,
                link: '/about/contact-ifr',
              },
            ]}
          />

          <h4 className="text-2xl font-semibold mt-12 mb-4">Programs</h4>
          <MobileNavChildren
            childrens={[
              {
                text: 'FIRST Tech Challenge',
                link: '/programs/ftc/',
                detail: 'Ages 12 to 18',
              },
              {
                text: `FIRST Global Challenge`,
                link: '/programs/fgc/',
                detail: 'Grades 9 to 12',
              },
            ]}
          />

          <h4 className="text-2xl font-semibold mt-12 mb-4">Get Involved</h4>
          <MobileNavChildren
            childrens={[
              {
                text: 'Info for Schools',
                link: '/get-involved/info-for-schools',
              },
              {
                text: `Info for Parents & Guardians`,
                link: '/get-involved/info-for-parents',
              },
              {
                text: `Become a Volunteer!`,
                link: '/get-involved/info-for-volunteers',
              },
              // {
              //   text: `Partners & Sponsors`,
              //   link: '/get-involved/partners-and-sponsors',
              // },
              // {
              //   text: `Become a Volunteer`,
              //   link: '/get-involved/volunteer',
              //   detail: 'Volunteer in events',
              // },
            ]}
          />
        </>
      </MobileNav>

      <PageContainer>
        <div
          style={{
            borderBottomWidth: '1px',
          }}
          className="w-full grid grid-cols-9 py-4 relative border-slate-200/30"
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
                    : 'bg-slate-100 opacity-100 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'opacity-0'
                    : 'bg-slate-100 opacity-100 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100'
                    : 'bg-slate-100 opacity-100 group-hover:opacity-100'
                }`}
              />
            </button>
          </div>
          <div className="hidden md:flex md:col-span-8 lg:col-span-6  justify-end items-center">
            <NavbarItemText bigFont link="/">
              Home
            </NavbarItemText>

            <NavbarItemText
              bigFont
              childrens={[
                {
                  text: 'About FIRST',
                  link: '/about/first/',
                },
                {
                  text: `About IFR`,
                  link: '/#about-ifr',
                },
                {
                  text: `Contact IFR`,
                  link: '/about/contact-ifr/',
                },
              ]}
            >
              About
            </NavbarItemText>
            <NavbarItemText
              bigFont
              childrens={[
                {
                  text: 'FIRST Tech Challenge',
                  link: '/programs/ftc/',
                  detail: 'Ages 12 to 18',
                },
                {
                  text: `FIRST Global Challenge`,
                  link: '/programs/fgc/',
                  detail: 'Grades 9 to 12',
                },
              ]}
            >
              Programs
            </NavbarItemText>
            <NavbarItemText bigFont link="/events">
              Events
            </NavbarItemText>
            <NavbarItemText
              bigFont
              end
              childrens={[
                {
                  text: 'Info for Schools',
                  link: '/get-involved/info-for-schools',
                },
                {
                  text: `Info for Parents & Guardians`,
                  link: '/get-involved/info-for-parents',
                },
                {
                  text: `Become a Volunteer!`,
                  link: '/get-involved/info-for-volunteers',
                },
                // {
                //   text: `Partners & Sponsors`,
                //   link: '/get-involved/partners-and-sponsors',
                // },
                // {
                //   text: `Become a Volunteer`,
                //   link: '/get-involved/volunteer',
                //   detail: 'Volunteer in events',
                // },
              ]}
            >
              Get Involved
            </NavbarItemText>

            {/* <div className="px-6 h-3/6 flex items-center border-l-2 ml-6 cursor-pointer">
              EN
            </div> */}
          </div>
        </div>
      </PageContainer>
    </nav>
  );
}

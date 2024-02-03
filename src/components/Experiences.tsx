'use client';
import Image from 'next/legacy/image';
import PageContainer from './PageContainer';
import FGC2023 from '@/imgs/experience/FGC2023.jpg';
import FGC2022 from '@/imgs/experience/FGC2022.png';

import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Experiences = [
  {
    title: 'FIRST Global Challenge 2022, Geneva, Switzerland',
    description: `Pada tahun 2022 di bulan Oktober, Tim R2045 mewakili Indonesia
                dalam ajang olimpiade robotik dunia oleh FIRST yaitu FIRST Global Challenge di
                Jeneva, Swiss. Dari total 30 anggota aktif di tahun 2022, 2 dari anggota tim kami saat ini, yaitu Rafi dan Taufiq menjadi salah satu dari 6 anggota andalan terpilih yang bermain di lapangan permainan.`,
    img: FGC2022,
    learnMoreLink: 'https://first.global/2022-nations/indonesia-2022/',
    FGCLink: '',
    achievements: [
      {
        name: 'XPRIZE Innovator Award - Carbon Countermeasures',
        place: '2nd',
      },
      {
        name: 'Engineering Documentation',
        place: '2nd',
      },
      {
        name: 'Rankings',
        place: '23rd of 162',
      },
    ],
  },
  {
    title: 'FIRST Global Challenge 2023, Singapore',
    description: `Di tahun 2023, bulan Oktober, Tim R2045 mewakili Indonesia
                dalam ajang olimpiade robotik dunia FIRST Global Challenge di
                Singapur. Bersama 38 anggota aktif pada tahun 2023, kami sukses
                menempati posisi 6 dari 191 negara yang berpartisipasi dan
                sukses menempati semifinal. Satu dari anggota kami saat ini, yaitu Taufiq menjadi anggota andalan untuk bermain di lapangan permainan.`,
    img: FGC2023,
    learnMoreLink: 'https://first.global/2023-nations/indonesia-2023/',
    FGCLink: '',

    achievements: [
      {
        name: 'Engineering Notebook Award',
        place: '3rd',
      },
      {
        name: 'Rankings',
        place: '6th of 191',
      },
    ],
  },
];

export default function PastExperiences() {
  const [idx, setIdx] = useState(0);
  return (
    <section className=" pb-60 relative">
      <PageContainer>
        <div className=" md:px-40 lg:px-60 w-full">
          <h4 className=" text-center text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300 mb-3">
            Robotic Experiences
          </h4>
          <h5 className="text-center text-slate-100 text-lg text-pretty md:text-2xl mt-6">
            Dari 8 anggota tim kami saat ini, 2 diantaranya pernah mengikuti
            olimpiade robotik dunia oleh FIRST® mewakili sebagai tim nasional
            Indonesia pada FIRST® Global Challenge (FGC) 2022 & 2023
          </h5>
        </div>

        <div className="grid grid-rows-3 grid-cols-8 gap-4 mt-20">
          <div className="lg:col-span-4 lg:row-span-4 md:row-span-1 md:col-span-4 row-span-1 col-span-8 rounded-xl bg-cover bg-center relative overflow-hidden">
            <Image
              src={Experiences[idx].img}
              alt="Excitement"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
            />
            <div className="absolute w-full from-transparent h-32 to-black bg-gradient-to-b bottom-0 py-2 px-2"></div>
          </div>
          <div className="relative  lg:col-span-4 md:col-span-4 md:row-span-3 row-span-1 col-span-8 px-6 md:px-10 py-14 rounded-xl text-slate-900 bg-slate-100">
            <div className="absolute bottom-8  right-12 flex gap-2 text-2xl justify-center mt-12">
              <div
                onClick={() => {
                  let newIdx = 0;
                  if (idx == 0) {
                    newIdx = Experiences.length - 1;
                  } else {
                    newIdx = idx - 1;
                  }
                  setIdx(newIdx);
                }}
              >
                <FaArrowLeft className="hover:-translate-x-1 text-yellow-400 hover:text-yellow-600 duration-200 cursor-pointer" />
              </div>
              <div
                onClick={() => {
                  let newIdx = 0;
                  if (idx == Experiences.length - 1) {
                    newIdx = 0;
                  } else {
                    newIdx = idx + 1;
                  }
                  setIdx(newIdx);
                }}
              >
                <FaArrowRight className="hover:translate-x-1 text-yellow-400 hover:text-yellow-600 duration-200 cursor-pointer" />
              </div>
            </div>{' '}
            <div>
              <h4 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 mb-3">
                {Experiences[idx].title}
              </h4>
              <p className="text-xl text-justify mt-6">
                {Experiences[idx].description}
              </p>
            </div>
            <div>
              <div className="px-4 rounded-xl py-2 mt-5 text-yellow-500 underline bg-yellow-50 inline-block">
                <a
                  href={Experiences[idx].learnMoreLink}
                  target="_blank"
                  className="font-bold group"
                >
                  Learn More
                  <FaArrowRight className="text-yellow-500 group-hover:translate-x-2 duration-100 inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>
          <div className=" text-pretty px-6 md:px-10 py-10  lg:col-span-4 lg:row-span-1 md:col-span-4 md:row-span-1 row-span-1 col-span-8 bg-none lg:bg-slate-800 rounded-xl">
            <h6 className="font-semibold text-slate-50 text-2xl">
              Achievements
            </h6>

            <div className="w-full grid snap-x scroll-pl-6  grid-cols-none auto-cols-[8rem] grid-flow-col overflow-x-auto scroll-smooth gap-x-6 mt-6 gap-y-8 ">
              {Experiences[idx].achievements.map((Achievement, idx) => (
                <div
                  className="snap-start snap-always col-span-2 pb-4"
                  key={idx}
                >
                  <div className="bg-slate-300 rounded-lg px-3 py-3">
                    <h6 className="text-lg">{Achievement.name}</h6>
                    <h6>
                      <span className="font-semibold">{Achievement.place}</span>{' '}
                      Place
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

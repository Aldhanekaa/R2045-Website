import Image from 'next/legacy/image';
import { inter } from './fonts';
import PageContainer from '@/components/PageContainer';
import RobotPlays from '@/imgs/RobotPlays.jpg';
import Excitement from '@/imgs/Excitement.jpeg';
import Playing from '@/imgs/Playing.jpg';
import Awards from '@/imgs/Awards.jpg';
import EpicMoment from '@/imgs/EpicMoment.jpg';
import NusantaraRegional_1 from '@/imgs/NusantaraRegional_1.jpg';
import NusantaraRegional_2 from '@/imgs/NusantaraRegional_2.jpg';

import { FaArrowRightLong } from 'react-icons/fa6';

function AwardCard({
  title,
  advancement,
  place,
}: {
  title: string;
  place: string;
  advancement?: boolean;
}) {
  return (
    <div className="col-span-9 lg:col-span-3 bg-slate-50/30 backdrop-blur-md px-6 py-8 rounded-2xl relative">
      {advancement && (
        <div className="absolute px-3 py-2 rounded-xl left-4 -top-4 bg-gradient-to-b from-yellow-400 to-yellow-600 mb-3">
          <h6 className=""> World Championship Advancement</h6>
        </div>
      )}
      <h5 className=" text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 mb-3">
        {title}
      </h5>
      <h6 className="text-2xl font-bold mt-4 text-slate-50">
        <span className="font-black">{place}</span> Place
      </h6>
    </div>
  );
}

const awards = [
  {
    title: 'Inspire Award',
    place: '1st',
    advancement: true,
  },
  {
    title: 'Winner Alliance',
    place: '1st',
  },
  {
    title: 'Think Award',
    place: '2nd',
  },
  {
    title: 'Connect Award',
    place: '2nd',
  },
  {
    title: 'Control Award',
    place: '2nd',
  },
  {
    title: 'Motivate Award',
    place: '2nd',
  },
];

function WINNER_TEXT() {
  return (
    <div className="">
      <h6 className="flex gap-6 font-medium text-3xl">
        <span className="font-extrabold">#1</span>
        <span className="inline-block font-black bg-clip-text text-transparent bg-gradient-to-b from-red-400 to-red-700">
          Winner
        </span>{' '}
      </h6>
    </div>
  );
}

export default function Home() {
  return (
    <main className={`w-full ${inter.className}`}>
      <div
        className=" relative bg-cover bg-right "
        style={{
          maxHeight: '1200px',
          backgroundImage:
            'linear-gradient(100.2deg, rgb(30, 41, 59) 10.15%, rgba(51, 49, 49, 0.833333) 34.88%, rgba(75, 73, 73, 0.714286) 58.61%, rgba(169, 142, 57, 0.866261) 88.62%, #FBCB2C 105.09%), url(/hero.jpg)',
        }}
      >
        <div className="absolute w-full bottom-0 h-60 bg-gradient-to-b from-transparent to-slate-800"></div>
        <PageContainer>
          <div className="grid grid-cols-9 w-full min:h-screen pt-20 lg:pt-36 pb-44">
            <div className="col-span-9 md:col-span-7 lg:col-span-5 py-32">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl relative text leading-relaxed animate-fade-down animate-once animate-duration-900 animate-normal">
                <span className=" font-medium text-3xl lg:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-700">
                  Welcome To
                </span>
                <br />
                <span className="inline-block text-slate-50 font-extrabold mt-4">
                  <span className="inline-block italic">FIRST</span>® Tech
                  Challenge
                </span>{' '}
                <br />
                <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-900">
                  INDONESIA TEAM
                </span>
              </h1>
              <div className="relative">
                <h2 className="text-slate-300 font-light italic mt-8 text-2xl lg:text-4xl  leading-relaxed  animate-fade-down animate-once animate-duration-700 animate-normal">
                  Representing as Indonesia Robotics National Team for FIRST
                  Tech Challenge 2024 World Championship.
                </h2>
              </div>
            </div>
            {/* <div className="hidden md:flex md:col-span-4 justify-end">
            <div
              className="w-full absolute -right-2/4  h-full duration-100 hover:border-2 bg-slate-600 bg-cover bg-right"
              style={{
                clipPath: 'polygon(9% 0, 100% 0, 100% 100%, 0% 100%)',
                backgroundImage: 'url(/FGC-CFD.png)',
              }}
            ></div>
          </div> */}
          </div>
        </PageContainer>
      </div>

      <div className="w-full relative mt-44 pb-20">
        <div
          className="absolute w-full h-full -z-10 left-0 top-0  "
          style={{
            background:
              'linear-gradient(180deg, rgb(30, 41, 59) 0%, rgba(30, 41, 59, 0.6) 50%, rgb(234, 179, 8 ) 100%)',
          }}
        ></div>
        <div className="absolute w-full h-full top-0 left-0 -z-20">
          <Image
            alt="Robot plays"
            src={RobotPlays}
            objectFit="cover"
            layout="fill"
            placeholder="blur"
          />
        </div>
        <div className="w-full relative">
          {/* <div className="absolute w-3/12 left-0 top-12">
            <div className="relative">
              <div
                className="absolute w-full"
                style={{
                  border: '2px solid #4B4B4B',
                }}
              ></div>
              <div
                className="absolute w-2/12 -top-6 -rotate-45 -right-1/4"
                style={{
                  border: '2px solid #4B4B4B',
                }}
              ></div>
            </div>
          </div> */}
          <PageContainer className="w-full relative">
            <h3 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-500">
              We Are The
            </h3>
            <h2 className=" text-7xl md:text-9xl mt-4 font-black text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-950">
                R
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-950">
                2045
              </span>
            </h2>
          </PageContainer>
        </div>

        <div className="px-0 md:px-32 lg:px-52 pb-40 pt-20 relative">
          <PageContainer className="w-full ">
            <p className="text-slate-300 text-center text-2xl">
              Inisiasi pembentukan generasi emas Indonesia menyambut 100 tahun
              kemerdekaan Indonesia telah dimulai. Proyek ini diberi kode nama
              Rendezvous 2045. Angka 2045 merupakan penanda tahun 2045 dimana
              Indonesia akan mencapai 100 tahun kemerdekaannya.
              <br />
              <br />
              Team R2045 merupakan tim robotik remaja SMP dan SMA dari Madrasah
              Internasional TechnoNatura yang berbasis di Depok, Jawa Barat,
              yang akan mengikuti perlombaan robotik World Championship FIRST
              Tech Challenge 2024.
            </p>
          </PageContainer>
        </div>
      </div>
      <section className="bg-yellow-500 pb-200">
        <PageContainer className="">
          <section
            id="quotes"
            className="grid grid-cols-8 grid-rows-4 md:grid-rows-2 lg:grid-rows-2 gap-x-6 gap-y-6 mb-20"
          >
            <div className="lg:col-span-4 lg:row-span-2 md:row-span-1 md:col-span-4 row-span-1 col-span-8 rounded-xl bg-cover bg-center relative overflow-hidden">
              <Image
                src={NusantaraRegional_2}
                alt="Excitement"
                layout="fill"
                objectFit="cover"
                objectPosition="left"
                placeholder="blur"
              />
            </div>
            <div className=" flex flex-col justify-between lg:col-span-4 lg:row-span-1 md:col-span-4 md:row-span-1 row-span-1 col-span-8 px-6 md:px-10 py-14 rounded-xl text-slate-900 bg-slate-100">
              <div>
                <h4 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 mb-3">
                  FTC Nusantara Regional 2024
                </h4>
                <p className="text-xl text-justify mt-6">
                  FIRST Tech Challenge Nusantara Regional 2023-2024 merupakan
                  kompetisi FTC yang pertama kali diadakan di Indonesia yang
                  berlangsung di Depok, Jawa Barat. Kompetisi regional ini
                  diikuti oleh 3 negara diantaranya Indonesia, Malaysia, dan
                  Kazakhstan. Dan diikuti lebih dari 100 siswa mulai dari SMP
                  dan SMA.
                </p>
              </div>
              <div>
                <div className="px-4 rounded-xl py-2 mt-5 text-yellow-500 underline bg-yellow-50 inline-block">
                  <a
                    href="https://www.ifrfoundation.org/event/IDDESQ"
                    target="_blank"
                    className="font-bold group"
                  >
                    Nusantara Regional IFR{' '}
                    <FaArrowRightLong className="text-yellow-500 group-hover:translate-x-2 duration-100 inline-block ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className=" text-pretty px-6 md:px-10 py-14  lg:col-span-2 lg:row-span-1 md:col-span-4 md:row-span-1 row-span-1 col-span-8 bg-gray-900 rounded-xl">
              <p className="text-slate-200">
                Kompetisi ini menjadi kunci keberhasilan tim R2045 untuk
                mendapatkan kursi di FIRST Tech Challenge World Championship
                setelah meraih Inspire Award, satu-satunya tim terpilih dari 15
                tim yang mengikuti kompetisi tersebut.
                <br />
                <br /> Kejuaraan dunia tersebut akan berlangsung di jantung kota
                Houston, Texas, AS.
              </p>
            </div>
            <div className="lg:col-span-2 lg:row-span-1 md:col-span-4 md:row-span-1 row-span-1 col-span-8 rounded-xl overflow-hidden relative">
              <div className=" hover:scale-125 w-full h-full bg-cover bg-center duration-200 ">
                <Image
                  src={NusantaraRegional_1}
                  alt="Excitement"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center top"
                  placeholder="blur"
                />
              </div>
            </div>
          </section>
        </PageContainer>
      </section>

      <section
        className="relative"
        id="R2045_Awards"
        aria-label="R2045 Awards, Team #19829"
      >
        <div
          className="absolute w-full h-full -z-10 left-0 top-0 "
          style={{
            background:
              'linear-gradient(180deg, rgb(30, 41, 59) 0%, rgba(30, 41, 59, 0.6) 50%, rgb(30, 41, 59) 100%)',
          }}
        ></div>
        <div className="absolute w-full h-full top-0 right-0 -z-20">
          <Image
            src={Awards}
            alt="R2045 Awards Awardee"
            objectFit="cover"
            layout="fill"
            placeholder="blur"
          />
        </div>

        <PageContainer className="mt-32 py-40 relative">
          <h4 className="text-center text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-800 mb-3">
            Our Awards
          </h4>
          <div className="w-full grid grid-cols-9 relative mt-16 mb-20 gap-x-6 gap-y-6">
            {awards.map((Award, idx) => (
              <AwardCard {...Award} key={idx} />
            ))}
          </div>
          <div className="">
            <p className=" text-center font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600">
              <a
                target="_blank"
                href="https://ftc-events.firstinspires.org/2023/IDDESQ/awards"
                className=" group underline underline-offset-4 hover:border-b-2 border-yellow-500"
              >
                {' '}
                Nusantara Regional Awards
                <FaArrowRightLong className="text-yellow-500 group-hover:translate-x-2 duration-100 inline-block ml-2" />
              </a>
            </p>
            <p className="text-center text-slate-400 mt-2">
              View More FTC Nusantara Regional Awards List From FIRST® Tech
              Challenge Official Website
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="relative" aria-label="R2045 Wold Championship">
        <div
          className="absolute w-full h-full -z-10 left-0 top-0 "
          style={{
            background:
              'linear-gradient(180deg, rgb(30, 41, 59) 0%, rgba(30, 41, 59, 0.6) 50%, rgb(30, 41, 59) 100%)',
          }}
        ></div>
        <div className="absolute w-full h-full top-0 right-0 -z-20">
          <Image
            src={EpicMoment}
            alt="R2045 Awards Awardee"
            objectFit="cover"
            layout="fill"
          />
        </div>

        <PageContainer className="mt-32 py-20 relative">
          <h5 className="lg:text-center text-3xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-600 mb-3">
            We Are Ready For The
          </h5>
          <h4 className="lg:text-center text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-800 mb-3">
            World Championship
          </h4>
          <h5 className="lg:text-center text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-500 mb-3">
            Houston, Texas, United States
          </h5>
          <div className="w-full grid grid-cols-9 relative mt-16 mb-20 gap-x-6 gap-y-6">
            <div className="lg:col-span-5 col-span-9 h-96 lg:h-auto rounded-xl bg-cover bg-center relative overflow-hidden">
              <Image
                src={EpicMoment}
                alt="Excitement"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                placeholder="blur"
              />
            </div>
            <div className="lg:col-span-4 col-span-9 px-6 md:px-10 py-14 text-slate-100 bg-slate-100/30 backdrop-blur-md rounded-xl bg-cover bg-center relative overflow-hidden">
              <div>
                <h4 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 mb-3">
                  FIRST Tech Challenge World Championship
                </h4>
                <p className="text-xl text-justify mt-6">
                  Setelah meraih penghargaan Inspire Award di FTC Nusantara
                  Regional, tim R2045 berhasil meraih kursi di kejuaraan dunia
                  kompetisi robotik FIRST Tech Challenge. Tim R2045 menjadi
                  satu-satunya tim robotik Indonesia yang akan berangkat ke
                  Houston, Texas, Amerika Serikat untuk mengharumkan nama bangsa
                  Indonesia dan menginspirasi anak-anak muda dan pelajar lainnya
                  seperti kami.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}

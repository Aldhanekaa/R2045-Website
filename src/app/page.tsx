import Image from 'next/legacy/image';
import { inter } from './fonts';
import PageContainer from '@/components/PageContainer';
import RobotPlays from '@/imgs/RobotPlays.jpg';

export default function Home() {
  return (
    <main className={`w-full ${inter.className}`}>
      <div
        className=" relative bg-cover bg-right "
        style={{
          maxHeight: '1200px',
          backgroundImage:
            'linear-gradient(100.2deg, #120F0F 10.15%, rgba(51, 49, 49, 0.833333) 34.88%, rgba(75, 73, 73, 0.714286) 58.61%, rgba(169, 142, 57, 0.866261) 88.62%, #FBCB2C 105.09%), url(/hero.jpg)',
        }}
      >
        <div className="absolute w-full bottom-0 h-60 bg-gradient-to-b from-transparent to-black"></div>
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
          className="absolute w-full h-full -z-10 left-0 top-0 "
          style={{
            background:
              'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.6) 50%, #000000 100%)',
          }}
        ></div>
        <div className="absolute w-full h-full top-0 left-0 -z-20">
          <Image src={RobotPlays} objectFit="cover" layout="fill" />
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
            <h3 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-500">
              We Are The
            </h3>
            <h2 className=" text-9xl mt-4 font-black text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-950">
                R
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-950">
                2045
              </span>
            </h2>
          </PageContainer>
        </div>

        <div className=" px-52 pb-40 pt-20 relative">
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
    </main>
  );
}

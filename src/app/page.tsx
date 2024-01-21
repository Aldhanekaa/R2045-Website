import Image from 'next/image';
import { inter } from './fonts';
import PageContainer from '@/components/PageContainer';

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
                <span className="mb-8 font-medium text-3xl lg:text-4xl xl:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-700">
                  Welcome To
                </span>
                <br />
                <span className="inline-block text-slate-50 font-extrabold">
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
    </main>
  );
}

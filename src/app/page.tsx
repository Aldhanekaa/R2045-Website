import Image, { StaticImageData } from 'next/legacy/image';
import { inter } from './fonts';
import PageContainer from '@/components/PageContainer';
import RobotPlays from '@/imgs/RobotPlays.jpg';
import Excitement from '@/imgs/Excitement.jpeg';
import Playing from '@/imgs/Playing.jpg';
import Awards from '@/imgs/Awards.jpg';
import EpicMoment from '@/imgs/EpicMoment.jpg';
import NusantaraRegional_1 from '@/imgs/NusantaraRegional_1.jpg';
import NusantaraRegional_2 from '@/imgs/NusantaraRegional_2.jpg';

import Yodha from '@/imgs/members/yodha.png';
import Rafi from '@/imgs/members/rafi.png';
import Alif from '@/imgs/members/alif.png';
import Rafif from '@/imgs/members/rafif.png';

import Aldhan from '@/imgs/members/aldhan.png';
import Taufiq from '@/imgs/members/taufiq.png';
import Gema from '@/imgs/members/gema.png';
import Zhafran from '@/imgs/members/zhafran.png';

import DetosShowcase from '@/imgs/outreaches/DetosShowcase.jpeg';
import KemenparekrafSupport from '@/imgs/outreaches/KemenparekrafSupport.jpeg';
import MakassarShowcase from '@/imgs/outreaches/MakassarShowcase.jpeg';
import PemkotSupport from '@/imgs/outreaches/Pemkot.jpeg';
import CFD from '@/imgs/outreaches/CFD.jpeg';
import CFD2 from '@/imgs/outreaches/CFD2.jpeg';
import Podcast from '@/imgs/outreaches/Podcast.jpeg';

import { FaAngleRight, FaArrowRightLong, FaPlay } from 'react-icons/fa6';
import { Metadata } from 'next';
import JoinUrl from './tools/joinUrl';
import PastExperiences from '@/components/Experiences';

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

function TeamMemberCard({
  name,
  grade,
  img,
  role,
}: {
  name: string;
  img: StaticImageData;
  role: string;
  grade: string;
}) {
  return (
    <div className=" snap-start snap-always  col-span-2 relative py-4  rounded-3xl">
      <div className="absolute h-5/6 bottom-0 z-0 w-full bg-slate-50 rounded-3xl"></div>
      <div className="px-8 ">
        <div className="w-full h-96 relative rounded-2xl overflow-hidden">
          <Image
            src={img}
            alt={`Member ${name} Photo`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="py-6 bg-slate-50 px-8 z-10 relative rounded-3xl">
        <div className="flex items-center">
          <h5 className="text-red-500 font-bold text-3xl inline-block">
            {name}
          </h5>
          <div className="inline-block px-2 py-1 rounded-lg ml-3 mr-2 bg-gradient-to-b from-slate-100 to-slate-200 ">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-yellow-400 font-semibold">
              {grade}
            </span>
          </div>
        </div>
        <h6 className="text-red-400 font-semibold text-xl mt-3">{role}</h6>
      </div>
    </div>
  );
}

function Outreach({
  title,
  img,
  link,
}: {
  title: string;
  img: StaticImageData;
  link: string;
}) {
  return (
    <div className=" snap-start snap-always  col-span-3 relative py-4  rounded-3xl">
      <div className="">
        <div className="w-full h-96 relative rounded-2xl overflow-hidden">
          <Image
            src={img}
            alt={`${title} Photo`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      </div>

      <div className="py-6 px-8 z-10 relative rounded-3xl">
        <div className="flex items-center mb-4">
          <h5 className="text-slate-100 font-normal text-left text-lg inline-block">
            {title}
          </h5>
        </div>
        <a href={link} className="font-bold group text-slate-100">
          Learn More
          <FaArrowRightLong className="text-slate-100 group-hover:translate-x-2 duration-100 inline-block ml-1" />
        </a>{' '}
      </div>
    </div>
  );
}

const outreaches = [
  {
    title:
      'MENPAREKRAF SANDIAGA UNO BERI DUKUNGAN UNTUK TIM ROBOT R2045 TAMPIL DI AJANG FIRST GLOBAL CHALLENGE (FGC) 2022',
    img: KemenparekrafSupport,
    link: '/outreaches#kemenparekrafsupport',
  },
  {
    title:
      'Wali Kota Depok Lepas Tim Robot R2045 Madrasah Techno Natura Depok Tanding Di Ajang FIRST Global Challenge 2023 Singapura',
    img: PemkotSupport,
    link: '/outreaches#pemkotsupport',
  },
  {
    title:
      'Tim R2045 menjadi salah satu perwakilan kota Depok dalam pameran Indonesia City Expo Makassar 11-14 July 2023',
    img: MakassarShowcase,
    link: '/outreaches#makassarshowcase',
  },

  {
    title:
      'Tim R2045 menjadi salah satu perwakilan kota Depok dalam pameran Indonesia City Expo Makassar 11-14 July 2023',
    img: DetosShowcase,
    link: '/outreaches#detosshowcase',
  },
  {
    title: 'Tim R2045 diundang oleh Podcast Korpri Depok',
    img: Podcast,
    link: '/outreaches#depokcreativecitypodcast',
  },
  {
    title: 'Tim R2045 melakukan promosi di Car Free Day, Jakarta. (2023)',
    img: CFD,
    link: '/outreaches#CFD',
  },
  {
    title: 'Tim R2045 melakukan promosi di Car Free Day, Jakarta. (2023)',
    img: CFD2,
    link: '/outreaches#CFD',
  },
];

const members = [
  {
    name: 'Taufiq',
    img: Taufiq,
    role: 'Mechanic, Programmer',
    grade: '10th Grade',
  },
  {
    name: 'Yodha',
    img: Yodha,
    role: 'Mechanic, Media',
    grade: '10th Grade',
  },
  {
    name: 'Aldhan',
    img: Aldhan,
    role: 'Programmer, Business',
    grade: '10th Grade',
  },
  {
    name: 'Rafi',
    img: Rafi,
    role: 'Mechanic',
    grade: '10th Grade',
  },

  {
    name: 'Gema',
    img: Gema,
    role: 'Mechanic',
    grade: '8th Grade',
  },
  {
    name: 'Rafif',
    img: Rafif,
    role: 'Mechanic',
    grade: '8th Grade',
  },
  {
    name: 'Alif',
    img: Alif,
    role: 'Mechanic, Media',
    grade: '8th Grade',
  },
  {
    name: 'Zhafran',
    img: Zhafran,
    role: 'Mechanic',
    grade: '8th Grade',
  },
];

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

export const metadata: Metadata = {
  title:
    'R2045 Indonesia National Youths Robotics Team | Team R2045 Robotics #19829',
  description:
    'R2045 adalah tim robotik pelajar SMP dan SMA mewakili negara Republik Indonesia untuk bertanding di lomba kejuaraan dunia FIRST Tech Challenge di Houston, Texas, Amerika Serikat. Tim ini beranggota pelajar muda SMP dan SMA dari Madrasah Internasional TechnoNatura, Depok. ',
  keywords: [
    'FIRST Tech Challenge Indonesia',
    'Tim Robotik',
    'Tim Robotik R2045',
    'Tim Robotik SMP',
    'Tim Robotik SMA',
    'Tim Robotik Pelajar',
    'R2045',
    'IFR',
    'R2045 #19829',
  ],
  openGraph: {
    locale: 'id',
    title:
      'R2045 Indonesia National Youths Robotics Team | Team R2045 Robotics #19829',
    description:
      'R2045 adalah tim robotik pelajar SMP dan SMA mewakili negara Republik Indonesia untuk bertanding di lomba kejuaraan dunia FIRST Tech Challenge di Houston, Texas, Amerika Serikat. Tim ini beranggota pelajar muda SMP dan SMA dari Madrasah Internasional TechnoNatura, Depok.',
    countryName: 'Indonesia',
    siteName: 'Team Indonesia R2045 Robotics #19829 ',
    url: JoinUrl('/event/IDDESQ/'),
  },
  abstract: 'Tim robotik Indonesia R2045 #19829',
  appleWebApp: {
    capable: true,
    title:
      'R2045 Indonesia National Youths Robotics Team | Team R2045 Robotics #19829',
  },
};

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

      <PageContainer className="grid grid-cols-8 mt-32 pt-12 pb-28">
        <div className="col-span-8 flex lg:hidden justify-end">
          <div
            className="w-full h-96 bg-slate-600 bg-cover mb-12 bg-left relative"
            style={{
              clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
            }}
          >
            <Image
              alt="Robot plays"
              src={RobotPlays}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="col-span-8 lg:col-span-4">
          <h3 className="text-5xl font-bold mt-6 leading-normal text-slate-50">
            About{' '}
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-50 to-yellow-500">
              FIRST®
            </span>
          </h3>
          <h4 className="text-lg font-semi mt-12 text-justify text-slate-300 mb-6">
            FIRST® (For Inspiration and Recognition of Science and Technology)
            adalah organisasi global non-profit dari Amerika Serikat yang
            didirikan oleh tokoh penemu dan insinyur dari AS yaitu Dean Kamen di
            tahun 1989. Selama 30 tahun, FIRST® telah menggabungkan pembelajaran
            STEAM dengan kesenangan dan kegembiraan olahraga serta inspirasi
            yang datang dari komunitas melalui program yang terbukti berdampak
            pada pembelajaran, minat, dan pengembangan keterampilan di dalam dan
            di luar kelas.
          </h4>
          <a href="https://www.ifrfoundation.org/about/first" target="_blank">
            <div className="group mt-4 hover:underline inline-flex items-center bg-gradient-to-r active:from-yellow-700 active:to-orange-700 from-yellow-500 to-orange-500  px-4 py-2 text-slate-50">
              Learn More
              <span className="inline-block group-hover:translate-x-1 duration-200">
                <FaAngleRight />
              </span>
            </div>
          </a>
        </div>
        <div className="hidden lg:flex md:col-span-4 xl:col-span-4 justify-end">
          <div
            className="w-11/12 h-4/6 xl:h-full bg-slate-600 bg-cover drop-shadow-2xl shadow-2xl bg-left relative"
            style={{
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <Image
              alt="Robot plays"
              src={RobotPlays}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
        </div>
      </PageContainer>

      <div>
        <div className="w-full relative mt-12 mb-48">
          <PageContainer
            className="relative py-24 overflow-hidden rounded-2xl shadow-xl "
            style={{
              backgroundImage:
                'linear-gradient(95.31deg, #000000 0.44%, rgba(0, 0, 0, 0.6) 40.93%)',
            }}
          >
            <div className="absolute w-full h-full -z-20 top-0">
              <Image
                src={RobotPlays}
                layout="fill"
                placeholder="blur"
                objectFit="cover"
                objectPosition={'bottom'}
                alt="Cover"
                className=""
              />
            </div>
            <div className="grid grid-cols-9 gap-x-6 gap-y-4 w-full  lg:px-16 z-20">
              <div className="flex col-span-9 z-10 mb-12 lg:hidden justify-end h-96 rounded-3xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6e-5Uo1dRic?si=-dl9euf4mMFVyhYA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-9 lg:col-span-5 py-8">
                <h4 className="text-3xl font-bold text-slate-50">
                  FIRST Tech Challenge 2023-2024 CENTERSTAGESM presented by RTX
                </h4>
                <h5 className="text-lg font-normal text-slate-300 mt-8 mb-12 text-justify">
                  Buka tirai kekuatan desain, kreativitas, dan presisi untuk
                  menciptakan semua pengalaman baru dalam tantangan baru yang
                  spektakuler. Sains, teknologi, teknik, seni, dan matematika
                  (STEAM) menginspirasi ide-ide besar, keberanian, dan
                  kreativitas. Keterampilan ini memungkinkan kita menciptakan
                  seni dan pengalaman yang menyatukan, mempesona, dan
                  menggairahkan kita.
                </h5>
              </div>
              <div className="hidden col-span-4 lg:flex justify-end rounded-3xl overflow-hidden">
                {' '}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/6e-5Uo1dRic?si=-dl9euf4mMFVyhYA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </PageContainer>
        </div>
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

        <div className="px-0 md:px-32 lg:px-52 pb-60 pt-20 relative">
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

      <section className="bg-yellow-500">
        <section className=" pt-60 pb-60 relative">
          <PageContainer>
            <div className=" md:pr-40 lg:pr-96">
              <h4 className=" text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300 mb-3">
                Team Members
              </h4>
              <h5 className="text-slate-100 text-lg text-pretty md:text-2xl mt-6">
                Anggota tim R2045 memiliki 8 anggota aktif untuk mengikuti
                kegiatan FIRST Tech Challenge 2023-2024, mereka terdiri dari 4
                pelajar SMA dan 4 pelajar SMP.
              </h5>
            </div>

            <div className="grid snap-x scroll-pl-6  grid-cols-none auto-cols-[10rem] grid-flow-col gap-4 overflow-x-auto scroll-smooth gap-x-6 mt-20 gap-y-8 ">
              {members.map((member, idx) => (
                <TeamMemberCard key={idx} {...member} />
              ))}
            </div>
          </PageContainer>
        </section>
        <PastExperiences />

        <section className="pb-60 relative">
          <PageContainer>
            <div className="grid grid-cols-9 gap-8 py-8">
              <div className="hidden lg:block lg:col-span-1">
                <hr className=" border-4 mt-6 border-slate-100" />
              </div>
              <div className="col-span-9 lg:col-span-5">
                <h4 className=" text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300 mb-3">
                  Team Outreaches
                </h4>
                <h5 className="text-slate-100 text-lg text-pretty md:text-2xl mt-6">
                  Tim R2045 telah melakukan program promosi dan penjangkauan
                  sosial selama lebih dari 2 tahun. Termasuk, kami mendapatkan
                  dukungan dari Kemenparekraf, Sandiaga Uno dan pemerintah kota
                  Depok untuk mengikuti olimpiade dunia robotik yaitu FIRST
                  Global Challenge.
                </h5>
              </div>
            </div>

            <div className="grid snap-x scroll-pl-6  grid-cols-none auto-cols-[10rem] grid-flow-col gap-4 overflow-x-auto scroll-smooth gap-x-6 gap-y-8 ">
              {outreaches.map((outreach, idx) => (
                <Outreach key={idx} {...outreach} />
              ))}
            </div>
          </PageContainer>
        </section>

        <section className=" pb-60 relative">
          <div className="absolute w-full bottom-0 h-96 bg-gradient-to-b from-transparent to-slate-800"></div>

          <PageContainer className="relative">
            <section
              id="quotes"
              className="grid grid-cols-8 grid-rows-4 md:grid-rows-2 lg:grid-rows-2 gap-x-6 gap-y-6 mb-20"
            >
              <div className="lg:col-span-4 lg:row-span-2 md:row-span-1  row-span-1 col-span-8 rounded-xl bg-cover bg-center relative overflow-hidden">
                <Image
                  src={NusantaraRegional_2}
                  alt="Excitement"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  placeholder="blur"
                />
              </div>
              <div className=" flex flex-col justify-between lg:col-span-4 lg:row-span-1  md:row-span-1 row-span-1 col-span-8 px-6 md:px-10 py-14 rounded-xl text-slate-900 bg-slate-100">
                <div>
                  <h4 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 mb-3">
                    FIRST Tech Challenge Nusantara Regional 2024
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
              <div className=" text-pretty px-6 md:px-10 py-14  lg:col-span-2 lg:row-span-1  md:row-span-1 row-span-1 col-span-8 bg-gray-700 rounded-xl">
                <p className="text-slate-200">
                  Kompetisi ini menjadi kunci keberhasilan tim R2045 untuk
                  mendapatkan kursi di FIRST Tech Challenge World Championship
                  setelah meraih Inspire Award, satu-satunya tim terpilih dari
                  15 tim yang mengikuti kompetisi tersebut.
                  <br />
                  <br /> Kejuaraan dunia tersebut akan berlangsung di jantung
                  kota Houston, Texas, AS.
                </p>
              </div>
              <div className="lg:col-span-2 lg:row-span-1  md:row-span-1 row-span-1 col-span-8 rounded-xl overflow-hidden relative">
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

import Yodha from '@/imgs/members/yodha.png';
import Rafi from '@/imgs/members/rafi.png';
import Alif from '@/imgs/members/alif.png';
import Rafif from '@/imgs/members/rafif.png';

import Aldhan from '@/imgs/members/aldhan.png';
import Taufiq from '@/imgs/members/taufiq.png';
import Gema from '@/imgs/members/gema.png';
import Zhafran from '@/imgs/members/zhafran.png';
import Image, { StaticImageData } from 'next/legacy/image';
import PageContainer from '@/components/PageContainer';
import IDDESQ_HERO from '@/imgs/EpicMoment.jpg';
import { inter } from '../fonts';

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
    <div className="col-span-8 md:col-span-4 lg:col-span-2 relative py-4  rounded-3xl">
      <div className="absolute h-5/6 bottom-0 z-0 w-full bg-slate-50 rounded-3xl"></div>
      <div className="px-8 ">
        <div className="w-full h-96 relative rounded-2xl overflow-hidden">
          <Image src={img} alt="member Photo" layout="fill" objectFit="cover" />
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

export default function TeamMembers() {
  return (
    <main className={inter.className}>
      <div
        className=" relative bg-cover bg-center bg-white overflow-hidden h-screen lg:max-h-screen"
        style={{
          maxHeight: '850px',
        }}
      >
        <div className="z-20 absolute w-full bottom-0 h-64 bg-gradient-to-b from-transparent to-yellow-500"></div>

        <div
          className="absolute w-full h-full z-10"
          style={{
            backgroundImage:
              'linear-gradient(100.2deg, rgb(30, 41, 59) 10.15%, rgba(51, 49, 49, 0.833333) 34.88%, rgba(75, 73, 73, 0.714286) 58.61%, rgba(169, 142, 57, 0.866261) 88.62%, #FBCB2C 105.09%)',
          }}
        ></div>
        <Image
          src={IDDESQ_HERO}
          alt="Nusantara Regional FTC 2023-2024 Hero"
          style={{}}
          className=" scale-110 z-0"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
        <div className="absolute top-0 h-full w-full z-20">
          <PageContainer className="w-full h-full flex ">
            <div className="grid grid-cols-9 pb-8 text-slate-50  ">
              <div className="col-span-8 md:col-span-7 pt-72">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold relative text leading-relaxed animate-fade-down animate-once animate-duration-900 animate-normal">
                  R2045 Team Members
                </h1>
                <div className="relative ">
                  <h2 className="mt-8 text-2xl lg:text-4xl font-bold leading-relaxed  animate-fade-down animate-once animate-duration-700 animate-normal">
                    Know more about our team!
                  </h2>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>
      </div>

      <section className="bg-yellow-500 pt-24 pb-60 relative">
        <PageContainer>
          <h4 className=" text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300 mb-3">
            Team Members
          </h4>

          <div className="grid grid-cols-8 gap-4 overflow-x-auto scroll-smooth gap-x-6 mt-20 gap-y-8 ">
            {members.map((member, idx) => (
              <TeamMemberCard key={idx} {...member} />
            ))}
          </div>
        </PageContainer>
      </section>
    </main>
  );
}

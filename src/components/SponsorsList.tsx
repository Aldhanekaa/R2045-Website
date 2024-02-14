import Image from 'next/legacy/image';
import PageContainer from './PageContainer';

import TriwallLogo from '@/imgs/sponsors/Tri-Wall-IndonesiaLOGO.png';
const supports = [
  {
    link: 'https://tri-wallindonesia.co.id/',
    img: TriwallLogo,
    title: 'Heavy Duty Packaging Solution',
  },
];
export default function SponsorsList() {
  return (
    <PageContainer className="mt-12 mb-32">
      <h5 className=" text-5xl md:text-6xl text-center font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300 mb-3">
        Team Sponsors
      </h5>

      <div className="mt-6 w-full py-12  flex flex-wrap gap-y-6 gap-x-12 box-content pl-4 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {supports.map((media, idx) => (
          <a
            href={media.link}
            target="_blank"
            className="block w-full sm:w-4/12 lg:w-3/12 py-4 px-6 box-border bg-slate-50 rounded-xl hover:-translate-y-2 duration-100 hover:shadow-2xl hover:drop-shadow-xl hover:shadow-slate-700"
            key={idx}
          >
            <div className="py-12 box-border  col-span-3 relative h-20  w-full">
              {/* <a href={media.link}> */}
              <Image
                src={media.img}
                alt={`Media ${idx}`}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                placeholder="blur"
              />
              {/* </a> */}
            </div>
            <p className="text-center mt-2">{media.title}</p>
          </a>
        ))}
      </div>
    </PageContainer>
  );
}

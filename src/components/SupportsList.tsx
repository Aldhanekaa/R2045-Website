import Image from 'next/legacy/image';
import PageContainer from './PageContainer';

import WantiknasLogo from '@/imgs/recognisers/WantiknasLogo.png';
import KemenparekrafLogo from '@/imgs/recognisers/KemenparekrafLogo.png';
import IESPA_LOGO from '@/imgs/recognisers/IESPA_LOGO.png';
import DepokCreativeCityLogo from '@/imgs/recognisers/DepokCreativeCityLogo.png';

const supports = [
  {
    link: 'https://www.cnnindonesia.com/tv/20240113154637-404-1049083/video-kompetisi-robotik-internasional-generasi-muda',
    img: WantiknasLogo,
  },
  {
    link: 'https://astanatimes.com/2024/01/kazakh-schoolchildren-secure-7-awards-at-international-robotics-competition/',
    img: KemenparekrafLogo,
  },

  {
    link: 'https://www.antaranews.com/foto/3903189/kompetisi-robotik-internasional-ftc-2024-bekali-generasi-muda-keterampilan-industry-40',
    img: DepokCreativeCityLogo,
  },
  {
    link: 'https://www.antaranews.com/foto/3903189/kompetisi-robotik-internasional-ftc-2024-bekali-generasi-muda-keterampilan-industry-40',
    img: IESPA_LOGO,
  },
];

export default function SupportersList() {
  return (
    <PageContainer className="mb-32 mt-12">
      <h5 className=" text-4xl text-center md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300">
        This Event Recognised By
      </h5>

      <div className=" w-full py-12  flex justify-center flex-wrap gap-y-6 gap-x-6 box-content pl-4 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {supports.map((media, idx) => (
          <div
            // href={media.link}
            // target="_blank"
            className="block box-border w-full sm:w-4/12 lg:w-3/12 xl:w-2/12 py-4 px-6 bg-slate-50 rounded-xl hover:-translate-y-2 duration-100 hover:shadow-xl hover:drop-shadow-xl hover:shadow-yellow-500"
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
            {/* <p className="text-center mt-2">{media.title}</p> */}
          </div>
        ))}
      </div>
    </PageContainer>
  );
}

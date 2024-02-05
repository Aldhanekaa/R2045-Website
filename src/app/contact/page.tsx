import PageContainer from '@/components/PageContainer';
import Image from 'next/legacy/image';
import IDDESQ_HERO from '@/imgs/Excitement.jpeg';
import { inter } from '../fonts';

export default function ContactPage() {
  return (
    <main className={inter.className}>
      <div
        className=" relative bg-cover bg-center bg-white overflow-hidden h-screen lg:max-h-screen"
        style={{
          maxHeight: '700px',
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
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold relative text leading-relaxed animate-fade-down animate-once animate-duration-900 animate-normal">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-900">
                    R
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-700">
                    2045
                  </span>{' '}
                  Contacts
                </h1>
                <div className="relative ">
                  <h2 className="mt-8 text-2xl lg:text-4xl font-light leading-relaxed  animate-fade-down animate-once animate-duration-700 animate-normal">
                    Punya Pertanyaan? Inilah Kontak Lengkap Tim R2045
                  </h2>
                </div>
              </div>
            </div>
          </PageContainer>
        </div>
      </div>

      <section className="bg-yellow-500 pb-60">
        <PageContainer className="grid md:grid-cols-8 lg:grid-cols-9 py-12 box-border gap-4">
          <div className="col-span-8 md:col-span-4 lg:col-span-3 bg-slate-100 bg-gradient-to-r px-6 py-6 rounded-lg">
            <h2 className="font-semibold text-xl text-slate-800">
              R2045 Team Contact
            </h2>
            <p className="mt-2 hover:underline break-words">
              <a href="mailto:team@r2045.org">team@r2045.org</a>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-3 bg-slate-100 bg-gradient-to-r px-6 py-6 rounded-lg">
            <h2 className="font-semibold text-xl text-slate-800">Team Coach</h2>
            <hr className="my-4" />

            <p className="mt-2 text-lg font-medium">A. Riza Wahono</p>

            <p className="mt-2 hover:underline">
              <a href="mailto:riza.wahono@technonatura.sch.id">
                riza.wahono@technonatura.sch.id
              </a>
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-3 bg-slate-100 bg-gradient-to-r px-6 py-6 rounded-lg">
            <h2 className="font-semibold text-xl text-slate-800">
              Team Public Relation
            </h2>
            <hr className="my-4" />

            <p className="mt-2 text-lg font-medium">Aldhaneka A. I.</p>

            <p className="mt-2 hover:underline">
              <a href="mailto:aldhanekai@gmail.com">aldhanekai@gmail.com</a>
            </p>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}

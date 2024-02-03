import PageContainer from './PageContainer';

export default function PastExperiences() {
  return (
    <section className=" pb-60 relative">
      <PageContainer>
        <div className=" md:px-40 lg:px-60 w-full">
          <h4 className=" text-center text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-300 mb-3">
            Robotic Experiences
          </h4>
          <h5 className="text-center text-slate-100 text-lg text-pretty md:text-2xl mt-6">
            Anggota tim R2045 memiliki 8 anggota aktif untuk mengikuti kegiatan
            FIRST Tech Challenge 2023-2024, mereka terdiri dari 4 pelajar SMA
            dan 4 pelajar SMP.
          </h5>
        </div>

        <div className="grid snap-x scroll-pl-6  grid-cols-none auto-cols-[10rem] grid-flow-col gap-4 overflow-x-auto scroll-smooth gap-x-6 mt-20 gap-y-8 "></div>
      </PageContainer>
    </section>
  );
}

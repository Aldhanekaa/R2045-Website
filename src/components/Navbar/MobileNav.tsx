import PageContainer from '../PageContainer';

export function MobileNavChildren({
  childrens,
  active,
}: {
  active?: boolean;
  childrens?: Array<{ text: string; link: string; detail?: string }>;
}) {
  return childrens?.map((children, i) => (
    <a href={children.link} key={i}>
      <div className="border-b-2 mb-4 py-3 px-2 cursor-pointer hover:bg-slate-100">
        <h5>{children.text}</h5>
      </div>
    </a>
  ));
}

export default function MobileNav({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  if (active) {
    return (
      <div className="w-full  text-slate-900 top-0 absolute h-screen box-border overflow-auto pb-20 pt-28 bg-slate-50 animate-fade-down animate-once animate-normal backdrop-blur-xl z-0">
        <div className=" w-full">
          <PageContainer className="pt-12">{children}</PageContainer>
        </div>
      </div>
    );
  }

  return <></>;
}

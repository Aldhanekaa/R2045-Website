import Link from 'next/link';
import { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';

export function NavbarChildren({
  childrens,
  active,
}: {
  active: boolean;
  childrens?: Array<{ text: string; link: string; detail?: string }>;
}) {
  return (
    <div
      className={`${
        active
          ? 'block animate-fade-down animate-once animate-normal'
          : 'hidden'
      } shadow-xl rounded-xl absolute w-60 py-4 z-30 -left-2 bg-white border-2 border-slate-50  backdrop-blur-3xl  cursor-pointer`}
    >
      <div className="w-full h-full relative py-4 ">
        <div
          className="absolute w-6 h-4 bg-white -top-8 left-3"
          style={{
            clipPath: 'polygon(50% 0, 0% 100%, 100% 100%)',
          }}
        ></div>
        {childrens?.map((child, i) => (
          <div
            className="mb-2 cursor-pointer hover:bg-slate-50 px-2 py-2"
            key={i}
          >
            <a href={child.link} className="text-lg">
              {child.text}
            </a>
            <p className="text-slate-700 font-normal">{child.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NavbarItemText({
  children,
  childrens,
  end,
  link = '',
  textColorBlack,
  bigFont,
}: {
  children: string;
  end?: boolean;
  link?: string;
  childrens?: Array<{ text: string; link: string; detail?: string }>;
  textColorBlack?: boolean;
  bigFont?: boolean;
}) {
  const [childrenActive, setChildrenActive] = useState<boolean>(() => false);
  function onMouseEnter() {
    setChildrenActive(true);
  }
  function onMouseLeave() {
    setChildrenActive(false);
  }

  return (
    <div
      className={`${end ? '' : 'mr-4 lg:mr-10'}  relative h-full font-normal`}
      onMouseLeave={onMouseLeave}
    >
      <Link href={link}>
        <div
          className="w-full h-full flex items-center cursor-pointer hover:underline decoration-slate-200"
          onMouseEnter={onMouseEnter}
        >
          <h6
            className={`${
              bigFont ? 'lg:text-lg text-md xl:text-xl' : ' text-xs lg:text-sm'
            }  text-end ${textColorBlack ? 'text-slate-800' : 'auto'}`}
          >
            {children}{' '}
            {childrens && (
              <div className="inline-block">
                {' '}
                {childrenActive ? <FaCaretUp /> : <FaCaretDown />}
              </div>
            )}{' '}
          </h6>
        </div>
      </Link>{' '}
      {childrens && (
        <NavbarChildren active={childrenActive} childrens={childrens} />
      )}
    </div>
  );
}

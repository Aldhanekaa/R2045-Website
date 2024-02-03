import { CSSProperties } from 'react';

export default function PageContainer({
  children,
  className,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`w-full mx-auto xl:container  px-6 md:px-6  ${className}`}
    >
      {/* <div
        style={{
          maxWidth: '1200px',
        }}
      > */}
      {children}
      {/* </div> */}
    </div>
  );
}

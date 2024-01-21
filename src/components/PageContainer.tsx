export default function PageContainer({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`w-full mx-auto xl:container  px-6 md:px-6  ${className}`}>
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

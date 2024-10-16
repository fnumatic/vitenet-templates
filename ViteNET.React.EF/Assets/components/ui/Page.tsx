interface PageProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export const Page = ({ title,className, children }: PageProps) => {
  return (
    <div className={`grid h-full w-full  overflow-hidden place-items-center justify-items-center p-6 py-8 sm:p-8 lg:p-12  ${className}`}>
      <h3 className='text-lg/7 font-semibold  text-gray-900 sm:text-base/7'>{title}</h3>
      {children}
    </div>
  );
};

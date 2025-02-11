import { ReactNode } from 'react';

export const NavLayout = ({
  navContent,
  content,
}: {
  navContent: ReactNode;
  content: ReactNode;
}) => {
  return (
    <div className='grid grid-cols-[auto_1fr] w-full'>
      <nav className='p-4 flex border-r-2 border-sky-500 h-screen overflow-auto w-72'>
        {navContent}
      </nav>
      <div className='p-4'>{content}</div>
    </div>
  );
};

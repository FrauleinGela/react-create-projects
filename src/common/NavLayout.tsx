import { ReactNode } from 'react';

export const NavLayout = ({
  navContent,
  content,
}: {
  navContent: ReactNode;
  content: ReactNode;
}) => {
  return (
    <div className='flex'>
      <nav className='p-4 flex border-r-2 border-sky-500 min-w-72 w-72 h-screen overflow-auto'>
        {navContent}
      </nav>
      <div className='p-4 flex overflow-auto'>{content}</div>
    </div>
  );
};

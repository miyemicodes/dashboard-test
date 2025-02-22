'use client';

import Sidebar from '@/components/Sidebar';
import { usePagesContext } from '@/store/pages-context';

export default function Home() {
  const { activePage: ActivePage } = usePagesContext();

  return (
    <div className='w-full flex flex-row h-screen font-inter divide-x-2 divide-[#e0e0e0]'>
      <Sidebar />
      <div className='overflow-auto no-scrollbar flex-1'>
        <ActivePage />
      </div>
    </div>
  );
}

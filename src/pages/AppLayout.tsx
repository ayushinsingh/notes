import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import Search from '../components/search/Search';
import Home from './Home';

const AppLayout: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("All Notes");
  return (
    <div className='min-h-screen grid grid-cols-[20%_1fr]'>
      <SideBar selected={selected} setSelected={setSelected} />
      <main className='flex flex-col'>
        <div className='flex flex-row justify-between items-center border border-gray-200 px-6 py-4'>
          <h1 className='font-bold text-2xl'>All Notes</h1>
          <div className='flex flex-row items-center gap-4'>
            <Search />
            <img src='/Setting.svg' alt='Settings' className='h-6 w-6'/>
          </div>
        </div>
        <Home type={selected}/>
      </main>
    </div>
  )
}

export default AppLayout

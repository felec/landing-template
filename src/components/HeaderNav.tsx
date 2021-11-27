import { useState } from 'react';
import { MdKeyboardArrowDown, MdAccountCircle } from 'react-icons/md';

interface NavItem {
  width: number;
  height: number;
  x: number;
  title: string;
}

export const HeaderNav = () => {
  const [navIndex, setNavIndex] = useState(0);

  const navItems = [
    { width: 490, height: 280, x: 0, title: 'Products' },
    { width: 390, height: 266, x: 100, title: 'Features' },
    { width: 260, height: 296, x: 200, title: 'Resources' },
    { width: 290, height: 256, x: 300, title: 'About' },
  ];

  return (
    <nav className='flex flex-col w-3/5 ml-16'>
      <ul className='flex justify-evenly items-center text-md font-semibold text-white'>
        {navItems.map((n, i) => {
          return (
            <li
              key={n.title}
              onMouseEnter={() => setNavIndex(i)}
              className='relative flex items-center hover:opacity-50'
            >
              <h3 className='pr-1'>{n.title}</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
          );
        })}
        <li className='flex items-center hover:opacity-50 cursor-pointer'>
          <h3 className='pr-1'>Partners</h3>
        </li>
        <li className='cursor-pointer'>
          <MdAccountCircle size={28} />
        </li>
      </ul>

      <HeaderBox info={navItems[navIndex]} />
    </nav>
  );
};

const HeaderBox = ({ info }: { info: NavItem }) => {
  return (
    <div className='relative'>
      <div className='absolute top-2 left-10 h-72 w-96 bg-white shadow-md rounded-md'></div>

      <div className='absolute top-4 left-12'></div>

      {/* <div className='absolute top-4 left-12'>bjioew4yt</div>

      <div className='absolute top-4 left-12'>cjpoiqwe</div>

      <div className='absolute top-4 left-12'>dnkjrewoiq</div> */}
    </div>
  );
};

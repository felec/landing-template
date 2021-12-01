import { useState } from 'react';
import {
  MdKeyboardArrowDown,
  MdAccountCircle,
  MdAdminPanelSettings,
  MdAdsClick,
  MdAssessment,
  MdInfoOutline,
  MdPeopleAlt,
} from 'react-icons/md';

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
      <div className='absolute top-2 left-10 h-60 w-96 bg-white shadow-md rounded-md'></div>

      {/* <div className='products absolute top-2 left-10 px-4 h-60 w-96 flex flex-col justify-evenly'>
        <div className='flex cursor-pointer'>
          <div className='h-12 w-12 flex items-center justify-center bg-blue-300 rounded-full'>
            <MdAdminPanelSettings size={30} color='#fff' />
          </div>
          <div className='flex flex-col ml-4'>
            <h3 className='text-lg font-bold text-blue-500'>Recusandae</h3>
            <p className='text-sm font-light text-gray-400'>
              Laboriosam obcaecati ipsam explicabo.
            </p>
          </div>
        </div>

        <div className='flex cursor-pointer'>
          <div className='h-12 w-12 flex items-center justify-center bg-green-300 rounded-full'>
            <MdAdsClick size={30} color='#fff' />
          </div>
          <div className='flex flex-col ml-4'>
            <h3 className='text-lg font-bold text-green-500'>Laudantium</h3>
            <p className='text-sm font-light text-gray-400'>
              Animi laudantium quae ea sit.
            </p>
          </div>
        </div>

        <div className='flex cursor-pointer'>
          <div className='h-12 w-12 flex items-center justify-center bg-indigo-300 rounded-full'>
            <MdAssessment size={30} color='#fff' />
          </div>
          <div className='flex flex-col ml-4'>
            <h3 className='text-lg font-bold text-indigo-500'>Architecto</h3>
            <p className='text-sm font-light text-gray-400'>
              Praesentium adipisci rerum nihil.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className='features absolute top-2 left-10 px-12 py-4 h-60 w-96 flex flex-col justify-evenly'>
        <div className='flex flex-col mb-4'>
          <h3 className='text-2xl font-bold text-purple-600'>Architecto</h3>
          <p className='text-sm font-light text-gray-400'>
            Praesentium adipisci rerum nihil adipisicing.
          </p>
        </div>

        <div className='flex justify-between h-1/2'>
          <div className='flex flex-col text-sm justify-between'>
            <h3 className='text-gray-400 uppercase'>Get Started</h3>
            <h4 className='text-purple-500 hover:opacity-50 cursor-pointer'>
              aspernatur
            </h4>
            <h4 className='text-purple-500 hover:opacity-50 cursor-pointer'>
              necessitatibus
            </h4>
            <h4 className='text-purple-500 hover:opacity-50 cursor-pointer'>
              deleniti
            </h4>
          </div>

          <div className='flex flex-col text-sm justify-between'>
            <h3 className='text-gray-400 uppercase'>Help</h3>
            <h4 className='text-purple-500 hover:opacity-50 cursor-pointer'>
              cupiditate
            </h4>
            <h4 className='text-purple-500 hover:opacity-50 cursor-pointer'>
              blanditiis
            </h4>
            <h4 className='text-purple-500 hover:opacity-50 cursor-pointer'>
              assumenda
            </h4>
          </div>
        </div>
      </div> */}

      <div className='resources absolute top-2 left-10 px-4 h-60 w-96 flex flex-col justify-evenly'>
        <div className='flex'>
          <MdInfoOutline size={20} color={'purple'} />
          <h3>Reprehenderit</h3>
        </div>

        <div className='flex'>
          <MdPeopleAlt size={20} color={'purple'} />
          <h3>Temporibus</h3>
        </div>
      </div>

      {/* <div className='absolute top-4 left-12'>dnkjrewoiq</div> */}
    </div>
  );
};

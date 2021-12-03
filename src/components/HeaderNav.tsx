/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MdAccountCircle,
  MdAdminPanelSettings,
  MdAddModerator,
  MdAdsClick,
  MdAssessment,
  MdBusinessCenter,
  MdInfo,
  MdKeyboardArrowDown,
  MdPeopleAlt,
  MdOutlineImportContacts,
} from 'react-icons/md';

interface NavItem {
  width: number;
  height: number;
  x: number;
  title: string;
  index: number;
}

export const HeaderNav = () => {
  const [navIndex, setNavIndex] = useState(-1);

  const navItems = [
    { width: 440, height: 240, x: 45, title: 'Products', index: 0 },
    { width: 340, height: 240, x: 133, title: 'Features', index: 1 },
    { width: 200, height: 240, x: 198, title: 'About', index: 2 },
  ];

  const handleNavExit = () => setNavIndex(-1);

  return (
    <div onMouseLeave={handleNavExit} className='relative w-2/5'>
      <nav>
        <ul className='flex justify-evenly items-center text-md font-semibold text-white'>
          {navItems.map((n, i) => {
            return (
              <li
                key={n.title}
                onMouseEnter={() => setNavIndex(i)}
                className='relative flex items-center hover:opacity-50 px-4'
              >
                <h3 className='pr-1'>{n.title}</h3>
                <MdKeyboardArrowDown opacity={0.5} size={20} />
              </li>
            );
          })}
          <li className='flex items-center hover:opacity-50 cursor-pointer'>
            <h3 className='mx-4'>Partners</h3>
          </li>
          <li className='cursor-pointer ml-4'>
            <MdAccountCircle size={28} />
          </li>
        </ul>
      </nav>

      {navIndex !== -1 && <HeaderBox info={navItems[navIndex]} />}
    </div>
  );
};

const HeaderBox = ({ info }: { info: NavItem }) => {
  return (
    <div className='relative -top-4 left-0'>
      <motion.div
        initial={{
          translateX: `${info.x}px`,
          scaleX: info.width / 384,
          scaleY: info.height / 240,
        }}
        animate={{
          translateX: `${info.x}px`,
          scaleX: info.width / 384,
          scaleY: info.height / 240,
          transition: { ease: 'easeOut' },
        }}
        className='absolute top-4 left-0 h-60 w-96 bg-white shadow-md rounded-md'
      ></motion.div>

      {renderNavContent(info)}
    </div>
  );
};

const renderNavContent = (info: NavItem) => {
  switch (info.index) {
    case 0:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear' } }}
          style={{ height: info.height, width: info.width }}
          className='absolute top-2 left-8 px-4 flex flex-col justify-evenly'
        >
          <div className='flex cursor-pointer'>
            <div className='h-12 w-12 flex items-center justify-center bg-blue-300 rounded-full'>
              <MdAdminPanelSettings size={30} color='#fff' />
            </div>
            <div className='flex flex-col ml-4'>
              <h3 className='text-lg font-bold text-blue-500'>Recusandae</h3>
              <p className='text-sm font-light text-gray-600'>
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
              <p className='text-sm font-light text-gray-600'>
                Animi laudantium quae ea sit. Lorem ipsum dolor.
              </p>
            </div>
          </div>

          <div className='flex cursor-pointer'>
            <div className='h-12 w-12 flex items-center justify-center bg-indigo-300 rounded-full'>
              <MdAssessment size={30} color='#fff' />
            </div>
            <div className='flex flex-col ml-4'>
              <h3 className='text-lg font-bold text-indigo-500'>Architecto</h3>
              <p className='text-sm font-light text-gray-600'>
                Praesentium adipisci rerum nihil.
              </p>
            </div>
          </div>
        </motion.div>
      );

    case 1:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear' } }}
          style={{ height: info.height, width: info.width }}
          className='absolute top-2 left-40 px-12 py-4 flex flex-col justify-evenly'
        >
          <div className='flex flex-col mb-4'>
            <h3 className='text-2xl font-bold text-purple-600'>Architecto</h3>
            <p className='text-sm font-light text-gray-600'>
              Praesentium adipisci rerum adipis.
            </p>
          </div>

          <div className='flex justify-between h-1/2'>
            <div className='flex flex-col text-sm justify-between'>
              <h3 className='text-gray-500 uppercase'>Get Started</h3>
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
              <h3 className='text-gray-500 uppercase'>Help</h3>
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
        </motion.div>
      );

    case 2:
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear' } }}
          style={{ height: info.height, width: info.width }}
          className='absolute text-sm top-2 left-72 px-4 flex flex-col justify-evenly'
        >
          <a href='#' className='flex items-center hover:opacity-75'>
            <MdInfo size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Reprehenderit
            </h3>
          </a>

          <a href='#' className='flex items-center hover:opacity-75'>
            <MdPeopleAlt size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Temporibus
            </h3>
          </a>

          <a href='#' className='flex items-center hover:opacity-75'>
            <MdOutlineImportContacts size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Consectetur
            </h3>
          </a>

          <a href='#' className='flex items-center hover:opacity-75'>
            <MdAddModerator size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Mollitia
            </h3>
          </a>

          <a href='#' className='flex items-center hover:opacity-75'>
            <MdBusinessCenter size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Nesciunt dicta
            </h3>
          </a>
        </motion.div>
      );

    default:
      break;
  }
};

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
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
}

export const HeaderNav = ({ inView }: { inView: boolean }) => {
  const [navIndex, setNavIndex] = useState(-1);

  const navItems = [
    { width: 440, height: 240, x: -140, title: 'Products' },
    { width: 340, height: 240, x: 5, title: 'Features' },
    { width: 200, height: 240, x: 130, title: 'About' },
    { width: 370, height: 240, x: 255, title: 'My Account' },
  ];

  const handleNavLeave = () => setNavIndex(-1);

  return (
    <div onMouseLeave={handleNavLeave} className='relative w-2/5'>
      <nav>
        <ul className={`flex justify-evenly items-center text-md`}>
          {navItems.map((n, i) => {
            return (
              <li
                key={n.title}
                onMouseEnter={() => setNavIndex(i)}
                style={{ margin: inView ? '1rem 0' : '1.5rem 0' }}
                className='relative flex items-center hover:opacity-50 px-4'
              >
                <h3 className='pr-1'>{n.title}</h3>
                <MdKeyboardArrowDown opacity={0.5} size={20} />
              </li>
            );
          })}
        </ul>
      </nav>

      {navIndex !== -1 && <NavDropDown info={navItems[navIndex]} />}
    </div>
  );
};

const boxVariants = {
  hidden: (info: NavItem) => ({
    translateX: `${info.x}px`,
    scaleX: info.width / 384,
    scaleY: info.height / 240,
  }),
  visible: (info: NavItem) => ({
    translateX: `${info.x}px`,
    scaleX: info.width / 384,
    scaleY: info.height / 240,
    transition: { ease: 'easeOut' },
  }),
};

const NavDropDown = ({ info }: { info: NavItem }) => {
  return (
    <div className='absolute right-0 left-0'>
      <motion.div
        variants={boxVariants}
        initial='hidden'
        animate='visible'
        custom={info}
        style={{ position: 'absolute', top: '1px', left: '0' }}
        className='h-60 w-96 bg-white border border-gray-200 shadow-xl rounded-md'
      ></motion.div>

      {renderNavContent(info)}
    </div>
  );
};

const renderNavContent = (info: NavItem) => {
  switch (info.title) {
    case 'Products':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear' } }}
          style={{
            height: info.height,
            width: info.width,
            position: 'absolute',
            top: '.25rem',
            left: '-10rem',
          }}
          className='px-4 flex flex-col justify-evenly'
        >
          <div className='flex cursor-pointer hover:opacity-70'>
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

          <div className='flex cursor-pointer hover:opacity-70'>
            <div className='h-12 w-12 flex items-center justify-center bg-green-300 rounded-full'>
              <MdAdsClick size={30} color='#fff' />
            </div>
            <div className='flex flex-col ml-4'>
              <h3 className='text-lg font-bold text-green-500'>Laudantium</h3>
              <p className='text-sm font-light text-gray-600'>
                Animi laudantium quae, ea sit Lorem ipsum.
              </p>
            </div>
          </div>

          <div className='flex cursor-pointer hover:opacity-70'>
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

    case 'Features':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear' } }}
          style={{
            height: info.height,
            width: info.width,
            position: 'absolute',
            top: '.25rem',
            left: '1.5rem',
          }}
          className='px-12 py-4 flex flex-col justify-evenly'
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

    case 'About':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear' } }}
          style={{
            height: info.height,
            width: info.width,
            position: 'absolute',
            top: '.25rem',
            left: '14rem',
          }}
          className='text-sm px-4 flex flex-col justify-evenly'
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

    case 'My Account':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear' } }}
          style={{
            height: info.height,
            width: info.width,
            position: 'absolute',
            top: '.25rem',
            left: '16.5rem',
          }}
          className='text-sm px-4 flex flex-col justify-evenly items-center'
        >
          <h3 className='text-xl font-bold text-purple-700'>Manage Account</h3>

          <button className='w-5/6 bg-white text-purple-800 font-bold hover:opacity-75 border-2 border-purple-800 rounded-md py-3'>
            Log In
          </button>
          <button className='w-5/6 bg-purple-600 font-bold text-white hover:bg-purple-700 border-purple-800 rounded-md py-3'>
            Contact Sales
          </button>
        </motion.div>
      );

    default:
      break;
  }
};

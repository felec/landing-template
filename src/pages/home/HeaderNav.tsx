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

const navItems = [
  { width: 440, height: 240, x: -140, title: 'Products' },
  { width: 340, height: 240, x: -25, title: 'Features' },
  { width: 200, height: 240, x: 100, title: 'About' },
  { width: 300, height: 240, x: 195, title: 'My Account' },
];

export const HeaderNav = ({ inView }: { inView: boolean }) => {
  const [navIndex, setNavIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLeave = () => setNavIndex(-1);

  const handleMenuClick = () => setIsOpen(!isOpen);

  return (
    <div onMouseLeave={handleNavLeave} className='relative'>
      <nav>
        {/* Mobile Backdrop*/}
        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            translateX: isOpen ? '0%' : '105%',
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          }}
          style={{
            height: '100vh',
            width: '100vw',
            backgroundColor: '#fff',
          }}
          className='lg:hidden fixed top-0 right-0 overflow-y-scroll overflow-x-hidden lg:overflow-auto'
        >
          {renderNavContent(navItems[0], true)}
        </motion.div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            translateY: isOpen ? -20 : 0,
            translateX: isOpen ? 20 : 0,
            transition: {
              type: 'tween',
            },
          }}
          onClick={handleMenuClick}
          className='lg:hidden flex flex-col justify-evenly h-8 cursor-pointer'
        >
          <motion.div
            animate={{
              translateY: isOpen ? 8 : 0,
              rotate: isOpen ? [0, 0, -45] : 0,
              transition: {
                duration: 0.1,
                ease: 'linear',
              },
            }}
            style={{
              height: '2px',
              width: '20px',
              backgroundColor: inView && !isOpen ? '#fff' : '#000',
            }}
          ></motion.div>
          <motion.div
            animate={{
              opacity: isOpen ? 0 : 1,
              transition: {
                duration: 0.1,
                ease: 'linear',
              },
            }}
            style={{
              height: '2px',
              width: '20px',
              backgroundColor: inView && !isOpen ? '#fff' : '#000',
            }}
          ></motion.div>
          <motion.div
            animate={{
              translateY: isOpen ? -8 : 0,
              rotate: isOpen ? [0, 0, 45] : 0,
              transition: {
                duration: 0.1,
                ease: 'linear',
              },
            }}
            style={{
              height: '2px',
              width: '20px',
              backgroundColor: inView && !isOpen ? '#fff' : '#000',
            }}
          ></motion.div>
        </motion.div>

        {/* Lg nav menu */}
        <ul className={`hidden lg:flex justify-evenly items-center text-md`}>
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

const renderNavContent = (info: NavItem, isMobile = false) => {
  return (
    <div className='flex flex-col-reverse lg:block  p-4'>
      {(isMobile || info.title === 'Products') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear', delay: 0.1 } }}
          style={{
            height: isMobile ? '100%' : info.height,
            width: isMobile ? '100%' : info.width,
            top: '.25rem',
            left: '-10rem',
          }}
          className='lg:absolute lg:px-4 pl-2 lg:pl-4 flex flex-col items-center lg:items-start justify-evenly mt-4 lg:mt-0'
        >
          <div className='flex cursor-pointer hover:opacity-70'>
            <div className='h-12 w-12 flex items-center justify-center bg-blue-300 rounded-full'>
              <MdAdminPanelSettings size={30} color='#fff' />
            </div>
            <div className='flex flex-col ml-4'>
              <h3 className='text-base lg:text-lg font-bold text-blue-500'>
                Recusandae
              </h3>
              <p className='w-56 lg:w-full text-sm font-light text-gray-600'>
                Laboriosam obcaecati ipsam explicabo.
              </p>
            </div>
          </div>

          <div className='flex cursor-pointer hover:opacity-70 my-4 lg:my-0'>
            <div className='h-12 w-12 flex items-center justify-center bg-green-300 rounded-full'>
              <MdAdsClick size={30} color='#fff' />
            </div>
            <div className='flex flex-col ml-4'>
              <h3 className='text-base lg:text-lg font-bold text-green-500'>
                Laudantium
              </h3>
              <p className='w-56 lg:w-full text-sm font-light text-gray-600'>
                Animi laudantium quae, ea sit lorem ipsum.
              </p>
            </div>
          </div>

          <div className='flex cursor-pointer hover:opacity-70'>
            <div className='h-12 w-12 flex items-center justify-center bg-indigo-300 rounded-full'>
              <MdAssessment size={30} color='#fff' />
            </div>
            <div className='flex flex-col ml-4'>
              <h3 className='text-base lg:text-lg font-bold text-indigo-500'>
                Voluptates
              </h3>
              <p className='w-56 lg:w-full text-sm font-light text-gray-600'>
                Praesentium adipisci rerum nihil.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div
        style={{ height: '1px' }}
        className='w-full lg:hidden bg-gray-300 my-2'
      ></div>

      {(isMobile || info.title === 'Features') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear', delay: 0.1 } }}
          style={{
            height: isMobile ? '100%' : info.height,
            width: isMobile ? '100%' : info.width,
            top: '.25rem',
            left: '3rem',
          }}
          className='lg:absolute my-4 lg:my-0 pl-4 lg:pl-0 lg:px-12 lg:py-4 flex flex-col items-center lg:items-start lg:justify-evenly'
        >
          <div className='flex flex-col items-center lg:items-start mb-4'>
            <h3 className='text-lg lg:text-2xl font-bold text-purple-600'>
              Architecto
            </h3>
            <p className='text-sm font-light text-gray-600'>
              Praesentium adipisci rerum adipis.
            </p>
          </div>

          <div className='flex lg:justify-between lg:h-1/2'>
            <div className='flex flex-col justify-between gap-2 text-sm'>
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

            <div className='flex flex-col text-sm justify-between ml-8'>
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
      )}

      <div
        style={{ height: '1px' }}
        className='w-full lg:hidden bg-gray-300 my-2'
      ></div>

      {(isMobile || info.title === 'About') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear', delay: 0.1 } }}
          style={{
            height: isMobile ? '100%' : info.height,
            width: isMobile ? '100%' : info.width,
            top: '.25rem',
            left: '12rem',
          }}
          className='flex flex-col items-center justify-evenly gap-2 lg:gap-0 text-xs lg:text-sm my-4 lg:my-0 ml-4 lg:ml-0 lg:px-4'
        >
          <a href='#' className='flex items-center w-40 hover:opacity-75'>
            <MdInfo size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Reprehenderit
            </h3>
          </a>

          <a href='#' className='flex items-center w-40 hover:opacity-75'>
            <MdPeopleAlt size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Temporibus
            </h3>
          </a>

          <a href='#' className='flex items-center w-40 hover:opacity-75'>
            <MdOutlineImportContacts size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Consectetur
            </h3>
          </a>

          <a href='#' className='flex items-center w-40 hover:opacity-75'>
            <MdAddModerator size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Mollitia
            </h3>
          </a>

          <a href='#' className='flex items-center w-40 hover:opacity-75'>
            <MdBusinessCenter size={20} color={'#6C63FF'} />
            <h3 className='text-blue-600 ml-2 tracking-wider uppercase '>
              Nesciunt dicta
            </h3>
          </a>
        </motion.div>
      )}

      <div
        style={{ height: '.5px' }}
        className='w-full lg:hidden bg-gray-300 my-2'
      ></div>

      {(isMobile || info.title === 'My Account') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { ease: 'linear', delay: 0.1 } }}
          style={{
            height: isMobile ? '100%' : info.height,
            width: isMobile ? '100%' : info.width,
            top: '.25rem',
            left: '15rem',
          }}
          className='lg:absolute text-xs lg:text-sm my-4 lg:my-0 px-4 flex flex-col justify-evenly items-center'
        >
          <h3 className='text-base lg:text-xl font-bold text-purple-700 mb-4 lg:mb-0'>
            Manage Account
          </h3>

          <div className='flex lg:flex-col justify-center lg:justify-start w-full lg:w-min'>
            <button className='h-12 w-36 lg:w-44 bg-white text-purple-800 font-bold hover:opacity-75 border-2 border-purple-800 rounded-md py-3'>
              Log In
            </button>
            <button className='h-12 w-36 lg:w-44 ml-4 lg:ml-0 bg-purple-600 font-bold text-white hover:bg-purple-700 border-purple-800 rounded-md lg:mt-2 py-3'>
              Contact Support
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

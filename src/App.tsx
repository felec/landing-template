/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import { MdKeyboardArrowDown, MdAccountCircle } from 'react-icons/md';

import { MapDots } from './components/MapDots';
import { HeaderCardList } from './components/HeaderCardList';
import { HeaderLogo } from './components/HeaderLogo';
import Background from './assets/polygon_bg.svg';
import { ReactComponent as Map } from './assets/map.svg';

const langVariants = {
  hidden: {
    display: 'none',
    translateY: 20,
    opacity: 0,
  },
  hover: {
    display: 'flex',
    translateY: 10,
    opacity: 1,
    transition: {
      ease: 'easeOut',
    },
  },
};

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
      }}
      className='relative flex flex-col h-full w-full'
    >
      <div className='flex justify-between items-center px-16 py-2 z-20 bg-gray-200'>
        <div></div>

        <a href='#' className='flex text-sm'>
          <button
            style={{ fontSize: '10px' }}
            className='text-white bg-purple-600 px-2 rounded-xl'
          >
            NEWS
          </button>
          <p className='pl-2 font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </a>

        <div className='relative flex items-center text-xs font-thin text-gray-600'>
          <a href='#' className='hover:text-purple-600'>
            Docs
          </a>
          <a href='#' className='mx-4 hover:text-purple-600'>
            Support
          </a>
          <div className='self-stretch border border-gray-500 mr-4'></div>

          <p className='opacity-0'>______</p>
          <motion.div
            initial='hidden'
            whileHover='hover'
            className='flex flex-col w-24'
            style={{ position: 'absolute', top: '-1px', right: '-54px' }}
          >
            <div className='flex items-center hover:text-purple-600 cursor-pointer'>
              <p>English</p>
              <MdKeyboardArrowDown size={20} />
            </div>

            <motion.div
              variants={langVariants}
              className='flex flex-col items-center justify-evenly h-40 px-4 text-sm text-gray-500 bg-gray-100 border rounded-lg'
            >
              <a href='#' className='hover:text-purple-600'>
                Português
              </a>
              <a href='#' className='hover:text-purple-600'>
                Español
              </a>
              <a href='#' className='hover:text-purple-600'>
                简体中文
              </a>
              <a href='#' className='hover:text-purple-600'>
                Deutsch
              </a>
              <a href='#' className='hover:text-purple-600'>
                日本語
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className='flex justify-between items-center px-16 pt-4'>
        <div className='flex items-center text-3xl text-white font-light font-mono'>
          <HeaderLogo />
          <h2 className='ml-2'>Company</h2>
        </div>

        <nav className='w-3/5 ml-16'>
          <ul className='flex justify-evenly items-center text-md font-semibold text-white'>
            <li className='flex items-center'>
              <h3 className='pr-1'>Products</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center'>
              <h3 className='pr-1'>Features</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center'>
              <h3 className='pr-1'>Resources</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center'>
              <h3 className='pr-1'>About</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center cursor-pointer'>
              <h3 className='pr-1'>Partners</h3>
            </li>
            <li className='cursor-pointer'>
              <MdAccountCircle size={28} />
            </li>
          </ul>
        </nav>
      </div>

      <section className='flex flex-col items-center mt-28'>
        <h1 className='text-5xl font-bold text-white'>
          Ducimus Consequntur Delectus
        </h1>

        <h2 className='text-2xl font-thin text-gray-300 my-8'>
          Facilis voluptas praesentium doloribus voluptatem totam rerum velit
          dicta maxime.
        </h2>

        <div className='flex items-center'>
          <form>
            <input
              className='h-14 focus:outline-none focus:border-transparent rounded-md pl-4'
              type='text'
              placeholder='Email Address'
            />
            <input
              className='h-14 focus:outline-none focus:border-transparent rounded-md pl-4 mx-4'
              type='text'
              placeholder='Password'
            />
          </form>

          <button className='bg-purple-800 hover:bg-purple-700 rounded-md text-white font-bold px-8 py-4'>
            Create Account
          </button>
        </div>
      </section>

      <section className='flex justify-evenly mt-28 px-12'>
        <HeaderCardList />
      </section>

      <section className='flex flex-col items-center mt-28'>
        <h2 className='flex text-4xl font-bold'>
          Provident illo, sit dolorum culpa{' '}
          <span className='text-lg self-start'>®</span>
        </h2>
        <span className='text-2xl font-thin text-gray-500 py-8'>
          10 locations worldwide.
        </span>

        <div className='relative h-5/6 w-5/6'>
          <MapDots />
          <Map />
        </div>
      </section>
    </div>
  );
}

export default App;

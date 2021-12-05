/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Header } from './components/Header';
import { HeaderCardList } from './components/HeaderCardList';
import { MapSection } from './components/MapSection';
import { SignUpForm } from './components/SignUpForm';
import Background from './assets/polygon_bg.svg';

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
        fontFamily: 'Open Sans, sans-serif',
      }}
      className='relative flex flex-col h-full w-full'
    >
      <div className='flex justify-between items-center px-16 py-2 z-20 bg-gray-200'>
        <div></div>

        <a href='#' className='flex text-sm'>
          <div
            style={{ fontSize: '10px' }}
            className='text-white bg-purple-600 px-2 rounded-xl'
          >
            NEWS
          </div>
          <p className='pl-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </a>

        <div className='relative flex items-center text-xs font-thin text-gray-900'>
          <a href='#' className='hover:text-purple-600'>
            Docs
          </a>
          <a href='#' className='mx-4 hover:text-purple-600'>
            Support
          </a>
          <div className='self-stretch border border-gray-400 mr-4'></div>

          <p className='opacity-0'>______</p>
          <motion.div
            initial='hidden'
            whileHover='hover'
            className='flex flex-col w-24'
            style={{ position: 'absolute', top: '-1px', right: '-54px' }}
          >
            <div className='flex items-center hover:text-purple-600 cursor-pointer'>
              <p>English</p>
              <MdKeyboardArrowDown size={20} opacity={0.5} />
            </div>

            <motion.div
              variants={langVariants}
              className='flex flex-col font-serif items-center justify-evenly h-40 px-4 text-sm text-gray-500 bg-gray-100 border rounded-lg'
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

      <Header />

      <section className='flex flex-col items-center mt-28'>
        <h1 className='text-5xl font-bold text-white'>
          Ducimus Consequntur Delectus
        </h1>

        <h2 className='text-2xl font-thin text-gray-300 my-8'>
          Facilis voluptas praesentium doloribus voluptatem totam rerum velit
          dicta maxime.
        </h2>

        <SignUpForm />
      </section>

      <section className='flex justify-evenly mt-28 px-12'>
        <HeaderCardList />
      </section>

      <MapSection />
    </div>
  );
}

export default App;

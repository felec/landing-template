/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { MapDots } from './components/MapDots';
import { HeaderCardList } from './components/HeaderCardList';
import { HeaderNav } from './components/HeaderNav';
import Background from './assets/polygon_bg.svg';
import { ReactComponent as Map } from './assets/map.svg';
import { ReactComponent as Logo } from './assets/company_logo.svg';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = (e: MouseEvent) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

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
          <button
            style={{ fontSize: '10px' }}
            className='text-white bg-purple-600 px-2 rounded-xl'
          >
            NEWS
          </button>
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

      <div className='flex items-center justify-evenly pt-4'>
        <div className='flex items-center text-3xl text-white font-light font-mono cursor-pointer'>
          <Logo />
          <h2 className='ml-2'>Company</h2>
        </div>

        <div className='w-20'></div>

        <HeaderNav />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='h-14 focus:outline-none focus:border-transparent rounded-md pl-4'
              type='text'
              placeholder='Email Address'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='h-14 focus:outline-none focus:border-transparent rounded-md pl-4 mx-4'
              type='text'
              placeholder='Password'
            />

            <button
              onClick={(e) => handleForm(e)}
              className='bg-purple-800 hover:bg-purple-700 rounded-md text-white font-bold px-8 py-4'
            >
              Create Account
            </button>
          </form>
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
        <p className='text-2xl font-thin text-gray-500 mt-8 mb-16'>
          10 locations worldwide
        </p>

        <div className='relative h-5/6 w-5/6'>
          <MapDots />
          <Map />
        </div>
      </section>
    </div>
  );
}

export default App;

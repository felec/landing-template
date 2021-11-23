import { MdKeyboardArrowDown, MdAccountCircle } from 'react-icons/md';

import { HeaderCanvas } from './components/HeaderCanvas';
import { HeaderLogo } from './components/HeaderLogo';

function App() {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <div className='absolute top-0 left-0 z-0'>
        <HeaderCanvas />
      </div>

      <div className='flex justify-between items-center px-16 py-2 z-10 bg-gray-300'>
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

        <div className='flex items-center text-xs font-thin text-gray-600'>
          <a href='#'>Docs</a>
          <a href='#' className='mx-4'>
            Support
          </a>
          <div className='self-stretch border border-gray-500 mr-4'></div>
          <div className='flex items-center cursor-pointer'>
            <p>English</p>
            <MdKeyboardArrowDown size={20} />
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center px-16 pt-4 z-10'>
        <div className='flex items-center text-3xl text-white font-light font-mono'>
          <HeaderLogo />
          <h2 className='ml-2'>Company</h2>
        </div>

        <nav className='w-3/5 ml-16'>
          <ul className='flex justify-evenly items-center text-md font-semibold text-white'>
            <li className='flex items-center cursor-pointer'>
              <h3 className='pr-1'>Products</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center cursor-pointer'>
              <h3 className='pr-1'>Features</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center cursor-pointer'>
              <h3 className='pr-1'>Resources</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center cursor-pointer'>
              <h3 className='pr-1'>Partners</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='flex items-center cursor-pointer'>
              <h3 className='pr-1'>About</h3>
              <MdKeyboardArrowDown opacity={0.5} size={20} />
            </li>
            <li className='cursor-pointer'>
              <MdAccountCircle size={28} />
            </li>
          </ul>
        </nav>
      </div>

      <section className='flex flex-col items-center mt-28 z-10'>
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
              placeholder='Email address'
            />
            <input
              className='h-14 focus:outline-none focus:border-transparent rounded-md pl-4 mx-4'
              type='text'
              placeholder='Password'
            />
          </form>

          <button className='bg-purple-600 hover:bg-purple-500 rounded-md text-white font-bold px-8 py-4'>
            Create Account
          </button>
        </div>
      </section>

      <div className='flex z-10 mt-28'>
        <div className='h-80 w-60 bg-gray-200 rounded-sm'></div>
      </div>
    </div>
  );
}

export default App;

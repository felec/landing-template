import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdFiberNew,
  MdKeyboardArrowDown,
  MdMediation,
  MdOutlineAddchart,
  MdOutlineAutoStories,
  MdOutlineFileDownloadDone,
  MdOutlineHistory,
  MdWbCloudy,
  MdWatchLater,
  MdLock,
  MdNotifications,
} from 'react-icons/md';
import { AiOutlineBarChart } from 'react-icons/ai';

import Dash1 from '../../assets/images/dash_1.jpg';
import Dash2 from '../../assets/images/dash_2.jpg';
import Dash3 from '../../assets/images/dash_3.jpg';

interface TabItem {
  title: string;
  icon: any;
  main: string;
  content: string;
}

export const TabsSection = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabsRef, tabsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const tabItems: TabItem[] = [
    {
      title: 'Provident animi ad',
      main: Dash1,
      icon: <MdOutlineAutoStories size={35} color='#7933bf' />,
      content: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Temporibus dolor velit, qui molestias cum dolore est dicta alias 
    explicabo excepturi quaerat.
    `,
    },
    {
      title: 'Ratione porro',
      main: Dash2,
      icon: <MdOutlineFileDownloadDone size={35} color='#7933bf' />,
      content: `
    Repudiandae inventore ad a ducimus. Nesciunt quidem tempore nemo hic illo
    impedit dignissimos enim deleniti rem ea unde eligendi.
    `,
    },
    {
      title: 'Inventore sequi',
      main: Dash3,
      icon: <MdOutlineAddchart size={35} color='#7933bf' />,
      content: `
    Eveniet optio quod maxime ratione, quos possimus aliquam ea porro animi
    omnis consectetur veniam molestiae nobis asperiores. Quae accusantium.
    `,
    },
  ];

  const handleTabClick = (i: number) => setTabIndex(i);

  return (
    <section
      ref={tabsRef}
      style={{ height: '110vh' }}
      className='relative flex flex-col my-20 overflow-hidden'
    >
      <div
        style={{ height: '30rem', width: '30rem' }}
        className='absolute top-36 -right-72 transform rotate-45 bg-purple-700 rounded-md'
      ></div>

      <div className='flex flex-col items-center self-center'>
        <h2 className='flex text-4xl font-bold'>Quasi adipisci</h2>
        <p className='text-2xl font-thin text-gray-500 mt-8 mb-16'>
          Neque eveniet minus cum nobis nisi.
        </p>
      </div>

      <div className='mx-24'>
        <div className='flex flex-col my-4'>
          {tabItems.map((t, i) => {
            return (
              <motion.div
                layout
                key={t.title}
                onClick={() => handleTabClick(i)}
                className='flex flex-col justify-center w-80 my-2 p-4 bg-white border border-gray-200 hover:border-purple-600 rounded-md cursor-pointer'
              >
                <motion.div layout className='flex items-center mb-2'>
                  <div className='p-1 rounded-md bg-gray-100'>{t.icon}</div>

                  <h3 className='text-lg font-medium ml-4'>{t.title}</h3>
                </motion.div>

                {tabIndex === i && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-base font-thin text-gray-600 overflow-hidden'
                  >
                    {t.content}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
        {tabsInView && renderTabImages(tabIndex)}
      </div>
    </section>
  );
};

const dashVariants = {
  hidden: {
    opacity: 0,
    translateY: 100,
  },
  selected: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.8,
      ease: 'easeIn',
    },
  },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    translateY: 50,
  },
  selected: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
      ease: 'easeIn',
    },
  },
};

const renderTabImages = (i: number) => {
  return (
    <motion.div initial='hidden' animate='selected'>
      {i === 0 && (
        <motion.div
          variants={dashVariants}
          className='absolute top-36 right-20 border-t shadow-2xl'
        >
          <img style={{ objectFit: 'cover' }} src={Dash1} alt='dashboard' />

          <motion.div
            variants={panelVariants}
            className='absolute top-1/2 -left-16 flex items-center p-4 border bg-white shadow-md rounded-md'
          >
            <MdFiberNew size={50} color='#7933BF' />
            <div className='ml-2'>
              <h3 className='text-sm font-semibold'>Officiis odio</h3>
              <p className='text-xs text-gray-400'>lorem cupiditate tempori</p>
            </div>
          </motion.div>

          <motion.div
            variants={panelVariants}
            className='absolute top-1/4 -right-24 flex flex-col justify-evenly h-48 w-60 px-4 py-4 border text-xs text-gray-500 bg-white shadow-md rounded-md'
          >
            <h3 className='text-sm text-black font-semibold mb-2'>
              Optio Solutami
            </h3>
            <div className='flex items-center'>
              <MdCheckBoxOutlineBlank size={16} />
              <p className='ml-2'>Omnis illum </p>
            </div>

            <div className='flex items-center'>
              <MdCheckBox size={16} color='#7933BF' />
              <p className='ml-2'>Adipisicing elit</p>
            </div>

            <div className='flex items-center'>
              <MdCheckBox size={16} color='#7933BF' />
              <p className='ml-2'>Ducimus adipisci porro</p>
            </div>

            <div className='flex items-center'>
              <MdCheckBoxOutlineBlank size={16} />
              <p className='ml-2'>Non eaque corporis</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {i === 1 && (
        <motion.div
          variants={dashVariants}
          className='absolute top-36 right-20 border-t shadow-2xl'
        >
          <img style={{ objectFit: 'cover' }} src={Dash2} alt='dashboard' />

          <motion.div
            variants={panelVariants}
            className='absolute top-1/2 -left-16 flex flex-col items-center p-4 border bg-white shadow-md rounded-md'
          >
            <div className='flex text-gray-400 mb-2'>
              <AiOutlineBarChart size={15} color='#5A5494' />
              <h3 className='text-xs text-purple-800 font-semibold ml-2 mr-16'>
                Reports
              </h3>
              <MdKeyboardArrowDown size={15} color='#5A5494' />
            </div>

            <div className='flex flex-col self-stretch text-xs text-gray-400 px-1'>
              <div className='flex items-center justify-between'>
                <p>December</p>
                <div className='h-2 w-2 rounded-full bg-red-400'></div>
              </div>
              <div className='w-full border my-1'></div>
              <div className='flex items-center justify-between'>
                <p>November</p>
                <div className='h-2 w-2 rounded-full bg-green-400'></div>
              </div>
              <div className='w-full border my-1'></div>
              <div className='flex items-center justify-between'>
                <p>October</p>
                <div className='h-2 w-2 rounded-full bg-green-400'></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={panelVariants}
            className='absolute top-1/4 -right-24 flex flex-col justify-center items-center h-36 w-36 border text-xs text-gray-500 bg-white shadow-md rounded-md'
          >
            <MdOutlineHistory size={70} color='#7933BF' />
            <p className='text-xs text-gray-400 mt-2'>Lusto Autem</p>
          </motion.div>
        </motion.div>
      )}

      {i === 2 && (
        <motion.div
          variants={dashVariants}
          className='absolute top-36 right-20 border-t shadow-2xl'
        >
          <img style={{ objectFit: 'cover' }} src={Dash3} alt='dashboard' />

          <motion.div
            variants={panelVariants}
            className='absolute top-1/2 -left-16 flex flex-col p-4 border bg-white shadow-md rounded-md'
          >
            <h3 className='text-sm font-semibold'>Vero Explicabo</h3>

            <div className='flex justify-between text-xs text-gray-500 py-2 px-2 my-2 border rounded-sm'>
              <p>Esse sint, amet...</p>
              <MdKeyboardArrowDown size={15} color='#5A5494' />
            </div>

            <button className='text-sm text-white py-2 px-12 bg-purple-700 rounded-sm'>
              Upgrade
            </button>
          </motion.div>

          <motion.div
            variants={panelVariants}
            className='absolute top-1/4 -right-24 flex flex-col justify-evenly h-40 w-40 pl-4 py-4 border text-xs text-gray-500 bg-white shadow-md rounded-md'
          >
            <div className='flex items-center'>
              <MdLock size={16} color='#B2B5BF' />
              <p className='ml-2'>Impedit Nesci</p>
            </div>

            <div className='flex items-center'>
              <MdWatchLater size={16} color='#B2B5BF' />
              <p className='ml-2'>Rerum Iste</p>
            </div>

            <div className='flex items-center'>
              <MdMediation size={16} color='#B2B5BF' />
              <p className='ml-2'>Aperiam Non</p>
            </div>

            <div className='flex items-center'>
              <MdWbCloudy size={16} color='#B2B5BF' />
              <p className='ml-2'>Eligendi Harum</p>
            </div>

            <div className='flex items-center'>
              <MdNotifications size={16} color='#B2B5BF' />
              <p className='ml-2'>Eius Natus</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

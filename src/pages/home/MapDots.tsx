import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Coords {
  x: number;
  y: number;
  city: string;
}

const locVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  animate: (i: number) => ({
    scale: [1, 2, 1],
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: i * 0.12,
    },
  }),
};

const dotVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.8,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
};

const modalVariants = {
  initial: {
    scale: 0,
    translateX: -10,
  },
  hover: {
    scale: 0.6,
  },
};

export const MapDots = ({ inView }: { inView: boolean }) => {
  const [count, setCount] = useState(0);

  const locs: Coords[] = [
    { x: 145, y: 215, city: 'Los Angeles, CA' },
    { x: 205, y: 225, city: 'Austin, TX' },
    { x: 245, y: 170, city: 'Chicago, IL' },
    { x: 270, y: 250, city: 'Miami, FL' },
    { x: 285, y: 195, city: 'New York, NY' },
    { x: 520, y: 140, city: 'London, UK' },
    { x: 535, y: 165, city: 'Paris, FR' },
    { x: 855, y: 325, city: 'Singapore, MY' },
    { x: 1000, y: 445, city: 'Syndey, AU' },
    { x: 970, y: 205, city: 'Tokyo, JP' },
  ];

  useEffect(() => {
    let timer: any;

    if (inView && count < 10) {
      timer = setTimeout(() => {
        setCount(count + 1);
      }, 90);
    }

    return () => clearTimeout(timer);
  }, [inView, count]);

  return (
    <div className='relative'>
      <div className='absolute -top-4 right-8 h-36 w-36 flex flex-col items-center justify-center rounded-full bg-white text-purple-600 shadow-xl z-20'>
        <h3 className='text-5xl font-thin'>{count}</h3>
        <p className='text-lg font-light'>locations</p>
      </div>

      {inView &&
        locs.map((d, i) => {
          return (
            <motion.div
              key={d.city}
              initial='hidden'
              animate='animate'
              variants={locVariants}
              custom={i}
              className='relative cursor-pointer'
              style={{
                position: 'absolute',
                zIndex: (20 - i).toString(),
                top: d.y,
                left: d.x,
              }}
            >
              <motion.div
                initial='initial'
                whileHover='hover'
                variants={dotVariants}
                className='h-3 w-3 rounded-full bg-purple-500'
              >
                <motion.div
                  variants={modalVariants}
                  className='flex justify-center text-xs min-w-min w-28 border font-bold bg-white shadow-lg p-2 rounded-sm'
                >
                  {d.city}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
    </div>
  );
};

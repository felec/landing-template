import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { ReactComponent as Coin } from '../assets/svgs/coin.svg';
import { ReactComponent as Crypto } from '../assets/svgs/crypto.svg';
import { ReactComponent as Pay } from '../assets/svgs/pay.svg';
import { ReactComponent as Security } from '../assets/svgs/security.svg';

interface Content {
  image: any;
  price: number;
  subTitle: string;
  title: string;
}

const cardVariants = {
  initial: {
    translateY: 10,
  },
  hover: {
    translateY: -10,
    transition: {
      ease: 'linear',
      duration: 0.2,
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
    translateY: 20,
  },
  animate: (i: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      delay: i * 0.2,
    },
  }),
};

export const HeaderCardList = () => {
  const cards = [
    {
      image: <Coin />,
      price: 5.0,
      title: 'Consectetur',
      subTitle: `
      Lorem ipsum dolor sit, amet elit. 
      Recusandae, sequi voluptate reprehenderit.`,
    },
    {
      image: <Pay />,
      price: 25.0,
      title: 'Elit Pariatur',
      subTitle: `
      Ipsa sequi voluptas rem consequatur voluptatem iusto.
      `,
    },
    {
      image: <Crypto />,
      price: 75.0,
      title: 'Adipisicing',
      subTitle: `
      Beatae commodi quam. Itaque, 
      velit eius minima nobis excepturi modi.
      `,
    },
    {
      image: <Security />,
      price: 100.0,
      title: 'Lorem Ipsum',
      subTitle: `
      In culpa praesentium ex error. 
      Explicabo, illo molestias porro ullam! Maiores, labore.
      `,
    },
  ];

  return (
    <section className='flex justify-evenly my-20 px-12'>
      {cards.map((c, i) => (
        <Card key={c.title} content={c} idx={i} />
      ))}
    </section>
  );
};

const Card = ({ content, idx }: { content: Content; idx: number }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial='initial'
      whileHover='hover'
      style={{ height: '28rem', width: '18rem' }}
      className='flex flex-col items-center justify-end p-4 rounded-md shadow-md hover:shadow-2xl bg-white cursor-pointer'
    >
      {inView ? (
        <motion.div
          initial='initial'
          animate='animate'
          variants={imgVariants}
          custom={idx}
        >
          {content.image}
        </motion.div>
      ) : (
        <div className='h-full'></div>
      )}
      <div className='flex flex-col justify-evenly h-1/2 text-center'>
        <h3 className='text-xl font-bold'>{content.title}</h3>

        <p
          style={{ fontSize: '1rem' }}
          className=' text-gray-500 tracking-wide'
        >
          {content.subTitle}
        </p>

        <span
          style={{ fontSize: '1rem' }}
          className='text-lg font-semibold text-purple-600 tracking-wide'
        >
          Starting at ${content.price}/month
        </span>
      </div>
    </motion.div>
  );
};

import { motion } from 'framer-motion';
import { ReactComponent as Coin } from '../assets/coin.svg';
import { ReactComponent as Crypto } from '../assets/crypto.svg';
import { ReactComponent as Pay } from '../assets/pay.svg';
import { ReactComponent as Security } from '../assets/security.svg';

interface Content {
  image: any;
  price: number;
  subTitle: string;
  title: string;
}

const cardVariants = {
  initial: {
    translateY: 0,
  },
  hover: {
    translateY: -10,
    transition: {
      ease: 'linear',
      duration: 0.2,
    },
  },
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
    <>
      {cards.map((c) => (
        <Card content={c} />
      ))}
    </>
  );
};

const Card = ({ content }: { content: Content }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial='initial'
      whileHover='hover'
      className='flex flex-col items-center h-96 w-72 p-4 rounded-md shadow-md hover:shadow-2xl bg-white cursor-pointer'
    >
      {content.image}
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

import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useInView } from 'react-intersection-observer';

import { Cards } from '../../components/Cards';
import { Crypto } from '../../components/Crypto';
import { Macbook } from '../../components/Macbook';
import { Shield } from '../../components/Shield';

interface Content {
  image: any;
  price: number;
  subTitle: string;
  title: string;
}

const cardVariants = {
  normal: {
    translateY: 10,
  },
  hover: {
    translateY: -10,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const imgVariants = {
  normal: {
    opacity: 0,
    translateY: 20,
  },
  show: (i: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      delay: i * 0.2,
    },
  }),
};

const outer = {
  normal: {
    translateY: 0,
  },
  hover: {
    translateY: -8,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const inner = {
  normal: {
    translateY: 0,
  },
  hover: {
    translateY: -12,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
};

const cards = [
  {
    image: <Crypto outer={outer} inner={inner} />,
    price: 5.0,
    title: 'Consectetur',
    subTitle: `
    Lorem ipsum dolor sit, amet elit. 
    Recusandae, sequi voluptate reprehenderit.`,
  },
  {
    image: <Cards outer={outer} inner={inner} />,
    price: 25.0,
    title: 'Elit Pariatur',
    subTitle: `
    Ipsa sequi voluptas rem consequatur voluptatem iusto.
    `,
  },
  {
    image: <Macbook outer={outer} inner={inner} />,
    price: 75.0,
    title: 'Adipisicing',
    subTitle: `
    Beatae commodi quam. Itaque, 
    velit eius minima nobis excepturi modi.
    `,
  },
  {
    image: <Shield outer={outer} inner={inner} />,
    price: 100.0,
    title: 'Lorem Ipsum',
    subTitle: `
    In culpa praesentium ex error. 
    Explicabo, illo molestias porro ullam! Maiores, labore.
    `,
  },
];

export const CardList = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <section
        ref={emblaRef}
        className='md:hidden lg:hidden overflow-hidden py-16'
      >
        <div className='flex'>
          {cards.map((c, i) => (
            <div key={c.title} className='relative flex-1 mx-2'>
              <Card content={c} idx={i} />
            </div>
          ))}
        </div>
      </section>

      <section className='hidden md:grid lg:hidden grid-cols-2 justify-items-center my-20'>
        {cards.map((c, i) => (
          <div key={c.title} className='m-2'>
            <Card content={c} idx={i} />
          </div>
        ))}
      </section>

      <section className='hidden lg:flex justify-evenly my-20 px-12'>
        {cards.map((c, i) => (
          <Card key={c.title} content={c} idx={i} />
        ))}
      </section>
    </>
  );
};

const Card = ({ content, idx }: { content: Content; idx: number }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial='normal'
      animate='show'
      whileHover='hover'
      style={{ height: '28rem', width: '18rem' }}
      className='flex flex-col items-center justify-end p-4 lg:mx-1 rounded-md shadow-md hover:shadow-2xl border lg:border-0 bg-white cursor-pointer'
    >
      {inView ? (
        <motion.div variants={imgVariants} custom={idx}>
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

import { useInView } from 'react-intersection-observer';

import { MapDots } from './MapDots';
import { ReactComponent as Map } from '../assets/svgs/map.svg';

export const MapSection = () => {
  const [mapRef, mapInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className='flex flex-col items-center my-20'>
      <h2 className='flex text-4xl font-bold'>
        Provident illo, sit dolorum culpa{' '}
        <span className='text-lg self-start'>®</span>
      </h2>
      <p className='text-2xl font-thin text-gray-500 mt-8 mb-16'>
        10 locations worldwide
      </p>

      <div ref={mapRef} className='relative h-5/6 w-5/6'>
        <MapDots inView={mapInView} />
        <Map />
      </div>
    </section>
  );
};

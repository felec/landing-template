import { useInView } from 'react-intersection-observer';

import { MapDots } from './MapDots';
import { ReactComponent as Map } from '../../assets/svgs/map.svg';

export interface Location {
  x: number;
  y: number;
  city: string;
}

const locs: Location[] = [
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

export const MapSection = () => {
  const [mapRef, mapInView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className='flex flex-col items-center text-center lg:text-left lg:my-20'>
      <h2 className='flex text-3xl lg:text-4xl font-bold'>
        Provident illo, sit dolorum culpa{' '}
        <span className='hidden lg:block text-lg self-start'>®</span>
      </h2>
      <p className='text-lg lg:text-2xl font-thin text-gray-500 mt-8 mb-8 lg:mb-16'>
        10 locations worldwide
      </p>

      <div className='xl:hidden 2xl:grid grid grid-cols-2 justify-center'>
        {locs.map((l) => (
          <div key={l.city} className='flex items-center mx-4 md:mx-8 mb-4'>
            <div className='h-2 w-2 mr-2 rounded-full bg-purple-500'></div>
            <h3>{l.city}</h3>
          </div>
        ))}
      </div>

      <div
        ref={mapRef}
        className='hidden xl:block 2xl:hidden relative h-5/6 w-5/6'
      >
        <MapDots locs={locs} inView={mapInView} />
        <Map />
      </div>
    </section>
  );
};

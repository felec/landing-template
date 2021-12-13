import { Banner } from './pages/home/Banner';
import { Header } from './pages/home/Header';
import { Footer } from './pages/home/Footer';
import { CardList } from './pages/home/CardList';
import { MapSection } from './pages/home/MapSection';
import { HeadSection } from './pages/home/HeadSection';
import { InfoSection } from './pages/home/InfoSection';
import { TabsSection } from './pages/home/TabsSection';

function App() {
  return (
    <div
      style={{ fontFamily: 'Open Sans, sans-serif' }}
      className='relative flex flex-col h-full w-full'
    >
      <div
        style={{
          zIndex: -1,
          background:
            'linear-gradient(90deg, rgba(77,10,144,1) 0%, rgba(121,51,190,1) 70%, rgba(139,68,209,1) 100%)',
        }}
        className='absolute top-0 left-0 h-1/6 lg:h-1/5 w-full'
      >
        <svg
          className='absolute -bottom-1 left-0'
          viewBox='0 0 1249 192'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_2_2)'>
            <path
              d='M618.008 177.743C621.615 178.78 625.44 178.781 629.048 177.747L1249 0V192H0V0L618.008 177.743Z'
              fill='#fff'
            />
          </g>
        </svg>
      </div>

      <Banner />

      <Header />

      <HeadSection />

      <CardList />

      <MapSection />

      <TabsSection />

      <InfoSection />

      <Footer />
    </div>
  );
}

export default App;

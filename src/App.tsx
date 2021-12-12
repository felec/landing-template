import { Banner } from './pages/home/Banner';
import { Header } from './pages/home/Header';
import { Footer } from './pages/home/Footer';
import { CardList } from './pages/home/CardList';
import { MapSection } from './pages/home/MapSection';
import { HeadSection } from './pages/home/HeadSection';
import { InfoSection } from './pages/home/InfoSection';
import { TabsSection } from './pages/home/TabsSection';
import Background from './assets/svgs/header_bg.svg';

function App() {
  return (
    <div
      style={{
        // backgroundImage: `url(${Background})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain',
        fontFamily: 'Open Sans, sans-serif',
      }}
      className='relative flex flex-col h-full w-full'
    >
      <div className='absolute flex items-end top-0 left-0 h-1/6 lg:h-1/5 w-full bg-purple-500'>
        <svg
          fill='#fff'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M1200 0L0 0 598.97 114.72 1200 0z'></path>
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

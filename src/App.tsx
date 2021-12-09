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
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Open Sans, sans-serif',
      }}
      className='relative flex flex-col h-full w-full'
    >
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

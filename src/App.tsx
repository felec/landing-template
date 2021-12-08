import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { HeaderCardList } from './components/HeaderCardList';
import { MapSection } from './components/MapSection';
import { SignUpForm } from './components/SignUpForm';
import { InfoSection } from './components/InfoSection';
import { TabsSection } from './components/TabsSection';
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

      <section className='flex flex-col items-center mt-48'>
        <h1 className='text-5xl font-bold text-white'>
          Ducimus Consequntur Delectus
        </h1>

        <h2 className='text-2xl font-thin text-gray-300 my-8'>
          Facilis voluptas praesentium doloribus voluptatem totam rerum velit
          dicta maxime.
        </h2>

        <SignUpForm />
      </section>

      <HeaderCardList />

      <MapSection />

      <TabsSection />

      <InfoSection />
    </div>
  );
}

export default App;

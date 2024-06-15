
import { useEffect } from 'react';
import './App.css';
import { AboutSection, ChooseUs, Customers, Footer, Header, HeroSection, MangoTypes, News, TeamMembers } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <News />
      <ChooseUs />
      <Customers />
      <MangoTypes />
      <TeamMembers />
      <Footer />
    </>
  );
}

export default App;

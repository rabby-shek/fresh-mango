
import { useEffect } from 'react';
import './App.css';
import { AboutSection, Header, HeroSection } from './components';
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
    </>
  );
}

export default App;


import { useEffect } from 'react';
import './App.css';
import { Header, HeroSection } from './components';
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
    </>
  );
}

export default App;

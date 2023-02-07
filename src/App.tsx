import { useState, useEffect } from 'react';
import Navbar from '@/scenes/navbar';
import { PageTypes } from './components/types';
import Home from './scenes/home';
import Benefits from './scenes/benefits';
import OurClasses from './scenes/ourclasses';
import ContactUs from './scenes/contactus';
import Footer from './scenes/footer';


function App() {
  const [selectedPage, setSelectedPage] = useState<PageTypes>(PageTypes.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(PageTypes.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App

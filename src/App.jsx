import About from './components/About';
import Footer from './components/footer';
import GetOfferCTA from './components/GetOfferCTA';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero2 from './components/Hero';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Hero2 /> */}
      <About />
      <OurServices />
      <GetOfferCTA />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default App;

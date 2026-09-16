import About from './components/About';
import Footer from './components/Footer';
import GetOfferCTA from './components/GetOfferCTA';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFound from './pages/NotFound';
import PageLoader from './components/PageLoader';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <PageLoader />
            <Hero />
            {/* <Hero2 /> */}
            <About />
            <OurServices />
            <GetOfferCTA />
            <WhyChooseUs />
          </main>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/navbar/Navbar';
import Stats from './components/Stats/Stats'
import Hero from  './components/Hero/Hero'
import BussinesSection from './components/BussinesSection/BussinesSection';
import Billing from './components/Billing/Billing';
import CardDeal from './components/card/CardDeal';
import Testimonials from './components/testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
      <Hero/>
      <Stats/>
      <BussinesSection/>
      {/*<Billing/>
      <CardDeal/>
      <Testimonials/>
      <CTA/>
      <Footer/> */}


    </div>
  );
}

export default App;

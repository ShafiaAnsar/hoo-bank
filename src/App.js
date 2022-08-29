import './App.css';
import Navbar from './components/navbar/Navbar';
import Stats from './components/Stats/Stats'
import Hero from  './components/Hero/Hero'
import BussinesSection from './components/BussinesSection/BussinesSection';
import Billing from './components/Billing/Billing';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Hero/>
      <Stats/>
      <BussinesSection/>
      <Billing/>


    </div>
  );
}

export default App;

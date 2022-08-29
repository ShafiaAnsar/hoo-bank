import './App.css';
import Navbar from './components/navbar/Navbar';
import Stats from './components/Stats/Stats'
import Hero from  './components/Hero/Hero'
import BussinesSection from './BussinesSection/BussinesSection';
function App() {
  return (
    <div className="App">
     <Navbar/>
      <Hero/>
      <Stats/>
      <BussinesSection/>
    


    </div>
  );
}

export default App;

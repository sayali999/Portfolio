
import './App.css';
import Header from './Components/Header';
import NavbarComp from './Components/NavbarComp';
import Skills from './Components/Skills';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

import Scrollup from './Components/Scrollup';

function App() {
  useEffect(()=>{
    AOS.init({duration:1000,once:true});
  },[]);
  
  return (
    <>
    
    <NavbarComp />
    <Header />
    <About />
    <Skills />
    <Contactus/>
    <Footer/> 
    <Scrollup/>
    
    </>
  );
}

export default App;

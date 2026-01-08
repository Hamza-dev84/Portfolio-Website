import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';
import Education from './Components/Education/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Education/>
      <Footer/>
    
    </div>
  );
}

export default App;
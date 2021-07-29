import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Services from "./components/Services";
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="App__main">
        <Homepage />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;

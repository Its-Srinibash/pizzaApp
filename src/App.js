import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home.js';
import Menu from './pages/Menu.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Footer from './components/footer.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;

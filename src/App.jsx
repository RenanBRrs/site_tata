import styles from './App.module.css';
// router
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/contato' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

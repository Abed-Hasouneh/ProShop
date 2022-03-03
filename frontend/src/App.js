import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import {Container} from 'react-bootstrap'
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <main className='py-3'>
          <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="product/:id" element={<ProductScreen />} />
          </Routes>
          </Container>
        </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

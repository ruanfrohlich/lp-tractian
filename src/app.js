import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from 'Pages/Home';
import './assets/css/app.styl';
import Header from 'Structure/Header';
import Footer from 'Structure/Footer';
import GoTop from 'Components/GoTop';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <GoTop/>
    <Footer/>
  </React.StrictMode>
);
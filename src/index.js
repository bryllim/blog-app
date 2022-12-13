import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="members" element={<Members />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
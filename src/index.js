import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import SingleProduct from './pages/SingleProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='product/:id' element={<SingleProduct />} />



        <Route path='*' element={
          <h1 className='text-center text-[50px] text-red-400'>404 error</h1>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


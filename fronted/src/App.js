import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SecondMain from './pages/SecondPage';
import { Header } from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArticuloMain } from './pages/Articulo';
import SecondPage from './pages/SecondPage';
import { SearchArticuloMain } from './pages/SearchArticulo';
import { Error } from './pages/404';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/producto/:idProduct' element={<ArticuloMain />} />
          <Route path='/search' element={<SearchArticuloMain />} />
          <Route path='/categorias' element={<SecondPage />} />
          <Route path='/carrito' element={<MainPage />} />
          <Route path='/' element={<MainPage/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

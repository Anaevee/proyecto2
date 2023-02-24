import React, { createContext, useEffect, useState } from 'react';
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
import {useLocalStorage} from './hooks/UseLocalStore';
import {useForm} from 'react-hook-form';
import { CarritoCompra } from './Component/CarritoCompra';
import { Login } from './Component/Login';
import {useCookies} from 'react-cookie';

export const Token = createContext()

export function DashBoard () {

  const [cookies,setCookie,removeCookie] = useCookies('[token]');
  let [authenticated,setAuthenticated] = useState(cookies.token  !== undefined)

  return(
    <Token.Provider value={{authenticated,setAuthenticated}}></Token.Provider>
  )

}





export const Carrito = React.createContext([]);
const CarritoProducto = ({ children }) => {
    const [interes, setInteres] = useLocalStorage([], 'interesProductos');

  

  return (
    <Carrito.Provider value={[interes, setInteres]}>
      {children}
    </Carrito.Provider>
  );
};

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
           <CarritoProducto>
        <Header />
           </CarritoProducto> 
        <Routes>
          <Route path='/producto/:idProduct' element={<ArticuloMain />} />
          <Route path='/search' element={<SearchArticuloMain />} />
          <Route path='/categorias' element={<SecondPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/carrito' element={<CarritoProducto><CarritoCompra /></CarritoProducto>} />
          <Route path='/' element={<CarritoProducto><MainPage/></CarritoProducto>} />
          <Route path='*' element={<Error />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

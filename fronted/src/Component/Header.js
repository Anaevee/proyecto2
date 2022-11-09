import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { AuthTokenContext } from '../index';
//import { UsuarioLogueado } from './loginUser/loginUser';
import { Menu } from './Menu';

export const Header = () => {
  //const [token] = useContext(AuthTokenContext);
  return (
    <header id='cabeceraPrincipalName'>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
      <h1 id='titulo'>
        KEISHOP
        <Link to={'/'}></Link>
      </h1>
      <Menu></Menu>
      <nav>
        <ul>
          <li>
            <Link to={'/SecondPage'}>SEGUNDA PAGINA</Link>
          </li>
        </ul>
      </nav>
      <aside className='botonesMain'>
        <button type='button' className='btn btn-outline-dark'>
          <Link to='/search?search=pulseras'>Pulseras</Link>
        </button>
        <button  className='btn btn-outline-dark'>
          <Link to='/search?search=anillos'>Anillos</Link>
        </button>
        <button type='button' className='btn btn-outline-dark'>
          <Link to='/search?search=pendientes'>Pendientes</Link>
        </button>
        <button type='button' className='btn btn-outline-dark'>
          <Link to='/search?search=collares'>Collares</Link>
        </button>
        <button type='button' className='btn btn-outline-dark'>
          <Link to='/search?search=Colleciones'>Colleciones</Link>
        </button>
        <button type='button' className='btn btn-outline-dark'>
          <Link to='/search?search=Hand make by kei'>Hand make by kei</Link>
        </button>
      </aside>
    </header>
  );
};

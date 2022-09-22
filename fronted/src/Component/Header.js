
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { AuthTokenContext } from '../index';
//import { UsuarioLogueado } from './loginUser/loginUser';
import { Menu } from './Menu';


  export const Header = () =>{

    //const [token] = useContext(AuthTokenContext);
    return  (
      
        <header id= 'cabeceraPrincipalName'>
          <h1 id= 'titulo'>KEISHOP
          <Link to={'/'} ></Link>
          </h1>
          <Menu></Menu> 
        <nav>
            <ul>
                <li>
                <Link to={'/SecondPage'}>
                  SEGUNDA PAGINA
                </Link>
                </li>
            </ul>
        </nav>
        <aside
       className='botonesMain' >
        <button type="button" className= "btn btn-outline-dark">Pulseras
            <Link to= '/categorias'></Link>
        </button>
        <button type="button" className= 'btn btn-outline-dark'>Anillos
        <Link to= '/categorias'></Link>
        </button>
        <button type="button" className= 'btn btn-outline-dark'>Pendientes
        <Link to= '/categorias'></Link>
        </button>
        <button type="button" className='btn btn-outline-dark'>Collares
        <Link to= '/categorias'></Link>
        </button>
        <button type="button" className='btn btn-outline-dark'>Colleciones
        <Link to= '/categorias'></Link>
        </button>
        <button type="button" className= 'btn btn-outline-dark'>Hand make by kei
        <Link to ='*/'></Link>
        </button>
        </aside>
        </header>
    )
}

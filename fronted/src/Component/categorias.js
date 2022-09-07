import  React  from 'react';
import { Link } from "react-router-dom";

export const Categorias = () => {
    
    return(
        <nav id='Categorias'>
        <ul>
            <li className='li-icono'>
                { <Link to= '*'>
                    {/* <img
                        className=
                        src=
                        alt=
                    /> */}
                    Anillos
                </Link> }
            </li>
            <li className='li-icono'>
                { <Link to='*'>
                    {/* <img
                        className=
                        src=
                        alt=
                    /> */}
                    Pendientes
                </Link> }
            </li>
            <li className='li-icono'>
                { <Link to='*'>
                    {/* <img
                        className=
                        src=
                        alt=
                    /> */}
                    Collares
                </Link> }
            </li>
            <li className='li-icono'>
                <Link to='*'>
                    {/* <img
                        className=
                        src=
                        alt=
                    /> */}
                    Pulseras
                </Link>
            </li>
            <li className='li-icono'>
                <Link to='*'>
                    {/* <img
                        className=
                        src=
                        alt=
                    /> */}
                    Todas las categorias
                </Link>
            </li>
        </ul>
    </nav>
);
};


    



import React from 'react';
import { Link } from 'react-router-dom';
import { SeleccionArticulos } from '../Component/seleccionArticulos';
import Carousel from 'react-bootstrap/Carousel';
import { HeroMain } from '../Component/hero';




 
 
 
 const MainPage = () => {
    return (
        <div>
            <main id= 'PaginaPrincipal'>
              
         
           <HeroMain></HeroMain>
       
     
     <SeleccionArticulos></SeleccionArticulos>
     
       </main> 
        </div>
       
        
    )
}
 

export default MainPage;
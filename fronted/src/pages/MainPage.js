import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { SeleccionArticulos } from '../Component/seleccionArticulos';
import Carousel from 'react-bootstrap/Carousel';
import { HeroMain } from '../Component/hero';
import { Footer } from '../Component/Footer';
import { Carrito } from '../App';





 
 
 
 const MainPage = () => {
     const [interes, setInteres] = useContext(Carrito);
    return (
        <div>
            <main id= 'PaginaPrincipal'>
              
         
           <HeroMain></HeroMain>
           
       
     
     <SeleccionArticulos></SeleccionArticulos>
      <Footer></Footer> 
       </main> 
        </div>
       
        
    )
}
 

export default MainPage;
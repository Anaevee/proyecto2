import  React, { useState }  from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/UseLocalStore';
import { useContext } from 'react';
import { Carrito } from '../App';


 export const GrupoCard = (art) => {

  const [interes ,setInteres] = useContext(Carrito);

  const navigate = useNavigate ();

  const botonCarrito = (e) => {
    e.preventDefault ();
    if(!interes.includes(art.articulo.id)){
      setInteres([...interes ,art.articulo.id]);

    }

 
    // console.log(art.articulo.id);
    return navigate ("/carrito");
  }

  

  

  
  

  return (
    
      <Card>
        <Card.Img variant="top" src={`http://localhost:5000/${art.articulo.namePhoto}`} />
        <Card.Body>
          <Card.Title >{`${art.articulo.brand}`}</Card.Title>
          <Card.Text>{`${art.articulo.price} €`}
          </Card.Text>
          <Button onClick={botonCarrito}  type="button" variant="primary">Añadir a carrito</Button>
        </Card.Body>
        <Card.Footer>
        {/* <Button type="button" variant="primary">Ver más */}
        <Link to={`/producto/${art.articulo.id}`}>ver mas</Link>
        {/* </Button> */}
        </Card.Footer>
      </Card>
    
  );
}


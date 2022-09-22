import  React  from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

 export const GrupoCard = (art) => {

  return (
    
      <Card>
        <Card.Img variant="top" src={`http://localhost:5000/${art.articulo.namePhoto}`} />
        <Card.Body>
          <Card.Title >{`${art.articulo.brand}`}</Card.Title>
          <Card.Text>{`${art.articulo.price} €`}
          </Card.Text>
          <Button type="button" variant="primary">Añadir al carrito</Button>
        </Card.Body>
        <Card.Footer>
        {/* <Button type="button" variant="primary">Ver más */}
        <Link to={`/producto/${art.articulo.id}`}>ver mas</Link>
        {/* </Button> */}
        </Card.Footer>
      </Card>
    
  );
}


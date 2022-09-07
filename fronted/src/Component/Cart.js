import  React  from 'react';
import { Link } from 'react-router-dom';

export const Cart = (cat) => {
  return (
    <section id='fotoPrecioNombre' >
      <article id='productosAleatorios-TarjArticle'>
        <figure className='divImagenArticulo'>
          <img
            className='articuloImagen'
            src={`http://localhost:3000/${cat.articulo.namePhoto}`}
            alt={`${cat.articulo.namePhoto}`}
          />
        </figure>
        <h2 id='precio'>{`${cat.articulo.price} €`}</h2>
        {/* <h3 id='nombreProducto'>Add to cart{`${cat.articulo.namePRODUCT}`}</h3>  */}
        <h4 id='marcaProducto'>{`${cat.articulo.brand}`}</h4> 
      

        <Link id='nombreProducto' to={`/product/${cat.articulo.id}`}>Add to cart</Link>
      </article>
    </section>
  );
};


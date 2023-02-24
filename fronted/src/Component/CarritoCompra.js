import  React, { useState }  from 'react';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { Carrito } from '../App';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { CarritoCard } from './CarritoCard';

export const CarritoCompra = () => {

 const [interes ,setInteres] = useContext(Carrito);
const [precioTotal, setPrecioTotal] = useState(0);
 console.log(precioTotal);


 

// const botonCarrito = (e) => {
//   e.preventDefault ();
//   setInteres([...interes ,art.articulo.id]);
//   console.log(art.articulo.id);


// }


return (


  <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      {interes.length >0 &&
      interes.map((value,i)=>{
        return(
        <CarritoCard key={i} value={value} preciocantidad= {setPrecioTotal}></CarritoCard>
        )

      }
      )
      }
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>{precioTotal}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 );

}

import  React  from 'react';
import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { Carrito } from '../App';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import { CarritoCard } from './CarritoCard';

export const CarritoCompra = () => {

 const [interes ,setInteres] = useContext(Carrito);

 console.log(interes);
 

// const botonCarrito = (e) => {
//   e.preventDefault ();
//   setInteres([...interes ,art.articulo.id]);
//   console.log(art.articulo.id);


// }


return (


  <section class="h-100 gradient-custom">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      {interes.length >0 &&
      interes.map(()=>{
        return(
        <CarritoCard></CarritoCard>
        )

      }
      )
      }
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>

            <button type="button" class="btn btn-primary btn-lg btn-block">
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

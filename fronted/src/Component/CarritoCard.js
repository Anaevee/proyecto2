import  React, { useEffect, useState }  from 'react';
import { get } from '../api/get';
import { Carrito } from '../App';


export const CarritoCard = ({value}) =>{

  const [valorArticulo,setValorArticulo] = useState();
  useEffect (() => {
    get(
      `http://localhost:5000/getProduct/${value}`, 
        (body) => {
          setValorArticulo(body.producto);
        })
  },[]);

 const MinArticulo = valorArticulo && valorArticulo.getProduct[0];
  console.log(valorArticulo);
      return(
        <>
        {valorArticulo && (

        <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
                    <h5 className="mb-0">{MinArticulo.namePRODUCT}</h5>

            
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={`http://localhost:5000/${valorArticulo.fotos[0].namePhoto}`}
                    className="w-100" alt={MinArticulo.description} />
                  <a href="#!">
                    <div className="mask" ></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>{MinArticulo.namePRODUCT}</strong></p>
                <p>{MinArticulo.category}</p>
                <p>{MinArticulo.description}</p>
                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" >
                  <button className="btn btn-primary px-3 me-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    <input id="form1" min="1" name="quantity" value="1" type="number" className="form-control" />
                    <label className="form-label" htmlFor="form1">Cantidad</label>
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i className="fas fa-plus"></i>
                  </button>
                </div>

                <p className="text-start text-md-center">
                  <strong>{MinArticulo.price}€</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
       ) } 
</>
      )
}


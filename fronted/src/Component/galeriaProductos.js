import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";
import { useState,useEffect } from "react";
import { get } from "../api/get";

export const galeriaProductos = () =>{
    function useQuery{
        return new URLSearchParams(useLocation().search); //uselocation??¿¿
    }
let query = useQuery();
//   const [PeticionPorCategorias, setPeticionPorCategorias] = useState([]);  conque me quedo?¿?¿
//   const [PeticionSearch, setPeticionSearch] = useState([]);                 lo mas buscado y lo ultimo si me interesa
//   const [MasBuscado, setMasBuscado] = useState([]);
//   const [LoUltimo, setLoUltimo] = useState([]);
  const totalProduct = query.get('totalProduct');
  const search = query.get('search');

  useEffect(() => {
    if (totalProduct) {
      get(
        `http://localhost:5000/totalProduct?totalProduct=`, 
        (body) => {
          setPeticionSearch([]);
          setPeticiontotalProduct(body.producto.totalProduct);
        }
      );
    } else if (search) {
      get(
        `http://localhost:5000/search?search=${search}`,
        (body) => {
          setPeticionSearch(body.data.results);
        }
      );
    } else {
      get(`http://localhost:5000/MainPage`, (body) => {
        setMasBuscado(body.productos);
      });
      get(`http://localhost:5000/inicio`, (body) => {
        setLoUltimo(body.productos);
      });
    }
  }, [categorias, search, numPagina]);

}
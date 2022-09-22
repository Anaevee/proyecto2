import React from "react";
import { useState,useEffect } from "react";
import { get } from '../api/get';
import { GrupoCard } from './Card';

export const SeleccionArticulos =() =>{
const [ articulo, setArticulos] = useState ([]);
const listaArticulosDelServidor = ( body ) => setArticulos( body.producto.totalProduct);
useEffect (() => {
    get('http://localhost:5000/totalProduct', listaArticulosDelServidor);

}, []);
//console.log (articulo.length);
console.log (articulo);
return (
    <section id= 'productosAleatorios'>
        {articulo.length > 0 &&
        articulo.map ((art,index) => {
            return (
                <GrupoCard
                id='GrupoCard'
                key={index}
                articulo={art}
                />
            );
        })}
        </section>
);
    };
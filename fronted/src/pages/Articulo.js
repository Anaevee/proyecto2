import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../api/get';
import { GrupoCard } from '../Component/Card';

export const ArticuloMain = () => {
  const [infoArticulo, setInfoArticulo] = useState();
  const [info, setInfo] = useState();
  const [photo, setPhoto] = useState();

  const { idProduct } = useParams();

  const getInfo = (body) => {
    setInfo(body.producto);
    setInfoArticulo(body.producto.getProduct[0]);
    setPhoto(body.producto.producto);
  };

  useEffect(() => {
    get(`http://localhost:5000/getProduct/${idProduct}`, getInfo);
  }, [idProduct]);
  console.log(infoArticulo);
  return (
    <section>
      <h1>{infoArticulo && infoArticulo.namePRODUCT}</h1>
      <p>{infoArticulo && infoArticulo.category}</p>
    </section>
  );
};

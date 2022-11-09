import { useEffect, useState } from 'react';

export const useLocalStorage = (valorPorDefecto, key) => {
  const valorInicialDeLaKey =
    JSON.parse(localStorage.getItem(key)) || valorPorDefecto ;

  const [dato, setDato] = useState(valorInicialDeLaKey);


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dato));
  }, [dato, key]);

  return [dato, setDato];
};
import React, { useEffect, useState } from 'react';
import { get } from '../api/get';
import { useLocation } from 'react-router-dom';
import { GrupoCard } from '../Component/Card';



export const SearchArticuloMain = () => {
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
  
    let query = useQuery();
    const [PeticionSearch, setPeticionSearch] = useState([]);
    const search = query.get('search');
  console.log(PeticionSearch);
     useEffect(() => {
     if (search) {
        get(
         `http://localhost:5000/search?search=${search}`,
          (body) => {
            setPeticionSearch(body.items);
           }
        );
      } 
     }, [ search]);
  
    return (
      <div>
        {(search) && (
          <div>
            <nav>
                {PeticionSearch.length > 0 &&
                PeticionSearch.map((art) => {
                  return (
                     <GrupoCard
                    id='cartabusqueda'
                      key={art.id}
                      articulo={art}
                    />
                    
                  );
                 })} 
                </nav>
        </div> )}
          </div>
            )}
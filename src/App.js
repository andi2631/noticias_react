import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState(''); //esta categoria que se guarda, viene desde formulario, pero se deifne aca, porque se usa aca
  const [noticias, guardarNoticias] = useState([]); //estas son las noticias que devuelve la API
  const [pais, guardarPais] = useState('mx');

  useEffect(() => {
    var country = "mx";
      switch(pais){
        case "Mexico":
          country = "mx"
          break;
        case "Brasil":
          country = "br"
          break;
        case "Estados Unidos":
          country = "us"
          break;
        }     
    const consultarAPI = async () => {         
      
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoria}&apiKey=351345268a0b4b0384b628de55fe7e5a`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria, pais]);

  return (
    <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario 
              guardarCategoria={guardarCategoria}
              guardarPais={guardarPais}
              pais={pais}
            />

            <ListadoNoticias 
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;

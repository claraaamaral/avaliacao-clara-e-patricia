import React from 'react';
import Headers from './Headers';
import Noticia from './noticias';
import Apresentacao from './apresentacao';
import Pedagogico from './pedagogico';
import Suporte from './suporte';
import Contato from './contato';
import Comida from './componentes/comida';
import { Route, Routes } from 'react-router-dom';

class App extends React.Component{
  render(){

    return (
      <div>
      <Headers />
     <Routes>
       <Route path='/' element={<Apresentacao />}/>
       <Route path='/noticia' element={ <Noticia />}/>
       <Route path='/pedagogico' element={<Pedagogico /> }/>
       <Route path='/suporte' element={<Suporte />}/>
       <Route path='/contato' element={< Contato />}/>
       <Route path='/comida' element={< Comida />}/>
     </Routes>
     </div>
    );
  }
}

export default App;

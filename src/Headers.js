import React from 'react';
import {Link} from 'react-router-dom'

function Headers(){
     return (
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Apresentacao</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="navbar-brand" to="/noticia">Noticia</Link>
        </li>
        <li class="nav-item">
        <Link class="navbar-brand" to="/pedagogico">Pedagogico</Link>
        </li>
        <li class="nav-item">
        <Link class="navbar-brand" to="/contato">Contato</Link>
        </li>
        <li class="nav-item">
        <Link class="navbar-brand" to="/suporte">Suporte</Link>
        </li>
        <li class="nav-item">
        <Link class="navbar-brand" to="/comida">Comida</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
     );
        
}

export default Headers;
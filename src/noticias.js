import Fachada from "./componentes/fachadaveia.jpg"
function Noticia (){
    return (
        <div>
            <article>
                <h3> REITORIA RECEBE REPRESENTANTES DO SINTEST</h3>
                <p>
                    Na tarde desta segunda-feira, 24 de janeiro,
         o reitor da Universidade Federal do Rio Grande do Norte (UFRN), José Daniel Diniz Melo,
         reuniu-se com representantes do Sindicato Estadual dos Trabalhadores em Educação no Ensino Superior
          (Sintest).Na ocasião, a representação sindical entregou um documento relativo aos aposentados, além 
          de um ofício sobre os afastamentos,no atual contexto da pandemia.
         </p>
            </article>
<figure>
    <img src={Fachada} alt="imagem"/> 
</figure>

        </div>
       
    );

}

export default Noticia;
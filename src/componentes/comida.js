import { useEffect, useState } from "react";
import Alimento from "./alimento"

function Comida (){const url= 'https://random-data-api.com/api/food/random_food?size=10'
    const [comida,setComida]=useState([])
    const gerarComida=async()=>{
    const response= await fetch(url)
    const dados= await response.json()
    setComida(dados)
    
    
}
useEffect(()=>{
    gerarComida()
 },[])

 return (

    <>
        {
            comida.map((i)=>{

                return (<Alimento key= {i.id} {...i}/>)
            })
        }
    


     
    </>
);

    }
    
export default Comida;

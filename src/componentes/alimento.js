import { Fragment, useEffect, useState } from "react";

function Alimento ({dish,description}){
   
       return(
       <>
       <p>{description}</p> 
       <p>{dish}</p> 
       </>
    );

}

export default Alimento;
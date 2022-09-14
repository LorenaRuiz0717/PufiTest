import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Newsletter=()=>{
    return(
     <div className="containerNewsLetter">
        <h4>Newsletter</h4>
        <h2>Suscribete</h2>
        <p>Y enterate de todas las novedades</p>
       <div className="searchNewsletter">
        <input
        // className="searchNewsletter"
        placeholder=" Ingresa tu email">
        </input>
        <span className="iconArrow"><FaArrowRight/></span>
        </div>
     
     </div>
    )
}

export {Newsletter}
import React from "react";


const Slider=()=>{
    return(
<div id="carouselExampleIndicators" className="carousel slide containerBanner" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/564x/79/e8/f8/79e8f836b6e38c28844d150625c08254.jpg" className="imgSlider d-block w-auto" alt="imgcarrusel"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/564x/c0/14/84/c014848bd93d5447cc0aae057710df69.jpg" className="imgSlider d-block w-auto" alt="imgcarrusel"/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/564x/13/39/35/1339356e27d63171025cdc5539d728b8.jpg" className="imgSlider d-block w-auto" alt="imgcarrusel"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
)}

export {Slider}
import React from "react";


const Slider=()=>{
    return(
<div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
        <div className="carousel-inner">
            <div className="carousel-item active"><img className="w-100 d-block" src="https://i.pinimg.com/564x/b2/db/5e/b2db5eb4073d1677a2fd691cc8bcf184.jpg" alt="SlideImage"/></div>
            <div className="carousel-item"><img className="w-100 d-block" src="https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg" alt="SlideImage"/></div>
            <div className="carousel-item"><img className="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="SlideImage"/></div>
        </div>
        <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
        <ol className="carousel-indicators">
            <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
            <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
        </ol>
    </div>
)}

export {Slider}
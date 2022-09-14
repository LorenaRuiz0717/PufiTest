import React from "react";
import { connect } from "react-redux";

const SectionProduct = ({ products }) => {

  const CreateButton=(props)=>{
   return <button className="visibilityButton">Shop</button>
  }

   const Checkid=(props)=> {
    const unicId=props.unicId
    console.log(unicId)
    if (unicId===1) {
      return (
        <CreateButton/>
      )
      }else {
      return null;
    }}  

  const printProducts = products.map((product) => (
    <section key={product.id} className="containerProduct">
      <div className="containerLink">
        <h1 >{product.id}</h1>
        <img
          className="containerImgLinkProduct"
          src={product.imgLink}
          alt={product.name}
          
        ></img>
      <Checkid unicId={product.id} />
         </div>
      <div className="containerImgProduct">
        <img className="ImgProduct" src={product.img} alt={product.name} ></img>
        <h2 >{product.name}</h2>
        <hr />
        <p >{product.description}</p>
        <a href="#VerMas">Ver mas</a>
      </div>
    </section>
  ));

  return <div>{printProducts}</div>;
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SectionProduct);

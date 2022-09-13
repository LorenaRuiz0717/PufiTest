import React from "react";
// import connect from "react-redux";
import  {connect}  from 'react-redux';

const Section = ({ products }) => {
  return (
    <section>
        <button>Shop</button>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Descripcion del producto, esto es un texto simulado</p>
            <hr />
            <button>Ver mas</button>
          </div>
        ))}
    </section>
  );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps=dispatch=>({})

export default connect(mapStateToProps, mapDispatchToProps)(Section)

import React from "react";
import {
  FaShieldAlt,
  FaQrcode,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { connect } from "react-redux";

const Footer = ({ products }) => {
  const CreateList = products.map((product) => (
    <li key={product.id}>{product.name}</li>
  ));

  const ContainerList = () => (
    <footer>
      <div className="containerFooter">
        <div className="columnFooter">
          <h2>Pufi</h2>
        </div>
        <div className="columnFooter">
          <ul>{CreateList}</ul>
        </div>
        <hr className="hrFooter" />
        <div className="columnFooter">
          <ul>
            <li>Contacto</li>
            <li>Ayuda</li>
            <li>Como comprar</li>
            <li>Terminos & condiciones</li>
          </ul>
        </div>
        <hr className="hrFooter" />
        <div className="columnFooter">
          <ul>
            <li>Compra 100% segura</li>
          </ul>
          <div className="sureBuyIcons">
            <FaQrcode className="qr" />
            <FaShieldAlt />
            <p>Compra con la garantia pufi</p>
          </div>
        </div>
        <hr className="hrFooter" />
        <div className="columnFooter">
          <div className="socialMedia">
            <p>Siguenos en</p>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
  return (
    <div>
      <ContainerList />{" "}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

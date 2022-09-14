import React from "react";
import { FaCouch, FaUmbrella, FaRegCreditCard, FaVest, FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarBrand">
        <h2>Pufi</h2>
      </div>
      <div className="navbarLinks">
        <div className="navbarLink">
          <span>
            <FaCouch />
          </span>
          <a href="#PufiPuff">Pufi Puff</a>
        </div>
        <hr />
        <div className="navbarLink">
          <span>
            <FaUmbrella />
          </span>
          <a href="#PufiRain">Pufi Rain</a>
        </div>
        <hr />
        <div className="navbarLink">
          <span>
            <FaRegCreditCard />
          </span>
          <a href="#PufiCart">Pufi Cart</a>
        </div>
        <hr />
        <div className="navbarLink">
          <span>
            <FaVest />
          </span>
          <a href="#PufiNap">Pufi Nap</a>
        </div>
      </div>
      <div className="navbarUser">
        <span><a href="#cuenta">Mi cuenta</a><FaAngleDown/></span>
      <hr />
      <a href="#Compra">Mi compra</a>
      </div>
    </div>
  );
};

export { Nav };

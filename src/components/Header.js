import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";

function Header() {
  return (
    <div className="Header text-center mt-9">
      <h1 className="text-4xl text-red-400 ">
        Shopping List
        <BsFillBasket2Fill className="inline-block ml-4" />
      </h1>
    </div>
  );
}

export default Header;

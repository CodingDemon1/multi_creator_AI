import React from "react";
import Logo from "../public/images/logo.svg";

function NavBar() {
  return (
    <div className=" w-full bg-white py-4 flex flex-col justify-center sticky top-0">
      <img src={Logo} alt="Logo" className="h-[2.3rem]"/>
    </div>
  );
}

export default NavBar;

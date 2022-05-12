import React from "react";
import BrandLogo from "../assets/images/brand.png";
import IcDropdown from "../assets/icons/dropdodwn.png";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center h-16">
      <img className="w-32" src={BrandLogo} alt="logo-pict" />
      <ul className="flex flex-row gap-5 items-center">
        <li className="flex flex-row gap-1 items-center cursor-pointer">
          our solution
          <span>
            <img className="w-3" src={IcDropdown} alt="icon-ddown" />
          </span>
        </li>
        <li className="flex flex-row gap-1 items-center cursor-pointer">
          Company
          <span>
            <img className="w-3" src={IcDropdown} alt="icon-ddown" />
          </span>
        </li>
        <li className="flex flex-row gap-1 items-center cursor-pointer">
          Recources
          <span>
            <img className="w-3" src={IcDropdown} alt="icon-ddown" />
          </span>
        </li>
      </ul>
      <ul className="flex flex-row gap-3 items-center">
        <li className="cursor-pointer">Login</li>
        <li className="cursor-pointer">
          <button className="btn-transparant px-8 py-3 rounded-full">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
}

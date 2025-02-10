"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import BarsIcon from "@/components/icons/Bars";
import { CartContext } from "@/contexts/CartContext";
import { enTofa } from "@/utils/Utilities";

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const {cart} = useContext(CartContext)

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link href={"/"} className="logo">
          <img src="/images/logo.jpg" alt="logo" />
        </Link>
        <nav className={`nav ${mobileNavActive ? "active" : ""}`}>
          <Link href={"/"} className="nav-link">صفحه اصلی</Link>
          <Link href={"/products"} className="nav-link">فروشگاه</Link>
          <Link href={"/cart"} className="nav-link">سبد خرید</Link>
          {cart.length>0 ? <span className="nav-link">{enTofa(cart.length) }</span> : ""}
        </nav>
        <button className="nav-button" onClick={() => setMobileNavActive((prev) => !prev)}>
          <BarsIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;

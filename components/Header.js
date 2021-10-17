import React, {useState} from 'react';
import Link from 'next/link';
const Header = ({dimensions}) => {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <h3>AGENCY.</h3>
        </Link>
      </div>
      <div className="nav-toggle">
        <div className="hamburger-menu">
          <div className="menu-top">
            <span></span>
          </div>
          <div className="menu-bot">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

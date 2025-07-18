import React, { useRef } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.add('show-menu');
  };

  const closeMenu = () => {
    menuRef.current.classList.remove('show-menu');
  };

  return (
    <div  className='navbar'>
      <img src={logo} alt='logo' className='nav-logo' />

      <img src={menu}  className='nav-mob-open' onClick={openMenu}/>

      <nav ref={menuRef} className='nav-menu'>
        <img src={close} alt='close' className='nav-mob-close' onClick={closeMenu} />
        <ul>
          <li><AnchorLink href="#home">Home</AnchorLink></li>
          <li><AnchorLink href="#work">Features</AnchorLink></li>
          <li><AnchorLink href="#abordi">How it Works</AnchorLink></li>
          <li><AnchorLink href="#expert">Testimonials</AnchorLink></li>
          <li><AnchorLink href="#profession">Showcase</AnchorLink></li>
          <li><AnchorLink href="#stories">Use Case</AnchorLink></li>
          <li><AnchorLink href="#frequent">FAQ</AnchorLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

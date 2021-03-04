import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ButtonLogin, ButtonRegister } from '../../globalStyles'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  }

useEffect(() => {
    showButton()
}, [])

window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              MEDICAL
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                    <NavLinks to='/' onClick={closeMobileMenu}>Home</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to='/services' onClick={closeMobileMenu}>Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/drugs' onClick={closeMobileMenu}>Drugs</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='/contact' onClick={closeMobileMenu}>Contact</NavLinks>
                </NavItem>
                <NavItemBtn>
                    {button ? (
                        <NavBtnLink to="/register">
                            <ButtonRegister primary>Register</ButtonRegister>
                        </NavBtnLink>
                    ) : (
                        <NavBtnLink>
                        <ButtonRegister fontBig primary>Register</ButtonRegister>
                        </NavBtnLink>
                    )}
                </NavItemBtn>
                <NavItemBtn>
                    {button ? (
                        <NavBtnLink to="/login">
                            <ButtonLogin primary>Login</ButtonLogin>
                        </NavBtnLink>
                    ) : (
                        <NavBtnLink>
                        <ButtonLogin fontBig primary>Login</ButtonLogin>
                        </NavBtnLink>
                    )}
                </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

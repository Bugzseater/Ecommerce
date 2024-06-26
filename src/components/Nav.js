import React from 'react';
import styled from 'styled-components';
// import { FiMenu, FiX } from 'react-icons/fi';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f87878;
  color: #fff;
  padding: 1rem;
`;

// const NavItem = styled.li`
//   list-style: none;
//   margin: 1rem 0;

//   a {
//     color: #fff;
//     text-decoration: none;
//     transition: all 0.3s ease;

//     &:hover {
//       color: #bada55;
//     }
//   }
// `;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

// const MobileNavToggle = styled.button`
//   display: block;
//   background-color: transparent;
//   border: none;
//   color: #fff;
//   font-size: 1.5rem;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     color: #bada55;
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const DesktopNav = styled.ul`
//   display: flex;
//   flex-direction: row;

//   @media (max-width: 767px) {
//     display: none;
//   }
// `;

// const MobileNav = styled.ul`
//   display: none;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 0;
//   padding: 0;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: #f87878;
//   transform: translateX(-100%);
//   transition: transform 0.3s ease;

//   @media (max-width: 767px) {
//     display: flex;
//   }
// `;

const NavBar = () => {

  return (
    <Nav>
      <Logo>Fashon Bugs</Logo>
    </Nav>
  );
};

export default NavBar;

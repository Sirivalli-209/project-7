import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://sirivalliakshit1.hackerresume.io/a023d03b-4686-40d0-960c-ed3a18c50790"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={"https://sirivalliakshit1.hackerresume.io/a023d03b-4686-40d0-960c-ed3a18c50790"} />
      </Nav>
    </div>
  );
};

export default Header;

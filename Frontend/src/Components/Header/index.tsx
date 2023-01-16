import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav, ButtonLogout } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Logo>Task Manager</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/users">Users</MenuLink>
        <MenuLink to="/ramdom-dog">Profile</MenuLink>
        <MenuLink to="/users">
          <ButtonLogout children="Logout" />
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Header;

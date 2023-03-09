import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./styles";

import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const { signout } = useAuth();
  const { signed } = useAuth();
  const { user } = useAuth();

  const handleLogout = () => {
    signout();
    navigate("/");
  };

  return (
    <Nav>
      <Logo>TASK MANAGER</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {signed ? (
          <>
            <MenuLink to="/tasks">Tasks</MenuLink>
            <MenuLink to="/profile">Profile</MenuLink>
            <MenuLink to="/" onClick={handleLogout}>
              Logout
            </MenuLink>
          </>
        ) : (
          <MenuLink to="/login">Sign In</MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

export default Header;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const { signout } = useAuth();
  const { signed } = useAuth();

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
          <MenuLink to="/" onClick={() => [signout(), navigate("/")]}>
            Logout
          </MenuLink>
        ) : (
          <MenuLink to="/login">Sign In</MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

export default Header;

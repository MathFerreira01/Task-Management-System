import { useState } from "react";
import { useAuth } from "../../Context/Provider";
import { useNavigate } from "react-router-dom";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { user } = useAuth();
  console.log(user)

  const handleLogout = async () => {
    logout();
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
        {user ? (
          <MenuLink to="/" onClick={handleLogout}>
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

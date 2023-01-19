import { useState } from "react";
import { useAuth } from "../../Context/Provider";
import { useNavigate } from "react-router-dom";
import { Hamburger, Logo, Menu, MenuLink, Nav, ButtonLogout } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    logout();
    navigate("/login");
  };

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
        <ButtonLogout children="Logout" onClick={handleLogout} />
      </Menu>
    </Nav>
  );
};

export default Header;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuLink = styled(Link)`
  padding: 0.8rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #e9e9f2;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    background: #2f3273;
  }

  @media (max-width: 1024px) {
    &:hover {
      background-color: transparent;
      color: #2F3273;
    }
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #636af2;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: #ffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.5rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "300px" : "0"};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #e9e9f2;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1024px) {
    display: flex;
  }
`;


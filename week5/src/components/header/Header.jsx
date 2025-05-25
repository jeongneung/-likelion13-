import { useLocation, Link } from "react-router-dom";
import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";

export default function Header() {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem
          as={Link}
          to="/"
          className={`nav-item ${location.pathname === "/" ? "active home" : ""}`}
        >
          Home
        </NavItem>
        <NavItem
          as={Link}
          to="/project"
          className={`nav-item ${location.pathname === "/project" ? "active project" : ""}`}
        >
          Project
        </NavItem>
        <NavItem
          as={Link}
          to="/diary"
          className={`nav-item ${location.pathname === "/diary" ? "active diary" : ""}`}
        >
          Diary
        </NavItem>
        <NavItem
          as={Link}
          to="/qna"
          className={`nav-item ${location.pathname === "/qna" ? "active qna" : ""}`}
        >
          QnA
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

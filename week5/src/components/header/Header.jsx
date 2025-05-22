import { Link } from "react-router-dom";
import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem>
          <Link to="/">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/project">Project</Link>
        </NavItem>
        <NavItem>
          <Link to="/diary">Diary</Link>
        </NavItem>
        <NavItem>
          <Link to="/qna">QnA</Link>
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
}

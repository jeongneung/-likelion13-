import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const Logo = styled.h1`
  color: #1c1c1c;
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #a7a7a7;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 4px;
  cursor: pointer;

  &.active {
    font-weight: bold;
  }

  &.active.home {
    color: #1C1C1C;
    border-bottom: 2px solid #1C1C1C;
  }

  &.active.project {
    color: #1C1C1C;
    border-bottom: 2px solid #FF6D79;
  }

  &.active.diary {
    color: #1C1C1C;
    border-bottom: 2px solid #01D354;
  }

  &.active.qna {
    color: #1C1C1C;
    border-bottom: 2px solid #1C1C1C;
  }

  &:hover {
    color: black;
  }
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  color: #0bf4f3;
  border: 1px solid #0bf4f3;
  box-shadow: 0 0 5px #0bf4f3, 0 0 5px #0bf4f3 inset;
  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #ff9aff;
    transition: all 0.3s ease;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  &:before {
    height: 0%;
    width: 2px;
  }
  &:hover {
    color: #fff;
    box-shadow: inset 0 0 10px #0bf4f3, 0 0 20px #0bf4f3 inset,
      0 0 20px #0bf4f3 inset;
  }
  &.active {
    color: #fff;
    box-shadow: inset 0 0 10px #0bf4f3, 0 0 20px #0bf4f3 inset,
      0 0 20px #0bf4f3 inset;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  padding: 20px 40px;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #025c7a;
`;

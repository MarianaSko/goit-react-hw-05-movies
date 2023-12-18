import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledNav, StyledNavLink } from './Layout.styled';
// import { StyledLoader } from 'pages/Page.styled';

const Layout = () => {
  return (
    <div>
      <header>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </header>
      {/* <Suspense fallback={<StyledLoader>Loading...</StyledLoader>}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default Layout;

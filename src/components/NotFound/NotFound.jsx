import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return <StyledMessage>Page is not found!</StyledMessage>;
};

export default NotFound;

const StyledMessage = styled.p`
  text-align: center;
  margin-top: 40px;
  color: #025c7a;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 2rem;
`;

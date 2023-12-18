import styled from 'styled-components';

export const StyledReview = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  color: #01232e;
  span {
    font-weight: bold;
    text-transform: uppercase;
    color: #025c7a;
  }
  p {
    font-weight: 500;
  }
`;

export const StyledMessage = styled.p`
  font-style: oblique;
  color: #025c7a;
  text-transform: uppercase;
`;

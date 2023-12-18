import styled from 'styled-components';

export const StyledUl = styled.ul`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  align-items: center;
`;

export const StyledLi = styled.li`
  border-radius: 8px;
  height: 460px;
  box-shadow: rgba(2, 92, 122, 0.25) 0px 54px 55px,
    rgba(2, 92, 122, 0.12) 0px -12px 30px, rgba(2, 92, 122, 0.12) 0px 4px 6px,
    rgba(2, 92, 122, 0.17) 0px 12px 13px, rgba(2, 92, 122, 0.09) 0px -3px 5px;
  /* box-shadow: rgba(2, 92, 122, 0.24) 0px 3px 8px; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100px;
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
  }
  h2 {
    font-style: oblique;
    color: rgb(2, 92, 122);
    text-transform: uppercase;
  }
  p {
    font-weight: 500;
    align-self: flex-start;
  }
`;

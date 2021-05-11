import styled from "styled-components";

export default styled.ul`
  display: flex;
  justify-content: ${({ centered }) => (centered ? "center" : "left")};
  flex-wrap: wrap;
  list-style: none;
`;

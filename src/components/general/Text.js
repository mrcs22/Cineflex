import styled from "styled-components";

export default styled.p`
  display: flex;
  justify-content: ${({ centered }) => (centered ? "center" : "left")};

  align-items: center;

  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  color: #293845;
`;

import styled from "styled-components";

export default styled.p`
  display: flex;
  justify-content: ${({ centered }) => (centered ? "center" : "left")};

  align-items: center;

  height: ${({ tallness }) => tallness};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ weightBold }) => (weightBold ? 700 : 400)};
  color: #293845;
`;

import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  margin-top: 67px;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? "117px" : "")};
  padding: 0 ${({ padding }) => padding || ""};
`;

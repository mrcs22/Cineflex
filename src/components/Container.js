import styled from "styled-components";

export default styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  margin-top: 67px;
  padding: 0 ${({ padding }) => padding || ""};

  @media (min-width: 550px) {
    max-width: 550px;
  }

  @media (min-width: 700px) {
    max-width: 700px;
  }

  @media (min-width: 1150px) {
    max-width: 1150px;
  }
`;

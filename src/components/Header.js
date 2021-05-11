import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 67px;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #c3cfd9;

  h1 {
    font-family: "Roboto";
    font-size: 34px;
    font-weight: 400;

    color: #e8833a;
  }
`;

export default function Header() {
  return (
    <HeaderDiv>
      <h1>CINEFLEX</h1>
    </HeaderDiv>
  );
}

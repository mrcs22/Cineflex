import styled from "styled-components";

export default styled.button`
  height: 42px;
  width: 225px;

  font-size: 18px;
  color: #fff;

  background-color: ${({ bgColor }) => bgColor};

  border: none;
  border-radius: 3px;

  margin: 57px 0 30px calc(50% - 112.5px);

  &:hover {
    filter: brightness(120%);
    color: #dadada;
  }
`;

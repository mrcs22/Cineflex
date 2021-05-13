import styled from "styled-components";

export default styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 26px;
  width: 26px;

  font-size: 11px;

  background-color: ${({ isAvailable }) =>
    isAvailable ? "#c3cfd9" : "#FBE192"};

  &.selected {
    background-color: #8dd7cf;
    border: 1px solid #45bdb0;
  }

  border: 1px solid #808f9d;
  border-radius: 12px;

  margin-right: 7px;
  margin-bottom: 18px;

  cursor: pointer;

  &:nth-child(10n) {
    margin-right: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      filter: brightness(115%);
    }
  }
`;

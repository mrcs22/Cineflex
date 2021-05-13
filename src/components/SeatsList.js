import List from "./general/FlexUl";
import styled from "styled-components";

export default function SeatsList({ seats }) {
  return (
    <List>
      {seats.map(({ name, isAvailable }, id) => (
        <Li isAvailable={isAvailable} key={id}>
          {name.length > 1 ? name : `0${name}`}
        </Li>
      ))}
    </List>
  );
}

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 26px;
  width: 26px;

  font-size: 11px;

  background-color: ${({ isAvailable }) =>
    isAvailable ? "#c3cfd9" : "#FBE192"};

  border: 1px solid #808f9d;
  border-radius: 12px;

  margin-right: 7px;
  margin-bottom: 18px;

  cursor: pointer;

  &:nth-child(10n) {
    margin-right: 0;
  }

  &:hover {
    filter: brightness(115%);
  }
`;

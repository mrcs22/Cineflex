import styled from "styled-components";
import Ul from "./general/FlexUl";
export default function SeatsExample() {
  return (
    <div>
      <ExaplesList>
        <li>
          <Seat bgColor="#8DD7CF"></Seat>
          <p>Selecionado</p>
        </li>
        <li>
          <Seat bgColor="#C3CFD9"></Seat>
          <p>Disponível</p>
        </li>
        <li>
          <Seat bgColor="#FBE192"></Seat>
          <p>Indisponível</p>
        </li>
      </ExaplesList>
    </div>
  );
}

const ExaplesList = styled(Ul)`
  justify-content: space-evenly;
  margin-bottom: 45px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 13px;
      color: #4e5a65;
    }
  }
`;

const Seat = styled.div`
  display: flex;
  align-items: center;

  height: 26px;
  width: 26px;

  font-size: 11px;

  background-color: ${({ bgColor }) => bgColor};

  border: 1px solid #808f9d;
  border-radius: 12px;

  margin-bottom: 7px;
`;

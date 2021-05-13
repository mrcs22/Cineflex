import Text from "./general/Text";
import styled from "styled-components";

export default function ClientInfoInput({ infoType, infoValue, setInfoValue }) {
  const capitalizedInfoType = infoType[0].toUpperCase() + infoType.slice(1);

  return (
    <>
      <Text tallness="25px" fontSize="18px">
        {capitalizedInfoType} do Comprador:
      </Text>
      <TextInput
        onChange={(e) => setInfoValue(e.target.value)}
        placeholder={`Digite seu ${infoType}...`}
        value={infoValue}
      ></TextInput>
    </>
  );
}

const TextInput = styled.input`
  height: 51px;
  width: 327px;
  border: 1px solid #d4d4d4;
  border-radius: 3px;

  padding: 0 18px;
  margin-bottom: 7px;
`;

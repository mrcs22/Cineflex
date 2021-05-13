import { useParams } from "react-router";
import axios from "axios";
import Container from "../components/general/Container";
import Text from "../components/general/Text";
import SeatsList from "../components/SeatsList";
import SeatsExample from "../components/SeatsExample";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Session() {
  const { sessionId } = useParams();
  const [sessionData, setSessionData] = useState([]);
  const { day, movie } = sessionData;
  const [clientName, setClientName] = useState("");
  const [clientCpf, setClientCpf] = useState("");

  const [countedSeats, setCountedSeats] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`
    );

    promise.then((res) => {
      setSessionData(res.data);
      setCountedSeats(
        res.data.seats.map((seat) => {
          return {
            ...seat,
            isSelected: false,
          };
        })
      );
    });
  }, [sessionId]);

  if (sessionData.length === 0) {
    return <></>;
  }

  return (
    <>
      <Container padding="23px" marginBottom>
        <Text tallness="110px" fontSize="24px" centered>
          Selecione o(s) assento(s)
        </Text>
        <SeatsList seats={countedSeats}></SeatsList>
        <SeatsExample />

        <ClientInfoInput
          infoType="nome"
          infoValue={clientName}
          setInfoValue={setClientName}
        ></ClientInfoInput>
        <ClientInfoInput
          infoType="CPF"
          infoValue={clientCpf}
          setInfoValue={setClientCpf}
        ></ClientInfoInput>
      </Container>

      <Footer
        title={movie.title}
        subtitle={`${day.weekday} - ${sessionData.name}`}
        imageSrc={movie.posterURL}
      />
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

function ClientInfoInput({ infoType, infoValue, setInfoValue }) {
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

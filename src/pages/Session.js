import { useParams } from "react-router";
import axios from "axios";
import Container from "../components/general/Container";
import Text from "../components/general/Text";
import SeatsList from "../components/SeatsList";
import SeatsExample from "../components/SeatsExample";
import ClientInfoInput from "../components/ClientInfoInput";
import Button from "../components/general/Button";
import Footer from "../components/footer";

import { useEffect, useState } from "react";

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
        <Button bgColor="#e8833a" onClick={savePurchaseData}>
          Reservar assentos(s)
        </Button>
      </Container>

      <Footer
        title={movie.title}
        subtitle={`${day.weekday} - ${sessionData.name}`}
        imageSrc={movie.posterURL}
      />
    </>
  );

  function savePurchaseData() {
    const Purchasedata = {
      name: clientName,
      cpf: clientCpf,
      movie: movie.title,
      sessioin: `${day.weekday} ${sessionData.name}`,
      seats: countedSeats.filter((seat) => seat.isSelected),
    };

    sessionStorage.setItem(
      "cineflexPurchaseData",
      JSON.stringify(Purchasedata)
    );
  }
}

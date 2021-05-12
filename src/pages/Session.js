import { useParams } from "react-router";
import axios from "axios";
import Container from "../components/general/Container";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function Session() {
  const { sessionId } = useParams();
  const [sessionData, setSessionData] = useState([]);
  const { day, movie } = sessionData;

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`
    );

    promise.then((res) => {
      setSessionData(res.data);
    });
  }, [sessionId]);

  if (sessionData.length === 0) {
    return <></>;
  }

  return (
    <>
      <Container padding="23px" marginBottom></Container>
      <Footer
        title={movie.title}
        subtitle={`${day.weekday} - ${day.date}`}
        imageSrc={movie.posterURL}
      />
    </>
  );
}

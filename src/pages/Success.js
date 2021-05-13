import Text from "../components/general/Text";
import Container from "../components/general/Container";
import styled from "styled-components";
import HomeButton from "../components/general/Button";
import { Link } from "react-router-dom";
import { Suspense } from "react";

export default function Success() {
  const purchaseData = getPurchasedata();

  console.log("sucesso");
  return (
    <Container padding="29px">
      <SucessText tallness="110px" fontSize="24px" centered weightBold>
        Pedido feito com sucesso!
      </SucessText>
      <Text tallness="24px" fontSize="24px" weightBold>
        Filme e sessão
      </Text>
      <PurchaseInfoText
        title={purchaseData.movie}
        subtitle={purchaseData.session}
      />
      <Text tallness="24px" fontSize="24px" weightBold>
        Ingressos
      </Text>
      <Div>
        {purchaseData.seats.map((seat) => (
          <Text key={seat.id} tallness="32px" fontSize="22px">
            Assento {seat.name}
          </Text>
        ))}
      </Div>
      <Text tallness="24px" fontSize="24px" weightBold>
        Comprador
      </Text>
      <PurchaseInfoText title={purchaseData.name} subtitle={purchaseData.cpf} />
      <Link to="/">
        <HomeButton bgColor="#e8833a">Voltar para home</HomeButton>
      </Link>
    </Container>
  );

  function getPurchasedata() {
    return JSON.parse(sessionStorage.getItem("cineflexPurchaseData"));
  }
}

const SucessText = styled(Text)`
  color: #247a6b;
  width: 160px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 25px;
`;

const Div = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`;

function PurchaseInfoText({ title, subtitle }) {
  return (
    <Div>
      <Text tallness="22px" fontSize="22px">
        {title}
      </Text>
      <Text tallness="35px" fontSize="22px">
        {subtitle}
      </Text>
    </Div>
  );
}

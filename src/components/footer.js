import styled from "styled-components";
import MovieCard from "./general/MovieCard";
import Text from "./general/Text";

const FooterDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  height: 117px;
  width: 100vw;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #dfe6ed;

  border-top: 1px solid #9eadba;

  padding: 14px 10px;

  div:first-child {
    margin-right: 14px;
  }
`;

export default function Footer({ title, imageSrc }) {
  return (
    <FooterDiv>
      <MovieCard height="89px" width="69px" title={title} imageSrc={imageSrc} />

      <Text height="40px" width="calc(95% - 69px)" fontSize="26px">
        {title}
      </Text>
    </FooterDiv>
  );
}

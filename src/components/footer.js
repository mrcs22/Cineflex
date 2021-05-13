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

  div:last-child {
    width: calc(95% - 69px);
  }

  p {
    white-space: nowrap;
    overflow: hidden;
  }
`;

export default function Footer({ title, subtitle, imageSrc }) {
  return (
    <FooterDiv>
      <MovieCard tallness="89px" thickness="69px">
        <img src={imageSrc} alt={title} />
      </MovieCard>
      <div>
        <MovieInfo text={title} />
        {subtitle && <MovieInfo text={subtitle} />}
      </div>
    </FooterDiv>
  );

  function MovieInfo({ text }) {
    return (
      <Text talness="28px" fontSize="26px">
        {text}
      </Text>
    );
  }
}

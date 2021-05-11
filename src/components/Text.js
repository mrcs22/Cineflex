import styled from "styled-components";

const TextHolder = styled.div`
  display: flex;
  justify-content: ${(props) => props.aln};
  align-items: center;

  height: ${(props) => props.h};
  font-size: ${(props) => props.fsz};
  color: #293845;
`;

export default function Text({ height, fontSize, alignment, children }) {
  return (
    <TextHolder h={height} fsz={fontSize} aln={alignment}>
      <p>{children}</p>
    </TextHolder>
  );
}

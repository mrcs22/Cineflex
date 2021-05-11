import styled from "styled-components";

export default function Text({ height, fontSize, alignment, text }) {
  const TextHolder = styled.div`
    display: flex;
    justify-content: ${alignment};
    align-items: center;

    height: ${height};
    font-size: ${fontSize};
    color: #293845;

    margin-top: 200px;
  `;
  return (
    <TextHolder>
      <p>{text}</p>
    </TextHolder>
  );
}

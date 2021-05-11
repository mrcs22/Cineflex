import styled from "styled-components";

const Item = styled.li`
  height: 209px;
  width: 145px;

  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  margin: 0 15px;
  margin-bottom: 11px;
  padding: 8px;

  img {
    height: 193px;
    width: 129px;
  }

  &:hover {
    height: 214px;
    width: 149px;

    margin: 6px 13px;
    margin-top: 0;

    img {
      height: 197.5px;
      width: 132px;
    }
  }
`;

export default function MovieCard({ imageSrc, alt }) {
  return (
    <Item>
      <img src={imageSrc} alt="some descritive text" />
    </Item>
  );
}

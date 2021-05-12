import styled from "styled-components";

const Item = styled.div`
  height: ${({ h }) => h};
  width: ${({ w }) => w};

  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  margin: 0 ${({ m }) => (m ? "15px" : "")};
  margin-bottom: ${({ m }) => (m ? "11px" : "")};
  padding: 8px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export default function MovieCard({ imageSrc, title, height, width, margin }) {
  return (
    <Item h={height} w={width} m={margin}>
      <img src={imageSrc} alt={title} />
    </Item>
  );
}

{
  /* 
  &:hover {
    height: 214px;
    width: 149px;

    margin: 6px 13px;
    margin-top: 0;}
   

*/
}

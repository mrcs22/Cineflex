import styled from "styled-components";

export default styled.div`
  height: ${({ tallness }) => tallness};
  width: ${({ thickness }) => thickness};

  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  margin: 0 ${({ apart }) => (apart ? "15px" : "")};
  margin-bottom: ${({ apart }) => (apart ? "11px" : "")};
  padding: 8px;

  img {
    height: 100%;
    width: 100%;
  }
`;

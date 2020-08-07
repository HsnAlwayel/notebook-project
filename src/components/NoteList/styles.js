//Styled components
import styled from "styled-components";

//React Dom
import { Link } from "react-router-dom";

export const NoteListWrapperWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 75%;
  margin-bottom: 4vh;
`;

export const NoteListWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 4vh;
  margin-bottom: 3vh;
`;

export const Title = styled.h1`
  font-size: 3em;
  letter-spacing: 5px;
  font-family: "Chilanka", cursive;
  text-align: center;
  background-color: #f1f2f6;
  padding-top: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 70%;

  h3 {
    :hover {
      cursor: pointer;
    }
  }
`;

export const TagsWrapper = styled.div`
  background-color: #dfe4ea;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  h3 {
    color: black;
    margin-top: 1vh;
    margin-right: 3vw;
    margin-left: 3vw;
    background-color: #ced6e0;
    border: 0.3px grey solid;
    padding: 10px 20px;
    border-radius: 50%;
  }
`;

export const NoteLinkWrapper = styled.div`
  display: flex;
`;

export const NoteLink = styled(Link)`
  text-direction: none;
  color: black;

  :hover {
    text-decoration: none;
    color: #2f3542;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    padding: 10px 20px;
  }
`;

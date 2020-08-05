//Styled components
import styled from "styled-components";

//React Dom
import { Link } from "react-router-dom";

export const SingleNoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 4vh;
  margin-bottom: 4vh;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 200px;

  :hover {
    width: 205px;
    transition: ease-in-out 0.2s;
  }

  p {
    font-size: 2em;
    font-family: "Shadows Into Light", cursive;
    letter-spacing: 3px;
  }
`;

export const NoteImage = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
`;

export const LinkForTheNotes = styled(Link)`
  color: black;
  text-direction: none;

  :hover {
    color: #2c3335;
    text-decoration: none;
  }
`;

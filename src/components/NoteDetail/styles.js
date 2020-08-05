//Styled components
import styled from "styled-components";

//React Dom
import { Link } from "react-router-dom";

export const NoteDetailWrapper = styled.div`
  background: url("https://i.dlpng.com/static/png/434744_preview.png");
  background-position: top top;
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  flex-direction: column;
  flex-wrap; wrap;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20vh;
  width: 80%;
`;

export const NoteTitleWrapper = styled.h1`
  font-size: 4em;
`;

export const NoteBodyWrapper = styled.p`
  font-size: 3em;
  margin-right: 2vw;
  margin-left: 2vw;
  text-align: center;
`;

export const GoBackButton = styled.p`
  font-size: 2em;
  color: #2ecc72;

  :hover {
    cursor: pointer;
    color: #26ae60;
  }
`;

export const GoBackButtonLink = styled(Link)`
  text-direction: none;
  padding-bottom: 30px;

  :hover {
    text-decoration: none;
  }
`;

//Styled components
import styled from "styled-components";

//React Dom
import { Link } from "react-router-dom";

export const NoteItemWrapper = styled.div`
  text-align: center;
  margin-right: 15px;
  margin-left: 15px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVlXunK4__5SIfCE2hGLBXZfCwdVNt-tJ2VA&usqp=CAU");
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  margin-right: 1vw;
  margin-left: 1vw;
  margin-top: 4vh;
  margin-bottom: 4vh;

  p {
    margin-top: 25px;
    font-size: 2em;
  }
`;

export const NoteTitleLink = styled(Link)`
  text-direction: none;
  color: black;

  :hover {
    text-decoration: none;
    color: #2f3542;
  }
`;

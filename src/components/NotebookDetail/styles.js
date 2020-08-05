//styled components
import styled from "styled-components";

//React Dom
import { Link } from "react-router-dom";

export const NotebookDetailWrapper = styled.div`
  background-image: url("https://i.pinimg.com/564x/96/8d/52/968d52235f3b42758e8499c35ac730eb.jpg");
  background-position: top top;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 70%;
  height: 400px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10vh;
`;

export const NotebookName = styled.h1`
  margin-top: 30px;
  font-size: 3.5em;
  color: black;
`;

export const NotebookTitle = styled.h3`
  font-size: 2.5em;
  color: black;
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

  :hover {
    text-decoration: none;
  }
`;

//styled components
import styled from "styled-components";

//React Dom
import { Link } from "react-router-dom";

export const NotebookDetailWrapper = styled.div`
  background-image: url("https://i.pinimg.com/564x/96/8d/52/968d52235f3b42758e8499c35ac730eb.jpg");
  background-position: top top;
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10vh;
`;

export const NotebookName = styled.h1`
  text-align: center;
  margin-top: 30px;
  font-size: 3.5em;
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
  padding-bottom: 30px;

  :hover {
    text-decoration: none;
  }
`;

export const AddButtonWrapper = styled.span`
  font-size: 0.3em;
  margin-left: 20px;
`;

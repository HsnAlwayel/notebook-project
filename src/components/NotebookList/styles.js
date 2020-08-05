//Styled components
import styled from "styled-components";

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
`;

export const NotesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  text-align: center;
  margin-top: 4vh;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 3vh;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

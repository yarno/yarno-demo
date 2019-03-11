import styled from "styled-components";

const primaryColour = "#25c1a9"; // yarno green
const secondaryColour = "#f7b438"; // yarno orange

export const LoginContainer = styled.div`
  background-image: linear-gradient(180deg, #25c1a9 0%, black 89%) !important;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const Input = styled.input`
  width: 85%;
  line-height: 3rem;
  height: 3rem;
  border-radius: 3px 0 0 3px;
  border-color: rgba(210, 210, 210, 0.5);
  border-width: 1px;
  border-style: solid;
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 0.6rem 1.3rem;
  margin: 10px 0;
  font-size: 1.5rem;
  line-height: 2.2rem;
  transition: all 0.2s ease-out;
  color: white;
  background-color: transparent;

  &::placeholder {
    color: rgba(210, 210, 210, 0.5);
  }

  &:focus {
    outline: none;
    border-color: ${primaryColour};
    transition: all 0.2s ease-in;
  }
`;

import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: rgb(181, 222, 238);
  border: none;

  &:hover {
    background-color: rgb(181, 222, 238);
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  padding: 0 30px 0 30px;
  border: none;

  &:hover {
    background-color: #2a64c2;
    border: none;
    color: #dee3e0;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) return googleSignInStyles;

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 15px;
  font-family: "Encode Sans", sans-serif;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;

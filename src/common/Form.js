import styled from "styled-components";

export const Form = styled.form`
  margin-top: 131px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  row-gap: 25px;
  input {
    width: 100%;
    max-width: 769px;
    height: 60px;
    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    padding-left: 22px;
    color: ${(props) => (props.disabled ? "#F2F2F2" : "#000000")};
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px;
    &::placeholder {
      color: #9c9c9c;
    }
  }
  button {
    margin-top: 36px;
    width: 182px;
    height: 60px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    background-color: #5d9040;
    border: 0px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  }
`;

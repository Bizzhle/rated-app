import styled from "@emotion/styled";

export const Main = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 0 10px;
  min-height: 100vh;
`;

export const CardInfo = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 4px;
  margin-top: 20px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color: white;
  color: #0a0213;
  h3,
  p {
    margin: 0;
    padding: 4px;
    font-size: 15px;
  }

  span {
    p {
      padding-right: 10px;
    }
  }
`;

export const Form = styled.div`
  border-radius: 5px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  max-width: 350px;
  margin: 10px auto;
  padding: 8px;
  background-color: orange;

  label {
    font-weight: 700;
  }

  input,
  textarea,
  select {
    font: 1em sans-serif;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #999;
    outline: none;
  }

  input {
    padding: 8px 5px;
    margin: 5px 0;
    font-size: 1rem;
  }

  textarea {
    height: 60px;
    margin: 10px 0;
    padding: 5px;
  }

  select {
    padding: 8px 5px;
    margin: 8px 0;
  }

  & div {
    margin: 10px 0;
  }
  input[type="submit"] {
    background-color: #006fff;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: #006fff;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 12px 5px;
    margin: 12px 0;
    font: 1em sans-serif;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #999;
  }
`;

export const List = styled.div`
  padding: 5px 0;

  li {
    list-style-type: none;
    border-radius: 5px;
    padding: 8px 5px;
    margin: 10px 0;
    background-color: white;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    :hover {
      background-color: blue;
      color: white;
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  text-align: center;
  background-color: orange;
  color: white;
  border-radius: 5px;
  font-weight: 700;

  :hover {
    opacity: 0.5;
    color: #005aff;
  }
`;

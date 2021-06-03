import styled from "@emotion/styled";
import React from "react";

const CateAndShopBtn = () => {
  return (
    <Buttons>
      <button>create new category</button>
      <button>create new shop</button>
    </Buttons>
  );
};

export default CateAndShopBtn;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    padding: 8px;
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: none;
  }
`;

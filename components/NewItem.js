import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const NewItem = () => {
  return (
    <Button>
      <Link href="/createitempage">
        <p>Add a new Item</p>
      </Link>
    </Button>
  );
};

const Button = styled.div`
  width: 100%;
  padding: 0;
  margin-top: 12px;
  text-align: center;
  background-color: orange;
  color: white;
  border-radius: 5px;

  :hover {
    opacity: 0.5;
    color: #005aff;
  }

  p {
    font-weight: 700;
    padding: 12px;
    margin: 0;
  }
`;

export default NewItem;

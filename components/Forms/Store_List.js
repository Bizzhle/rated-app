import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import styled from "@emotion/styled";
import { Main, List } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";

const Store_List = ({ storeList }) => {
  return (
    <Main>
      <Navbar />
      <div>
        <h1>Store List</h1>
        <div>
          <List>
            {storeList &&
              storeList.map((value, index) => {
                return (
                  <Link key={index} href={`/stores/${value._id}`}>
                    <li>{value.name}</li>
                  </Link>
                );
              })}
          </List>
        </div>
        <Link href="/store_form">
          <Button>add a new store</Button>
        </Link>
      </div>
    </Main>
  );
};

const Button = styled.div`
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

export default Store_List;

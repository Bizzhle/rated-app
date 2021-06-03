import React from "react";
import { Main } from "../../styles";
import Card from "../Card";
import Navbar from "../Navbar";

const Store_Detail = () => {
  return (
    <Main>
      <Navbar />

      <div>
        <h2>Items from this store</h2>

        <Card />
      </div>
    </Main>
  );
};

export default Store_Detail;

import styled from "@emotion/styled/";
import React from "react";
import Card from "./Card";
import CategoryBar from "./CategoryBar";
import Item_List from "./Forms/Item_List";
import Navbar from "./Navbar";
import NewItem from "./NewItem";
import { Main } from "../styles";

const Homepage = () => {
  return (
    <Main>
      <>
        <Navbar />
        <CategoryBar />
        <NewItem />
      </>
    </Main>
  );
};

export default Homepage;

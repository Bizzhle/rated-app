import React from "react";
import Card from "../Card";
import Navbar from "../Navbar";
import { Main, CardInfo } from "../../styles";

// import category from "../../server/models/category";

const Category_Detail = ({ categoryDetail }) => {
  console.log({ categoryDetail });

  const cards = categoryDetail.category_items.map((value, index) => {
    return (
      <CardInfo key={index}>
        <h3>{value.title}</h3>
        <p>rating: {value.rating}</p>
        <span>
          <p>category: {value.name}</p>
          <p>store: {value.store.name}</p>
        </span>

        <p>{value.comment}</p>
      </CardInfo>
    );
  });

  return (
    <Main>
      <Navbar />
      <div>
        <h3>Items in {categoryDetail.category.name}</h3>
        <div>{cards}</div>
      </div>
    </Main>
  );
};

export default Category_Detail;

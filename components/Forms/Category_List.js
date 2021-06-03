import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import styled from "@emotion/styled";
import { Main, List } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";

const Category_List = ({ categoryList }) => {
  // const [categoryList, setCategoryList] = useState([]);

  // async function getData() {
  //   const response = await axios.get(`${BASE_API_URL}/catalog/categories`);

  //   setCategoryList(response.data);
  // }
  // console.log(categoryList);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Main>
      <Navbar />
      <div>
        <h2>Category List</h2>
        <div>
          <List>
            {categoryList &&
              categoryList.map((value, index) => {
                return (
                  <Link key={index} href={`/categorys/${value._id}`}>
                    <li>{value.name}</li>
                  </Link>
                );
              })}
          </List>
        </div>

        <Link href="/category_form">
          <Button>add a new category</Button>
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

export default Category_List;

import { useEffect } from "react";
import Navbar from "../Navbar";
import CateAndShopBtn from "./CateAndShopBtn";
import ItemForm from "./ItemForm";
import { Main } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";

const CreateItemPage = () => {
  async function getData() {
    const response = await fetch(`${BASE_API_URL}/users`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <Main>
      <Navbar />

      <ItemForm />
    </Main>
  );
};

export default CreateItemPage;

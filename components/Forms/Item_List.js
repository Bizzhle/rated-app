import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import styled from "@emotion/styled";
import { Main, List, Button } from "../../styles";
import { BASE_API_URL } from "../../pages/api/constants";
import axios from "axios";
import { useRouter } from "next/router";
import Card from "../Card";
import CategoryBar from "../CategoryBar";

const Item_List = ({ itemList }) => {
  console.log(itemList);
  // const router = useRouter();
  // const { id } = router.query;
  // const [itemList, setItemList] = useState([]);

  // async function getData() {
  //   const response = await axios.get(`${BASE_API_URL}/catalog/items`);

  //   setItemList(response.data);
  // }
  // console.table(itemList);
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <List>
        <h2>Item List</h2>
        {itemList &&
          itemList.map((value, index) => {
            return <Card key={index} value={value} />;
          })}
      </List>

      {/* <Link href="/category_form">
          <Button>add a new item</Button>
        </Link> */}
    </div>
  );
};

export default Item_List;

// export const getServerSideProps = async (context) => {
//   const res = await axios.get(`${BASE_API_URL}/catalog/items`);
//   const itemList = await res.data;

//   return {
//     props: {
//       itemList,
//     },
//   };
// };

import { useEffect } from "react";
import Card from "../Card";
import Navbar from "../Navbar";
import { Main, CardInfo } from "../../styles";
import { useRouter } from "next/router";

const Item_Detail = ({ itemDetail }) => {
  console.log(itemDetail);

  // const router = useRouter();
  // const { id } = router.query;

  // async function getData() {
  //   const response = await axios.get(`${BASE_API_URL}/catalog/item/:id`);

  //   console.log(response.data);
  // }
  // // console.table(itemList);
  // useEffect(() => {
  //   console.log("fetching");
  //   getData();
  // }, []);

  // useEffect(() => {
  //   console.log("fetching");
  //   const fetchItems = async () => {
  //     const response = await axios.get(`${BASE_API_URL}/catalog/items`);
  //     console.log(response.data);
  //   };
  // }, [id]);

  return (
    <Main>
      <Navbar />
      <div>
        <h2>{itemDetail.results.title}</h2>
        <CardInfo>
          <h3>{itemDetail.results.title}</h3>
          <p>{itemDetail.results.rating}</p>
          <span>
            <p>{itemDetail.results.category}</p>
            <p>{itemDetail.results.store}</p>
          </span>

          <p>comment</p>
        </CardInfo>
      </div>
    </Main>
  );
};

export default Item_Detail;

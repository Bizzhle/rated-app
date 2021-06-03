import { CardInfo } from "../styles";

import Link from "next/link";
import styled from "@emotion/styled";

const Card = ({ value }) => {
  // const [itemDetail, setItemDetail] = useState([]);

  // async function getData() {
  //   const response = await axios.get(`${BASE_API_URL}/catalog/item/:id`);

  //   console.log(response.data);
  // }

  // useEffect(() => {
  //   getData();
  // }, [id]);

  return (
    <CardDiv>
      <Link href={`/itemx/${value._id}`}>
        <li>{value.title}</li>
      </Link>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  font-size: 18px;
  :hover {
    background-color: blue;
    color: white;
  }

  li {
    padding: 8px;
    margin: 10px 0;
  }
`;

export default Card;

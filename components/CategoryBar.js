import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";

const CategoryBar = () => {
  return (
    <Bar>
      <ul>
        <li>
          <Link href="/category_list">CATEGORIES</Link>
        </li>

        <li>
          <Link href="/store_list">STORES</Link>
        </li>
      </ul>
    </Bar>
  );
};

const Bar = styled.div`
  /* border: 3px solid #d6d1ce; */
  background-color: white;
  color: #0a0213;
  border-radius: 5px;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  ul {
    list-style-type: none;
    padding: 10px;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: space-around;
    font-weight: 700;
    font-size: 15px;
    /* grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr; */
  }
`;

export default CategoryBar;

import React, { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Link href="/">
        <h1>Rated</h1>
      </Link>

      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseMenu /> : <Menu />}
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  color: orange;
  padding: 8px 0;

  h1 {
    font-weight: 700;
    margin: 0;
    cursor: pointer;
  }

  & div {
    position: absolute;
    top: 20px;
    right: 8px;
  }
`;

const Menu = styled(IoMdMenu)`
  transform: scale(2);
  margin: 5%;
`;

const CloseMenu = styled(IoMdClose)`
  transform: scale(2);
  margin: 5%;
`;

export default Navbar;

import { useState } from "react";
// import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import Navbar from "../Navbar";
import { Main, Form } from "../../styles";

const Category_Form = () => {
  const [category, setCategory] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Main>
      <Navbar />
      <h1>Create a category</h1>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              value={category}
              placeholder="Enter a new category"
              autoComplete="off"
              onChange={handleChange}
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </Form>
    </Main>
  );
};

export default Category_Form;

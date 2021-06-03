import { useState } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import Navbar from "../Navbar";
import { Main, Form } from "../../styles";
// import { appendErrors } from "react-hook-form";
import { BASE_API_URL } from "../../pages/api/constants";

const Store_form = () => {
  const [store, setStore] = useState("");
  const [errors, setErrors] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await axios.post(`${BASE_API_URL}/catalog/store/create`, {
    //   store,
    // });

    try {
      await axios.post(`${BASE_API_URL}/catalog/store/create`, {
        store,
      });
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data);
      }
    }

    console.log(store);
  };

  const handleChange = (e) => {
    setStore(e.target.value);
  };
  return (
    <Main>
      <Navbar />
      <h2>Create a new store</h2>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="store_name">Store:</label>
            <input
              type="text"
              name="store_name"
              value={store}
              placeholder="Enter name of store"
              autoComplete="off"
              onChange={handleChange}
              required
            />
            {errors.store_name && <p>{errors.user_email.message}</p>}
          </div>

          <input type="submit" />
        </form>
      </Form>
    </Main>
  );
};

export default Store_form;

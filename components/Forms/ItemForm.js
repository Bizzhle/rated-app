import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { Form } from "../../styles";

const ItemForm = () => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [store, setStore] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  //   // console.log("i changed");
  //   console.log(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ item, category, store, rating, comment });
    setItem("");
    setCategory("");
    setStore("");
    setRating("");
    setComment("");
  };

  return (
    <>
      <h2>Create a new Item</h2>
      <Form>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="itemName">Item Name:</label>
            <input
              type="text"
              value={item}
              placeholder="Enter name of item"
              autoComplete="off"
              onChange={(e) => setItem(e.target.value)}
              required

              // {...register("itemName", {
              //   required: true,
              //   maxLength: 30,
              //   pattern: {
              //     value: /^[a-zA-Z0-9]+$/,
              //     message: "invalid item name",
              //   },
              // })}
            />
            {/* {errors.itemName?.type === "required" && "Item name is required"} */}
          </div>

          <div>
            <label htmlFor="itemName">Select Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="-">Select a category</option>
              <option value="Wine">Wine</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Spice">Spice</option>
              <option value="Cheese">Cheese</option>
            </select>
          </div>

          <div>
            <label htmlFor="itemName">Select Store:</label>

            <select value={store} onChange={(e) => setStore(e.target.value)}>
              <option value="-">Select a store</option>
              <option value="aldi">Aldi</option>
              <option value="lidl">Lidl</option>
              <option value="rewe">Rewe</option>
              <option value="otto">Otto</option>
            </select>
          </div>

          <div>
            <label htmlFor="itemName">Select a rating:</label>

            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="-">chose a rating</option>
              <option value="bad">Bad</option>
              <option value="good">Good</option>
              <option value="verygood">Very Good</option>
              <option value="excellent">Excellent</option>
            </select>
          </div>

          <textarea
            placeholder="write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </Form>
    </>
  );
};

export default ItemForm;

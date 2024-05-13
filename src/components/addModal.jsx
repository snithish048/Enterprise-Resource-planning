import React, { useState, useContext } from "react";

import { MyContext } from "../context/appContext";

export default function AddModal({ setIsAddForm }) {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const { setProductData } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = Math.ceil(Math.random() * 1000);
    let newValue = {
      id: n,
      name: name,
      category: category,
      price: Number(price),
      stock: Number(stock),
    };
    setProductData((preValue) => [...preValue, newValue]);
    setIsAddForm(false);
  };

  return (
    <>
      <div className="overlay">
        <div className="modal">
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <h1 className="text-2xl font-medium ">Add product</h1>{" "}
              <h1
                className="inline absolute top-4 right-8"
                onClick={() => setIsAddForm(false)}
              >
                X
              </h1>
            </div>
            <input
              className="inputStyle"
              type="text"
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="inputStyle"
              type="text"
              id="category"
              value={category}
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              className="inputStyle"
              type="number"
              id="price"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className="inputStyle"
              type="number"
              id="stock"
              value={stock}
              placeholder="Stock"
              onChange={(e) => setStock(e.target.value)}
            />

            <button
              className="btn text-white w-1/4"
              onClick={handleSubmit}
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

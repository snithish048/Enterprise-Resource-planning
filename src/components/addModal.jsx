import React, { useState, useContext } from "react";
import { MyContext } from "../context/appContext";
import close from "../assets/icons/close.svg";

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
              <img
                src={close}
                alt="Close"
                className="inline absolute top-4 right-8 h-[2rem]"
                onClick={() => setIsAddForm(false)}
              />
            </div>
            <input
              className="inputStyle"
              required
              type="text"
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="inputStyle"
              required
              type="text"
              id="category"
              value={category}
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              className="inputStyle"
              required
              type="number"
              id="price"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className="inputStyle"
              required
              type="number"
              id="stock"
              value={stock}
              placeholder="Stock"
              onChange={(e) => setStock(e.target.value)}
            />
            <div className="flex justify-between w-4/6 flex-wrap ">
              <button className="btn " onClick={handleSubmit} type="submit">
                Update
              </button>
              <button
                className="btn"
                onClick={() => setIsAddForm(false)}
                type="submit"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

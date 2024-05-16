import React, { useContext, useState } from "react";
import { MyContext } from "../context/appContext";
import close from "../assets/icons/close.svg";

export default function EditModal({ setIsEditForm }) {
  const { formValue, setFormValue, setProductData } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setProductData((preValue) => {
      preValue.map((product, i) => {
        if (product.id === formValue.id) {
          preValue[i] = formValue;
        }
      });
      return preValue;
    });
    setIsEditForm(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue((preValue) => {
      const updatedValue = { ...preValue, [id]: value };
      console.log(updatedValue);
      return updatedValue;
    });
  };

  const onDelete = () => {
    setProductData((preValue) => {
      return preValue.filter((product) => !(product.id === formValue.id));
    });
    setIsEditForm(false);
  };

  return (
    <div className="overlay">
      <div className="modal ">
        <form
          className="form "
          autoComplete="off"
          onChange={(e) => handleChange(e)}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <h3 className="text-2xl font-medium ">Edit product</h3>
            <img
              src={close}
              alt="Close"
              className="inline absolute top-4 right-8 h-[2rem]"
              onClick={() => setIsEditForm(false)}
            />
          </div>
          <input
            className="inputStyle"
            required
            id="name"
            label="Name"
            defaultValue={formValue.name}
            helperText="Incorrect entry."
          />
          <input
            className="inputStyle"
            required
            id="category"
            label="Category"
            defaultValue={formValue.category}
          />
          <input
            className="inputStyle"
            required
            id="price"
            label="Price"
            type="number"
            defaultValue={formValue.price}
          />
          <input
            className="inputStyle"
            required
            id="stock"
            label="Stock"
            type="number"
            defaultValue={formValue.stock}
          />
          <div className="flex justify-between w-4/6 flex-wrap ">
            <button className="btn " onClick={onDelete}>
              Delete
            </button>
            <button className="btn mx-4" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState, useContext } from "react";
import EditModal from "./editModal";
import AddModal from "./addModal";
import { MyContext } from "../context/appContext";
import styles from "../styles.module.css";

export default function ProductTable() {
  const columns = [
    { name: "Id" },
    { name: "Name" },
    { name: "Category" },
    { name: "Stock" },
    { name: "Price" },
  ];

  const [isEditForm, setIsEditForm] = useState(false);
  const [isAddForm, setIsAddForm] = useState(false);

  const { productData, setFormValue } = useContext(MyContext);

  const handleEdit = (data) => {
    setFormValue(data);
    setIsEditForm(!isEditForm);
  };

  const handleAdd = () => {
    setIsAddForm(true);
  };
  return (
    <>
      {isAddForm && <AddModal setIsAddForm={setIsAddForm} />}
      {isEditForm && <EditModal setIsEditForm={setIsEditForm} />}
      <div className="cover">
        <div className="p-4">
          <h1 className="tableCaption inline">Product Details</h1>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.tableStyle}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productData &&
                productData.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.category}</td>
                      <td>{val.stock}</td>
                      <td>{val.price}</td>
                      <td>
                        <button onClick={() => handleEdit(val)} className="btn">
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button onClick={handleAdd} className="btn text-white ">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

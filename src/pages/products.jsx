import React, { useEffect, useState, useContext } from "react";
import EditModal from "../components/editModal";
import AddModal from "../components/addModal";
import { MyContext } from "../context/appContext";

export default function Products() {
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
          <h1 className="tableCaption ">Product Details</h1>
        </div>
        <div className="tableContainer">
          <table className="tableStyle">
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
        </div>
        <div className="flex justify-center m-[2rem]">
          <button onClick={handleAdd} className="btn">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

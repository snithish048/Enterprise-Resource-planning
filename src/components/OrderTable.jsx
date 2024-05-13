import React, { useContext, useState } from "react";
import { MyContext } from "../context/appContext";
import styles from "../styles.module.css";

export default function OrderTable() {
  const { orderData, setOrderData } = useContext(MyContext);
  // const [selectedOption, setSelectedOption] = useState('');

  const handleDelete = (val) => {
    setOrderData((prevValue) => {
      return prevValue.filter((row, i) => !(row.id === val.id));
    });
  };

  const handleChange = (e, key) => {
    const value = e.target.value;
    setOrderData((preValue) => {
      let newValue = [...preValue];
      newValue[key].status = value;
      return newValue;
    });
    console.log(orderData);
  };

  return (
    <>
      <div className="cover">
        <h1 className="tableCaption">Order Details</h1>
        <div className={styles.tableContainer}>
          <table className={styles.tableStyle}>
            <thead>
              <tr>
                <th>orderId</th>
                <th>customerName</th>
                <th>orderDate</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.orderId}</td>
                    <td>{val.customerName}</td>
                    <td>{val.orderDate}</td>
                    <td>
                      <select
                        className="btn"
                        value={val.status}
                        onChange={(e) => handleChange(e, key)}
                      >
                        <option id="pending" value="Pending">
                          Pending
                        </option>
                        <option id="delivered" value="Delivered">
                          Delivered
                        </option>
                        <option id="Cancelled" value="Cancelled">
                          Cancelled
                        </option>
                      </select>
                    </td>
                    <td>
                      <button className="btn" onClick={() => handleDelete(val)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

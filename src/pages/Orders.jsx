import React, { useContext, useState } from "react";
import { MyContext } from "../context/appContext";
import OrderDetails from "../components/orderDetails";

export default function Orders() {
  const { orderData, setOrderData } = useContext(MyContext);
  const [form, setForm] = useState(false);
  const [value, setValue] = useState();

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

  const onOrderClick = (data) => {
    setForm(true);
    setValue(data);
  };

  return (
    <>
      {form && <OrderDetails value={value} setForm={setForm} />}
      <div className="cover">
        <h1 className="tableCaption">Order Details</h1>
        <div className="tableContainer">
          <table className="tableStyle">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Customer Name</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((val, key) => {
                return (
                  <tr key={key}>
                    <td
                      onClick={() => onOrderClick(val)}
                      className="text-primary font-bold hover:text-secondary cursor-pointer"
                    >
                      {val.orderId}
                    </td>
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

import React, { useState } from "react";
import { order } from "../data/order";
import { product } from "../data/product";

export const MyContext = React.createContext();

export const AppContext = ({ children }) => {

  const [orderData, setOrderData] = useState(order);

  const [productData, setProductData] = useState(product);

  
  const [formValue, setFormValue] = useState();

  return (
    <MyContext.Provider
      value={{
        orderData,
        setOrderData,
        productData,
        setProductData,
        formValue,
        setFormValue,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

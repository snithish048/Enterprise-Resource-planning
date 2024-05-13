import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import "./App.css";
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Products from "./pages/products";
import OrderCalendar from "./pages/OrderCalendar";

export default function App() {
  return (
  //  <Layout/>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Layout />}>
       <Route index element={<Dashboard />} />
       <Route path="orders" element={<Orders />} />
       <Route path="products" element={<Products />} />
       <Route path="calendar" element={<OrderCalendar />} />
       {/* <Route path="*" element={<NoPage />} /> */}
     </Route>
   </Routes>
 </BrowserRouter>
  );
}
 


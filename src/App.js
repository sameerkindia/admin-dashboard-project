import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import NotFound from "./page/NotFound";
import Dashboard from "./page/Dashboard";
import Product from "./page/Product";
import Customer from "./page/Customer";
import Help from "./page/Help";
import Promote from "./page/Promote";
import Income from "./page/Income";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/income" element={<Income />} />
          <Route path="/help" element={<Help />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

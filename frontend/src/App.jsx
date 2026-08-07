import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

// Seller
import SellerLayout from "./layouts/SellerLayout";
import SellerDashboard from "./seller/Dashboard";
import UploadProduct from "./seller/UploadProduct";
import MyProducts from "./seller/MyProducts";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Seller */}
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<SellerDashboard />} />
        <Route path="upload" element={<UploadProduct />} />
        <Route path="products" element={<MyProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
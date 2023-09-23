import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Shop,
  ShopCart,
  Dashboard,
  Register,
  LoginPage,
  Error,
} from "../../Pages";
import CreationProduct from "../../Components/Dashborad/CreationProduct";
import SingelProduct from "../../Components/SingelProduct/SingelProduct.jsx";
import ProtectedRoutesAdmin from "../../Components/ProtectedRoute/ProtectedRoutesAdmin";
import ProtectedRoutesLogin from "../../Components/ProtectedRoute/ProtectedRoutesLogin";

function AppRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":catType/:category/:sub" element={<Shop />} />
      <Route path=":catType/:category" element={<Shop />} />
      <Route path=":catType" element={<Shop />} />
      <Route path="shop/singleProduct/:id" element={<SingelProduct />} />
      <Route path="ShopCart" element={<ShopCart />} />
      <Route path="*" element={<Error />} />
      <Route
        path="login"
        element={
          <ProtectedRoutesLogin>
            <LoginPage />
          </ProtectedRoutesLogin>
        }
      />
      <Route
        path="Register"
        element={
          <ProtectedRoutesLogin>
            <Register />
          </ProtectedRoutesLogin>
        }
      />
      <Route
        path="Dashboard"
        element={
          <ProtectedRoutesAdmin>
            <Dashboard />
          </ProtectedRoutesAdmin>
        }
      />
      <Route
        path="Edit/:id"
        element={
          <ProtectedRoutesAdmin>
            <CreationProduct />
          </ProtectedRoutesAdmin>
        }
      />
      <Route
        path="addProducts"
        element={
          <ProtectedRoutesAdmin>
            <CreationProduct />
          </ProtectedRoutesAdmin>
        }
      />
    </Routes>
  );
}

export default AppRoutes;

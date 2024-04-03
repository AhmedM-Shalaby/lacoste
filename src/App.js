import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  calcQuantities,
  getCartData,
  updataCartData,
} from "./Store/Slices/Cart";
import { ToastContainer } from "react-toastify";
import { baseUrl } from "./Api/httpService";
import { GetData } from "./Store/Slices/Products";
import AppRoutes from "./Components/Router/Router";
import { GetNav } from "./Store/Slices/ConigPages";
import MyNav from "./Components/MyNav/MyNav";
import { Footer } from "./Pages";

function App() {
  const cart = useSelector((state) => state.shopCart.cart);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const url = `${baseUrl}`;

  useEffect(() => {
    dispatch(GetData(`${url}/products`));
    dispatch(GetNav(`${url}/categoriesNav`));
  }, [url]);
  useEffect(() => {
    if (isAuth) {
      dispatch(getCartData(user.id));
    }
  }, []);
  useEffect(() => {
    if (isAuth) dispatch(updataCartData({ id: user.id, cart }));
    dispatch(calcQuantities());
  }, [cart, dispatch]);
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <MyNav />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Checkout from "../components/Checkout/Checkout";
import Payment from "../components/Payment/Payment";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="payment" element={<Payment />}></Route>
    </Route>
  )
);

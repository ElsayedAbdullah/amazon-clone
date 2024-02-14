import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Homepage from "../components/Homepage";
import Login from "../components/Login/Login";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Route>
  )
);

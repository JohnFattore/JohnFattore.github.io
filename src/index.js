import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import { Provider } from 'react-redux'
//import store from './store'
import "./index.css";
import TopNavigation from "./components/TopNavigation"
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio"
import Allocation from "./pages/Allocation";
import Transaction from "./pages/Transaction"
import Philosophy from "./pages/Philosophy"
import Watchlist from "./pages/WatchList"
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  },
  {
    path: "/transaction",
    element: <Transaction />,  },
  {
    path: "/login",
    element: <Login />,  },
  {
    path: "/portfolio",
    element: <Portfolio />,  },
  {
    path: "/allocation",
    element: <Allocation />,  },
  {
    path: "/register",
    element: <Register />,  },
  {
    path: "/philosophy",
    element: <Philosophy />,  },
    {
      path: "/watchlist",
      element: <Watchlist />,  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<Provider store={store}>
  <div class="mb-3">
    <TopNavigation />
    <RouterProvider router={router} />
    <Footer />
  </div>
  //</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

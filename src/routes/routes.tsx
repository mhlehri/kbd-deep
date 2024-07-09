import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <div>Hello products</div>,
        children: [
          {
            path: ":productId",
            element: <div>Hello productId</div>,
          },
        ],
      },
      { path: "cart", element: <div>Hello cart</div> },
      { path: "checkout", element: <div>Hello checkout</div> },
      { path: "dashboard", element: <div>Hello dashboard</div> },
      { path: "about-us", element: <div>Hello about-us</div> },
      { path: "contact-us", element: <div>Hello contact-us</div> },
    ],
  },
  {},
]);

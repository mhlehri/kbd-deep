import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";

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
        element: <Products />,
      },
      {
        path: "products/:productSlug",
        loader: async ({ request, params }) => {
          return fetch(
            `http:localhost:1000/api/products/${params.productSlug}`,
            {
              signal: request.signal,
            }
          );
        },
        element: <ProductDetails />,
      },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
    ],
  },
  {},
]);

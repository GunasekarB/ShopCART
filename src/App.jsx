import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./components/Products";
import SignUp from "./Pages/SignUp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./Pages/ProductList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import NotFound from "./Pages/NotFound";
import NewProduct from "./Pages/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import WishList from "./Pages/WishList";
import OrderPlaced from "./components/OrderPlaced";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

function RootLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "products",
          element: <Products />,
          children: [
            { index: true, element: <ProductList /> },
            { path: "list", element: <ProductList /> },
            { path: "details", element: <ProductDetails /> },
          ],
        },
        { path: "login", element: <Login /> },
        { path: "sign-up", element: <SignUp /> },
        { path: "newProduct", element: <NewProduct /> },
        { path: "update/:id", element: <UpdateProduct /> },
        { path: "wishlist", element: <WishList /> },
        { path: "order-confirmed", element: <OrderPlaced /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    // Opt-in to the v7 startTransition behavior to silence the future flag warning
    future: { v7_startTransition: true },
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

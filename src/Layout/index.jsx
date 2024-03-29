import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import { useSelector } from "react-redux";
import NotFound from "../Components/NotFound";
import Spinner from "../Components/Spinner";
import Cart from "../Pages/Cart";
import CheckOut from "../Pages/CheckOut";
import LoginHome from "../Pages/LoginHome";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Admin from "../Pages/Admin";
import Pizza from "../Components/AdminComponents/Pizza";
import Category from "../Components/AdminComponents/Category";
import Drinks from "../Components/AdminComponents/Drinks";
import EditPizza from "../Components/AdminComponents/EditPizza";
import Users from "../Components/AdminComponents/Users";
import Orders from "../Components/AdminComponents/Orders";
import { ToastContainer, Zoom } from "react-toastify";
import IsAdmin from "../Components/protectedRoutes/IsAdmin";
import IsLogin from "../Components/protectedRoutes/IsLogin";
import NotLogin from "../Components/protectedRoutes/NotLogin";

export default function Layout() {
  const cart = useSelector((state) => state.cart.products);
  let [totalPrice, setTotalPrice] = useState();
  return (
    <>
      <BrowserRouter>
        <div className="text-center">
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Zoom}
          />
          <nav>
            <Navbar />
          </nav>
          <main className="relative">
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="blog/:id" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/login"
                  element={
                    <NotLogin>
                      <LoginHome />
                    </NotLogin>
                  }
                >
                  <Route index element={<Login />} />
                  <Route path="register" element={<Register />} />
                </Route>
                <Route
                  path="/cart"
                  element={<Cart sendTotalPrice={setTotalPrice} />}
                />
                <Route
                  path="/checkout"
                  element={
                    <IsLogin>
                      <CheckOut total={totalPrice} />
                    </IsLogin>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <IsAdmin>
                      <Admin />
                    </IsAdmin>
                  }
                >
                  <Route path="pizza" element={<Pizza />} />
                  <Route path="pizza/:id" element={<EditPizza />} />
                  <Route path="drinks" element={<Drinks />} />
                  <Route path="drinks/:id" element={<Drinks />} />
                  <Route path="category" element={<Category />} />
                  <Route path="category/:id" element={<Category />} />
                  <Route path="users" element={<Users />} />
                  <Route path="users/:id" element={<Category />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="orders/:id" element={<Category />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

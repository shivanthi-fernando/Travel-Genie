// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Blogs from "../src/pages/Blogs";
import BlogsDetails from "../src/pages/BlogsDetails";
import PlacesRoute from "../src/pages/PlacesRoute";
import NoPage from "../src/pages/NoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogsDetails />} />
            <Route path="/places" element={<PlacesRoute />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

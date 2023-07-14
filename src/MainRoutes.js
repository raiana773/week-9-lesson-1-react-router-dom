import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import { Layout } from "./components/Layout";
import UserPage from "./components/UserPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="user" element={<UserPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;

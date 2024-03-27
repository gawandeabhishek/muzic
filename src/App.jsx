import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import Show from "./components/Show";

const App = () => {
  return (
    <div className="bg-cyan-50/30 dark:bg-slate-900 select-none h-fit min-h-screen scroll-smooth scroll-mr-2 scroll-p-2 touch-auto transition-all">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/user" element={<User />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

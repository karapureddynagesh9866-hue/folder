import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/Mainlayout.jsx";
import ServicesLayout from "./layouts/ServicesLayout.jsx";

import Home from "./pages1/Home.jsx";
import About from "./pages1/About.jsx";
import Products from "./pages1/Products.jsx";
import Contact from "./pages1/Contact.jsx";
import NotFound from "./pages1/NotFound.jsx";

import ServicesIndex from "./pages/services/servicesindex.jsx";
import WebDevelopment from "./pages/services/WebDevelopment.jsx";
import AppDevelopment from "./pages/services/Appdevelopment.jsx";
import UIUXDesign from "./pages/services/UIUXdesign.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="services" element={<ServicesLayout />}>
          <Route index element={<ServicesIndex />} />
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="ui-ux-design" element={<UIUXDesign />} />
        </Route>

        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

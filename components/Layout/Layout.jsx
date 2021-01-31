import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <a
        href="#"
        id="back-to-top"
        title="Back to top"
        style={{ display: "none" }}
      >
        &uarr;
      </a>
    </>
  );
}

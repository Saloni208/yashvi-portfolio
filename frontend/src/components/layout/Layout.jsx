import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

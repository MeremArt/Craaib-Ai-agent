import React from "react";
import { Header } from "../components/Header";
import PlatformPage from "../platform/PlatformPage";
import Footer from "../components/Footer";
const page = () => {
  return (
    <div>
      <div>
        <Header />
        <hr className="bg-white border-1 border-white" />
      </div>
      <div>
        <PlatformPage />
      </div>
      <Footer />
    </div>
  );
};

export default page;

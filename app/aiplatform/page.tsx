"use client";
import React, { useState } from "react";
import { Header } from "../components/Header";
import PlatformPage from "../platform/PlatformPage";
import Footer from "../components/Footer";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-400">Loading AI Agents...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <hr className="bg-white border-1 border-white" />
      <main>
        <PlatformPage />
      </main>
      <Footer />
    </div>
  );
};

export default Page;

import React, { useEffect, useState } from "react";
import Card from "../Card";
import Loader from "../Loader";

const Premium = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetch or image loading)
    }, 1000);

    return () => clearTimeout(loadContent); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        <Loader />
      </div>
    ); // Render Loader component while loading
  }

  return (
    <div className="px-20 py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Premium Business Cards</h1>
        <p className="text-xl mt-2">
          Be Ready To Make Connections With Easy-To-Customize, High-Quality
          Cards.
        </p>
      </div>

      <div className="text-center mb-8 space-y-4">
        <h2 className="text-4xl font-bold">Shop premium papers</h2>
        <p className="text-lg mt-2">
          Get Just The Look You Want With Some Of Our Bestselling Options.
        </p>
      </div>

      <Card />

      <div className="text-center py-12 mt-8">
        <h2 className="text-4xl font-bold">Shop by shape</h2>
        <p className="text-lg mt-2">
          Go with a shape that complements your design and logo.
        </p>
      </div>

      <Card />
    </div>
  );
};

export default Premium;

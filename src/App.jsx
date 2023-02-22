import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { MainContext } from "./components/MainContext";
import BrandsData from "./brands.json";
import Copied from "./components/Copied";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Collection from "./components/Collection";

function App() {
  const brandsArray = [];
  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  useEffect(() => {
    const timeAuto = setTimeout(() => {
      setCopied(false);
    }, 1500);
    return () => {
      clearTimeout(timeAuto);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) =>
        brand.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/" exact element={<Content />} />
            <Route path="/collection/:slugs" element={<Collection />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;

import React, { useContext, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { useParams, Link } from "react-router-dom";
import Brand from "./Brand";
import Download from "./Download";
import { MainContext } from "./MainContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Loader from "./Loader";

const Collection = () => {
  const { slugs } = useParams();
  const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext);
  console.log(slugs);

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  const cleareSelectedBrands = () => {
    setSelectedBrands([]);
  };

  return (
    <main className="content">
      <div className="header">
        <Link to="/" onClick={cleareSelectedBrands}>
          <button className="back-btn">
            <AiOutlineArrowLeft />
            All Brands
          </button>
        </Link>
        {selectedBrands.length !== 0 && <Download />}
      </div>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              offset={200}
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
};

export default Collection;

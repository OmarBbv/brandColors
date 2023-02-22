import React, { useContext } from "react";
import Search from "./Search";
import Brand from "./Brand";
import { MainContext } from "./MainContext";
import LazyLoad from "react-lazyload";
import Download from "./Download";
import Loader from "./Loader";

const Content = () => {
  const { brands, selectedBrands } = useContext(MainContext);

  return (
    <main className="content">
      <div className="header">
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </div>
      <section className="brands">
        {brands.map((brand, key) => {
          return (
            <LazyLoad
              offset={200}
              key={key}
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

export default Content;

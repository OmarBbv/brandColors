import React, { useContext } from "react";
import { getContrastYIQ } from "../helpers";
import { MainContext } from "./MainContext";
import ClipboardButton from "react-clipboard.js";

const Brand = ({ brand }) => {
  const { setSelectedBrands, selectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? "selected" : ""
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brands-color">
        {brand.colors.map((color, index) => {
          return (
            <ClipboardButton
              onSuccess={() => setColor(color)}
              key={index}
              data-clipboard-text={color}
              component="span"
              style={{
                "--bgColor": `#${color}`,
                "--textColor": `${getContrastYIQ(color)}`,
              }}
            >
              {color}
            </ClipboardButton>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;

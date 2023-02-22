import React from "react";
import ContentLoader from "react-content-loader";

const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#e4e2e2"
      foregroundColor="#ecebeb"
    >
      <rect x="9" y="15" rx="3" ry="0" width="161" height="11" />
      <rect x="9" y="40" rx="0" ry="0" width="70" height="40" />
      <rect x="82" y="40" rx="0" ry="0" width="70" height="40" />
      <rect x="155" y="40" rx="0" ry="0" width="70" height="40" />
    </ContentLoader>
  );
};

export default Loader;

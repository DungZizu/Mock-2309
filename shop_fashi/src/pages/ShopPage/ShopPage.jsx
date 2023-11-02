import React from "react";
import BreadcrumComponent from "../../components/BreadcrumComponent/BreadcrumComponent";

const ShopPage = (props) => {
  const { textpages = "Shop" } = props;
  return (
    <div>
      <BreadcrumComponent textpages={textpages} />
    </div>
  );
};

export default ShopPage;

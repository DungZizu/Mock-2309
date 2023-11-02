import React from "react";
import BreadcrumComponent from "../../components/BreadcrumComponent/BreadcrumComponent";

const PageAll = (props) => {
  const { textpages = "Pages" } = props;
  return (
    <div>
      <BreadcrumComponent textpages={textpages} />
    </div>
  );
};

export default PageAll;

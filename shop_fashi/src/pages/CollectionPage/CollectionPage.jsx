import React from "react";
import BreadcrumComponent from "../../components/BreadcrumComponent/BreadcrumComponent";

const CollectionPage = (props) => {
  const { textpages = "Collection" } = props;
  return (
    <div>
      <BreadcrumComponent textpages={textpages} />
    </div>
  );
};

export default CollectionPage;

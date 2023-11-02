import React from "react";
import BreadcrumComponent from "../../components/BreadcrumComponent/BreadcrumComponent";

const BlogPage = (props) => {
  const { textpages = "Blog" } = props;
  return (
    <div>
      <BreadcrumComponent textpages={textpages} />
    </div>
  );
};

export default BlogPage;

import React from "react";
import BreadcrumComponent from "../../components/BreadcrumComponent/BreadcrumComponent";

const ContactPage = (props) => {
  const { textpages = " Contact" } = props;
  return (
    <div>
      <BreadcrumComponent textpages={textpages} />
    </div>
  );
};

export default ContactPage;

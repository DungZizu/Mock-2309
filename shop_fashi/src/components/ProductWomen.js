import React from "react";

 const ProductWomen = (product) => {
  const { id, image, category,title, price } = product;
  return (
    <>
      <div className="product-item">
        <div className="pi-pic">
          <img src="http://127.0.0.1:5500/img/products/women-3.jpg" alt="" />
          <div className="icon">
            <i className="icon_heart_alt" />
          </div>
          <ul>
            <li className="w-icon active">
              <a href="#">
                <i className="icon_bag_alt" />
              </a>
            </li>
            <li className="quick-view">
              <a href="#">+ Quick View</a>
            </li>
            <li className="w-icon">
              <a href="#">
                <i className="fa fa-random" />
              </a>
            </li>
          </ul>
        </div>
        <div className="pi-text">
          <div className="catagory-name">
            {/* {category} */}
            women
          </div>
          <a href="#">
            <h5>Guangzhou sweater</h5>
          </a>
          <div className="product-price">
            {/* {price} */}
            35$
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductWomen;

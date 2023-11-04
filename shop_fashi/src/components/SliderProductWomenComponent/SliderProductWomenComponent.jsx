import React, { useContext } from 'react'
import ProductWomen from '../ProductWomen';
import { ProductContext } from '../../contexts/ProductContext';
 const SliderProductWomenComponent = () => {
    const {products} = useContext(ProductContext);
    const filteredProductsWomen = products.filter(item=>{
        return(
            item.category === "women's clothing"
        );
    });
  return<div>
    <section className="women-banner spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="product-large set-bg" data-setbg="">
                <h2>Women’s</h2>
                <a href="#">Discover More</a>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="filter-control">
                <ul>
                  <li className="active">Clothings</li>
                  <li>HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div className="product-slider owl-carousel">
              </div>
            </div>
          </div>
        </div >
        <div>
        {/* {filteredProductsWomen.map(product =>{
                return <ProductWomen product={product} key = {product.id} />
            })} */}
            <ProductWomen/>
        </div>
            
    </section>
  </div>
    
};
export default SliderProductWomenComponent; 

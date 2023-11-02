import React from "react";
import {
  MailFilled,
  PhoneFilled,
  UserOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import LogoShop from "../../assets/Images/logo.png";
import LogoPay from "../../assets/Images/payment-method.png";
import { Link } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";

const HeaderComponent = () => {
  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            <div className="mail-service">
              <MailFilled
                style={{
                  display: "auto",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "16px",
                  padding: "5px 5px",
                }}
              />
              hello.colorlib@gmail.com
            </div>
            <div className="phone-service">
              <PhoneFilled
                style={{
                  display: "auto",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "16px",
                  padding: "5px 5px",
                }}
              />
              +65 11.188.888
            </div>
          </div>
          <div className="ht-right">
            <a
              href="#"
              className="login-panel"
              style={{ textDecoration: "none" }}
            >
              <UserOutlined
                style={{
                  display: "auto",
                  gap: "10px",
                  alignItems: "center",
                  fontSize: "16px",
                  padding: "5px 5px",
                }}
              />
              Login
            </a>
            <div className="top-social">
              <a href="#">
                <FacebookFilled />
              </a>
              <a href="#">
                <InstagramFilled />
              </a>
              <a href="#">
                <TwitterOutlined />
              </a>
              <a href="#">
                <i className="ti-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-header">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="logo">
                <Link to="/">
                  <Image src={LogoShop} preview={false} />
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="advanced-search">
                <button type="button" className="category-btn">
                  All Categories
                </button>
                <div className="input-group">
                  <input type="text" placeholder="What do you need?" />
                  <button type="button">
                    <SearchOutlined />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-right col-md-3">
              <ul className="nav-right">
                <li className="heart-icon">
                  <a href="#">
                    <HeartOutlined style={{ color: "#00000" }} />
                    <span>1</span>
                  </a>
                </li>
                <li className="cart-icon">
                  <a href="#">
                    <ShoppingCartOutlined style={{ color: "#00000" }} />
                    <span>3</span>
                  </a>
                  <div className="cart-hover">
                    <div className="select-items">
                      <table>
                        <tbody>
                          <tr>
                            <td className="si-pic">
                              <img src="img/select-product-1.jpg" alt="" />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close" />
                            </td>
                          </tr>
                          <tr>
                            <td className="si-pic">
                              <img src="img/select-product-2.jpg" alt="" />
                            </td>
                            <td className="si-text">
                              <div className="product-selected">
                                <p>$60.00 x 1</p>
                                <h6>Kabino Bedside Table</h6>
                              </div>
                            </td>
                            <td className="si-close">
                              <i className="ti-close" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="select-total">
                      <span>total:</span>
                      <h5>$120.00</h5>
                    </div>
                    <div className="select-button">
                      <a href="#" className="primary-btn view-card">
                        VIEW CARD
                      </a>
                      <a href="#" className="primary-btn checkout-btn">
                        CHECK OUT
                      </a>
                    </div>
                  </div>
                </li>
                <li className="cart-price">$150.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <div className="container">
          <div className="nav-depart">
            <div className="depart-btn">
              <MenuUnfoldOutlined />
              <span>All departments</span>
              <ul className="depart-hover">
                <li className="active">
                  <a href="#" style={{ textDecoration: "none" }}>
                    Women’s Clothing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Men’s Clothing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Underwear
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Kid's Clothing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Brand Fashion
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Accessories/Shoes
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Luxury Brands
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none" }}>
                    Brand Outdoor Apparel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="nav-menu mobile-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/collection">Collection</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="/#">Men's</Link>
                  </li>
                  <li>
                    <Link to="/#">Women's</Link>
                  </li>
                  <li>
                    <Link to="/#">Kid's</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/Pages">Pages</Link>
                <ul className="dropdown">
                  <li>
                    <a href="./blog-details.html">Blog Details</a>
                  </li>
                  <li>
                    <a href="./shopping-cart.html">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="./check-out.html">Checkout</a>
                  </li>
                  <li>
                    <a href="./faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="./register.html">Register</a>
                  </li>
                  <li>
                    <a href="./login.html">Login</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

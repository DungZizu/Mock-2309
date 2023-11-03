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
import { Badge, Image } from "antd";
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
            <Link
              to={`/login`}
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
            </Link>
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
                <li>
                  <Link to={"#"}>
                    <Badge count={1} size="small">
                      <HeartOutlined
                        style={{ color: "#252525", fontSize: "24px" }}
                      />
                    </Badge>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <Badge count={3} size="small">
                      <ShoppingCartOutlined
                        style={{ color: "#252525", fontSize: "24px" }}
                      />
                    </Badge>
                  </Link>
                </li>
                <li class="cart-price">$150.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <div className="container">
          <div className="nav-depart">
            <div className="depart-btn">
              <i className="ti-menu" />
              <span>All departments</span>
              <ul className="depart-hover">
                <li className="active">
                  <a href="#">Women’s Clothing</a>
                </li>
                <li>
                  <a href="#">Men’s Clothing</a>
                </li>
                <li>
                  <a href="#">Underwear</a>
                </li>
                <li>
                  <a href="#">Kid's Clothing</a>
                </li>
                <li>
                  <a href="#">Brand Fashion</a>
                </li>
                <li>
                  <a href="#">Accessories/Shoes</a>
                </li>
                <li>
                  <a href="#">Luxury Brands</a>
                </li>
                <li>
                  <a href="#">Brand Outdoor Apparel</a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="nav-menu mobile-menu">
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/shop`}>Shop</Link>
              </li>
              <li>
                <Link to={`/collection`}>Collection</Link>
                <ul className="dropdown">
                  <li>
                    <a href="#">Men's</a>
                  </li>
                  <li>
                    <a href="#">Women's</a>
                  </li>
                  <li>
                    <a href="#">Kid's</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/blogs`}>Blog</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li>
                <Link to={`#`}>Pages</Link>
                <ul className="dropdown">
                  <li>
                    <Link to={`#`}>Blog Details</Link>
                  </li>
                  <li>
                    <Link to={`#`}>Shopping Cart</Link>
                  </li>
                  <li>
                    <Link to={`#`}>Checkout</Link>
                  </li>
                  <li>
                    <Link to={`#`}>Faq</Link>
                  </li>
                  <li>
                    <Link to={`/register`}>Register</Link>
                  </li>
                  <li>
                    <Link to={`/login`}>Login</Link>
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

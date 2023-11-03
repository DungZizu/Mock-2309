import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/ImageSlider/hero-1 (1).jpg";
import slider2 from "../../assets/ImageSlider/hero-2.jpg";
import BannerComponent from "../../components/BannerComponent/BannerComponent";

const HomePage = () => {
  return (
    <div>
      <div id="container" style={{ background: "#efefef", padding: "0 0" }}>
        <SliderComponent listImages={[slider1, slider2]} />
      </div>
      <BannerComponent />
    </div>
  );
};

export default HomePage;

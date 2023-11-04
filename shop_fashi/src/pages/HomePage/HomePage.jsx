import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/ImageSlider/hero-1 (1).jpg";
import slider2 from "../../assets/ImageSlider/hero-2.jpg";
<<<<<<< HEAD
import BannerComponent from "../../components/BannerComponent/BannerComponent";
=======
import SliderProductWomenComponent from "../../components/SliderProductWomenComponent/SliderProductWomenComponent";
>>>>>>> dev_tai

const HomePage = () => {
  return (
    <div>
      <div id="container" style={{ background: "#efefef", padding: "0 0" }}>
        <SliderComponent listImages={[slider1, slider2]} />
        <SliderProductWomenComponent/>
      </div>
      <BannerComponent />
    </div>
  );
};

export default HomePage;
